const mongoose = require('mongoose');
const chalk = require('chalk');

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

        const result = await clientList //.save();
        console.log(chalk.green(result));

    } catch (e) {
        console.log(chalk.green(e));
    }
}
// createDocument();

// Get Document
const getDocument = async () => {
    const result = await Client.find();
    console.log(chalk.green(result));
}
getDocument();