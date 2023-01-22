import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import { PORT } from "./configs/constants.js";

const app = express();
app.use(express.json());

app.get('/health', (req, res) => res.send('OK'));

app.listen(PORT, () => {
  console.log(`Server running in port ${PORT}`);
})