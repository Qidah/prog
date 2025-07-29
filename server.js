const express = require('express');
const app = express();
const userRoutes = require('./routes/userRoutes');
require('dotenv').config();

app.use(express.json());
app.use('/api/users', userRoutes);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something broke!' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
