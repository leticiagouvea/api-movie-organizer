import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import { PORT } from "./configs/constants.js";
import genreRoutes from "./routes/genresRoutes.js";
import platformRoutes from "./routes/platformsRoutes.js";
import moviesRoutes from "./routes/moviesRoutes.js";

const app = express();
app.use(express.json());

app
  .get('/health', (req, res) => res.send('OK'))
  .use(genreRoutes)
  .use(platformRoutes)
  .use(moviesRoutes);

app.listen(PORT, () => {
  console.log(`Server running in port ${PORT}`);
})