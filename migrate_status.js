const mongoose = require("mongoose");

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://ganepm_db_user:Pornpimol78@ac-a0tnncq-shard-00-00.rpemqka.mongodb.net:27017,ac-a0tnncq-shard-00-01.rpemqka.mongodb.net:27017,ac-a0tnncq-shard-00-02.rpemqka.mongodb.net:27017/muapp?ssl=true&replicaSet=atlas-3s2pck-shard-0&authSource=admin&retryWrites=true&w=majority";

mongoose.connect(MONGODB_URI).then(async () => {
    console.log("Connected");
    const result = await mongoose.connection.collection("places").updateMany(
        { status: { $exists: false } },
        { $set: { status: "approved" } }
    );
    console.log(`Updated ${result.modifiedCount} places to status: "approved"`);
    process.exit(0);
}).catch(err => {
    console.error(err);
    process.exit(1);
});
