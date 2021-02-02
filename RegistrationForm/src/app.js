// Express Module Add
const express = require('express');
const app = express();

// Connect to Database
require("./db/conn")

// Add Register JS File
const Register = require("./models/register")

// Run Port
const port = process.env.PORT || 3000;

// Add Static file using path
const path = require("path");

const static_path = path.join(__dirname, "../public");
const template_path = path.join(__dirname, "../templates/");

// Add JSON
app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));

app.use(express.static(static_path));
app.set("view engine", "hbs");
app.set("views", template_path);

app.get("/", (req, res) => {
    res.render("index")
})

app.post("/register", async (req, res) => {
    try {
        const registerEmployee = new Register({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
        })
        const registered = await registerEmployee.save();
        res.status(201).render("index");

    } catch (err) {
        res.status(400).send(err);
    }
})

app.post("/login", async (req, res) => {
    try {
        const username = req.body.username;
        const password = req.body.password;

        const userPass = await Register.findOne({
            username: username
        });

        if (userPass.password === password) {
            res.status(201).render("index");
        } else {
            res.send("Invalid Login Details");
        }


    } catch (err) {
        res.status(400).send("Invalid Email");
    }
})

app.listen(port, () => {
    console.log(`Server is Running at port no ${port}`)
});