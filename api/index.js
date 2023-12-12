const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');


const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());
app.use(express.static("web"));

mongoose.connect('mongodb://db:27017/mydatabase', { useNewUrlParser: true, useUnifiedTopology: true });

const User = mongoose.model('User', { name: String });

app.post('/user', async (req, res) => {
    const { name } = req.body;
    const user = new User({ name });

    try {
        await user.save();
        res.send('Usuario creado correctamente');
    } catch (error) {
        res.status(500).send(error.message);
    }
});

app.get('/users', async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

app.listen(port, () => {
    console.log(`Servidor ejecutandose en el puerto ${port}`);
});