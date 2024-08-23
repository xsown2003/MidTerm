import express from 'express'
import bodyParser from 'bodyParser';

const bodyParser = require('body-parser');
const { sequelize } = require('./models');

const authRoutes = require('./routes/authRoutes');
const profileRoutes = require('./routes/profileRoutes');

const app = express();
app.use(bodyParser.json());

app.use('/api/authRoutes', authRoutes);
app.use('/api/profileRoutes', profileRoutes);

sequelize.sync({ force: true }).then(() => {
    console.log('Database synced');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
