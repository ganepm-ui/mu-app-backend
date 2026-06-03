
const multer = require("multer");
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://ganepm_db_user:Pornpimol78@ac-a0tnncq-shard-00-00.rpemqka.mongodb.net:27017,ac-a0tnncq-shard-00-01.rpemqka.mongodb.net:27017,ac-a0tnncq-shard-00-02.rpemqka.mongodb.net:27017/muapp?ssl=true&replicaSet=atlas-3s2pck-shard-0&authSource=admin&retryWrites=true&w=majority";
const JWT_SECRET = process.env.JWT_SECRET || "mysecretkey";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/uploads", express.static("uploads"));

const storage = multer.diskStorage({

    destination: (req, file, cb) => {
        cb(null, "uploads/");
    },

    filename: (req, file, cb) => {
        cb(null, Date.now() + "-" + file.originalname);
    }

});

const upload = multer({ storage: storage });

mongoose.connect(MONGODB_URI)
.then(() => {
    console.log("MongoDB Connected");
})
.catch((err) => {
    console.log(err);
});

const reviewSchema = new mongoose.Schema({

    placeId: String,

    username: String,

    comment: String,

    rating: Number,

    image: String

});

const Review = mongoose.model("Review", reviewSchema);
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
    username: String,
    password: String
});

const User = mongoose.model("User", userSchema);

const worshipStepSchema = new mongoose.Schema({
    stepNumber: Number,
    title: String,
    description: String
}, { _id: false });

const placeSchema = new mongoose.Schema({

    name: String,

    image: String,

    description: String,

    googleMap: String,

    appleMap: String,

    tags: [String],

    howToPray: String,

    rating: Number,

    successRate: Number,

    worshipGuide: [worshipStepSchema],

    suitableFor: [String],

    successCount: { type: Number, default: 0 },

    totalPrayerCount: { type: Number, default: 0 }

});

const Place = mongoose.model("Place", placeSchema);

app.get("/", (req, res) => {
    res.send("Mu App API Running");
});

app.get("/reviews", async (req, res) => {

    const reviews = await Review.find();

    res.json(reviews);
});
function auth(req, res, next) {

    const token = req.headers.authorization;

    if (!token) {
        return res.status(401).json({
            message: "No token"
        });
    }

    try {

        const decoded = jwt.verify(
            token,
            JWT_SECRET
        );

        req.user = decoded;

        next();

    } catch (err) {

        res.status(401).json({
            message: "Invalid token"
        });
    }
}
app.post("/reviews", async (req, res) => {

const review = new Review({

    placeId: req.body.placeId,

    username: req.body.username,

    comment: req.body.comment,

    rating: req.body.rating

});
    await review.save();

    res.json({
        message: "Review added",
        data: review
    });
});
app.post("/register", async (req, res) => {

    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    const user = new User({
        username: req.body.username,
        password: hashedPassword
    });

    await user.save();

    res.json({
        message: "User registered"
    });
});

app.post("/login", async (req, res) => {

    const user = await User.findOne({
        username: req.body.username
    });

    if (!user) {
        return res.status(400).json({
            message: "User not found"
        });
    }

    const isMatch = await bcrypt.compare(
        req.body.password,
        user.password
    );

    if (!isMatch) {
        return res.status(400).json({
            message: "Wrong password"
        });
    }

    const token = jwt.sign(
        { id: user._id },
        JWT_SECRET
    );

    res.json({
        message: "Login success",
        token: token
    });
});
app.post("/upload", upload.single("image"), (req, res) => {

    res.json({
        message: "Upload success",
        file: req.file
    });

});
app.post("/places", async (req, res) => {

    const place = new Place({

        name: req.body.name,

        image: req.body.image,

        description: req.body.description,

        googleMap: req.body.googleMap,

        appleMap: req.body.appleMap,

        tags: req.body.tags,

        howToPray: req.body.howToPray,

        rating: req.body.rating,

        successRate: req.body.successRate,

        worshipGuide: req.body.worshipGuide ?? [],

        suitableFor: req.body.suitableFor ?? []

    });

    await place.save();

    res.json({
        message: "Place added",
        data: place
    });

});
app.get("/places", async (req, res) => {

    const places = await Place.find();

    const placesWithRating = await Promise.all(
        places.map(async (place) => {

            const reviews = await Review.find({
                placeId: place._id.toString()
            });

            let averageRating = place.rating;

            if (reviews.length > 0) {
                const total = reviews.reduce((sum, review) => {
                    return sum + (review.rating || 0);
                }, 0);

                averageRating = total / reviews.length;
            }

            return {
                ...place.toObject(),
                rating: Number(averageRating.toFixed(1)),
                reviewCount: reviews.length
            };

        })
    );

    res.json(placesWithRating);

});

app.get("/reviews/:placeId", async (req, res) => {

const reviews = await Review.find({
    placeId: req.params.placeId
}).sort({ _id: -1 });

    res.json(reviews);

});
app.delete("/places/:id", async (req, res) => {

    await Place.findByIdAndDelete(req.params.id);

    res.json({
        message: "Place deleted"
    });

});
app.delete("/reviews/:id", async (req, res) => {

    await Review.findByIdAndDelete(req.params.id);

    res.json({
        message: "Review deleted"
    });

});
app.get("/places/:id", async (req, res) => {

    const place = await Place.findById(req.params.id);

    if (!place) {
        return res.status(404).json({ message: "Place not found" });
    }

    const reviews = await Review.find({ placeId: place._id.toString() });

    let averageRating = place.rating;

    if (reviews.length > 0) {
        const total = reviews.reduce((sum, r) => sum + (r.rating || 0), 0);
        averageRating = total / reviews.length;
    }

    const successRate = place.totalPrayerCount > 0
        ? Math.round((place.successCount / place.totalPrayerCount) * 100)
        : 0;

    res.json({
        ...place.toObject(),
        rating: Number(averageRating.toFixed(1)),
        reviewCount: reviews.length,
        successRate
    });

});

app.post("/places/:id/success", async (req, res) => {

    const place = await Place.findByIdAndUpdate(
        req.params.id,
        { $inc: { successCount: 1, totalPrayerCount: 1 } },
        { new: true }
    );

    if (!place) {
        return res.status(404).json({ message: "Place not found" });
    }

    const successRate = place.totalPrayerCount > 0
        ? Math.round((place.successCount / place.totalPrayerCount) * 100)
        : 0;

    res.json({
        message: "Success recorded",
        data: {
            successCount: place.successCount,
            totalPrayerCount: place.totalPrayerCount,
            successRate
        }
    });

});

app.put("/places/:id/worship-guide", async (req, res) => {

    const place = await Place.findByIdAndUpdate(
        req.params.id,
        { worshipGuide: req.body.worshipGuide },
        { new: true }
    );

    if (!place) {
        return res.status(404).json({ message: "Place not found" });
    }

    res.json({ message: "Worship guide updated", data: place });

});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});