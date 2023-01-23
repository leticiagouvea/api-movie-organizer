import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import { PORT } from "./configs/constants.js";
import genresRoutes from "./routes/genresRoutes.js";
import platformsRoutes from "./routes/platformsRoutes.js";
import moviesRoutes from "./routes/moviesRoutes.js";

const app = express();
app.use(express.json());

app
  .get('/health', (req, res) => res.send('OK'))
  .use(genresRoutes)
  .use(platformsRoutes)
  .use(moviesRoutes);

app.listen(PORT, () => {
  console.log(`Server running in port ${PORT}`);
})