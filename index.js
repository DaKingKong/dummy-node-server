const express = require('express');

const app = express();
app.listen(5060, () => {
    console.log('Server running on port 5060');
});
app.get('/is-alive', (req, res) => {
    res.send('Yes');
});
