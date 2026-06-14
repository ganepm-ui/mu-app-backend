const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://ganepm_db_user:Pornpimol78@ac-a0tnncq-shard-00-00.rpemqka.mongodb.net:27017,ac-a0tnncq-shard-00-01.rpemqka.mongodb.net:27017,ac-a0tnncq-shard-00-02.rpemqka.mongodb.net:27017/muapp?ssl=true&replicaSet=atlas-3s2pck-shard-0&authSource=admin&retryWrites=true&w=majority";

const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    isAdmin: { type: Boolean, default: false }
});

const User = mongoose.model("User", userSchema);

mongoose.connect(MONGODB_URI).then(async () => {
    console.log("Connected to MongoDB");

    const existing = await User.findOne({ username: "admin@muapp.com" });
    if (existing) {
        console.log("Admin user already exists");
        process.exit(0);
    }

    const hashed = await bcrypt.hash("admin1234", 10);
    const admin = new User({
        username: "admin@muapp.com",
        password: hashed,
        isAdmin: true
    });
    await admin.save();
    console.log("Admin user created: admin@muapp.com / admin1234");
    process.exit(0);
}).catch(err => {
    console.error(err);
    process.exit(1);
});
