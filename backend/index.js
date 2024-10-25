import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import shoesRoute from './routes/shoesRoute.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware to parse JSON
app.use(express.json());

// CORS configuration
const allowedOrigins = [
    'https://banzshoe-customer.vercel.app',  // No trailing slash
    'https://banzshoe-admin.vercel.app'       // No trailing slash
];

app.use(cors({
  origin: function (origin, callback) {
      if (!origin || allowedOrigins.indexOf(origin) !== -1) {
          callback(null, true); 
      } else {
          callback(new Error('Not allowed by CORS'));
      }
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));


// Routes
app.use('/api/shoes', shoesRoute);

// MongoDB connection using Mongoose
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB'))
.catch((err) => console.error('Failed to connect to MongoDB', err));

// Basic route for testing
app.get('/', (req, res) => {
    res.send('Express app is running');
});

// Start the server
app.listen(port, (err) => {
    if (err) {
        console.error(`Error starting server: ${err}`);
    } else {
        console.log(`Server running on port ${port}`);
    }
});
