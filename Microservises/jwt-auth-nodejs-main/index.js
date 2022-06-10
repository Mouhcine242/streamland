
const express = require('express');
const app = express();

const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/userData', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("MongoDB Conected")
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};
connectDB();
// middileware
app.use(express.json());

// routes
const auth_routes = require('./routes/auth.route');
const user_routes = require('./routes/user.route');

app.use('/v1/auth', auth_routes);
app.use('/v1/user', user_routes);



app.listen(4000, () => console.log('server is running..'));