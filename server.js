const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Test route to confirm server works
app.get('/', (req, res) => {
  res.send('AI Wealth App Backend is live!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
