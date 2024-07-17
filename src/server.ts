import express, { Request, Response } from 'express';
import mongoose from 'mongoose';
import authenticateJWT from './middleware/auth';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import config from '../config/config.json';
import client from './index';
import { Item } from './models/models'; // Import the schema

dotenv.config();

const app = express();
const port = config.port || 3000;

// Middleware
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect(config.dbUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB');
});

// Routes
// Apply authentication middleware to protected routes
app.post('/items', authenticateJWT, async (req: Request, res: Response) => {
    // Now you have access to (req as any).user to get the logged-in user
    const userId = (req as any).user.userId; // Get the user ID from the JWT 
app.get('/', (req: Request, res: Response) => {
    res.send('Hello There.');
});

// API endpoint to add a new item
app.post('/items', async (req: Request, res: Response) => {
    const { name, description } = req.body;
    const item = new Item({ name, description });
    try {
        await item.save();
        res.status(201).json(item);
    } catch (error) {
        const errorMessage = (error as Error).message;
        res.status(400).json({ error: errorMessage });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});