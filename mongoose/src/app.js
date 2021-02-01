const mongoose = require('mongoose');

// Connection Creation
mongoose.connect("mongodb://localhost:27017/nfg", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log("Connection Successfull...")).catch((err) => console.log(err));

// Create a Schema
const clientListSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: Number,
    city: String,
    date: {
        type: Date,
        default: Date.now,
    },
    author: String,
    active: Boolean,
})

// Collection Create
const Client = new mongoose.model("Client", clientListSchema);

// Create Document or Insert
const createDocument = async () => {
    try {
        const clientList = new Client({
            name: "Prince Patel",
            age: 19,
            city: "Ahmedabad",
            author: "NFG",
            active: true,
        });

        const result = await clientList.save();
        console.log(result);

    } catch (e) {
        console.log(e);
    }
}
createDocument();