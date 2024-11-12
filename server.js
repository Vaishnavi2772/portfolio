import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

// Middleware setup
app.use(cors());
app.use(bodyParser.json());

// MongoDB Atlas connection
const mongoURI = process.env.mongoURI;
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB Atlas'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Define a schema and model for form data
const formSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
});
const FormMessage = mongoose.model('FormMessage', formSchema);

// POST route to handle form submission
app.post('/submit', (req, res) => {
  const { name, email, message } = req.body;

  // Create a new form message document
  const newMessage = new FormMessage({ name, email, message });

  // Save the form data to MongoDB
  newMessage.save()
    .then(() => res.status(200).json({ success: true, message: 'Message sent successfully' }))
    .catch((err) => {
      console.error('Error saving message:', err);
      res.status(500).json({ success: false, message: 'Failed to send message' });
    });
});


// Start the server
const PORT = process.env.PORT || 4009;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
