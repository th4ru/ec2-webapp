const express = require('express');
const app = express();
const PORT = 3000;

// Serve frontend files
app.use(express.static('public'));

// API route
app.get('/api/status', (req, res) => {
    res.send('Server is running successfully');
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
