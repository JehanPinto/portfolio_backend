const express = require('express');
const app = express();
const port = 5000;

// this is the entry point//

require('dotenv').config();
const Project = require('./Project');
const Blog = require('./Blog');
const Projectt = require('./Projectt');

app.get('/', (req, res) => {
    res.send('Hello, World!');
});
app.get('/', (req, res) => {
    res.send('Hello, World2');
});

app.get('/projects', async (req, res) => {
    try {
        const projects = await Project.find();
        res.json(projects);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});


app.get('/blogs', async (req, res) => {
    try {
        const blogs = await Blog.find();
        res.json(blogs);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});
app.get('/projectts', async (req, res) => {
    try {
        const projectts = await Projectt.find();
        res.json(projectts);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});