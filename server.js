const express = require('express');
const path = require('path');
const app = express();
const port = 202;

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Fallback route (for all other URLs)
app.get(/.*/, (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
  console.log(`✅ Server running at http://localhost:${port}`);
});
