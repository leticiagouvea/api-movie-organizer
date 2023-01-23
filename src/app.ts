import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import { PORT } from "./configs/constants.js";
import genreRoutes from "./routes/genreRoutes.js";

const app = express();
app.use(express.json());

app
  .get('/health', (req, res) => res.send('OK'))
  .use(genreRoutes);

app.listen(PORT, () => {
  console.log(`Server running in port ${PORT}`);
})