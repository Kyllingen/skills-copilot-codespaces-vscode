// Create web server application
// 1. Create a web server
// 2. Create a route for GET /comments
// 3. Create a route for POST /comments
// 4. Create a route for DELETE /comments/:id
// 5. Create a route for PUT /comments/:id
// 6. Create a route for GET /comments/:id

// 1. Create a web server
const express = require('express');
const app = express();
const port = 3000;

// 2. Create a route for GET /comments
app.get('/comments', (req, res) => {
    res.send('GET /comments');
});

// 3. Create a route for POST /comments
app.post('/comments', (req, res) => {
    res.send('POST /comments');
});

// 4. Create a route for DELETE /comments/:id
app.delete('/comments/:id', (req, res) => {
    res.send('DELETE /comments/:id');
});

// 5. Create a route for PUT /comments/:id
app.put('/comments/:id', (req, res) => {
    res.send('PUT /comments/:id');
});

// 6. Create a route for GET /comments/:id
app.get('/comments/:id', (req, res) => {
    res.send('GET /comments/:id');
});

// 7. Start the web server
app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
});