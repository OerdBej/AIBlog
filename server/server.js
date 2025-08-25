import cors from 'cors';
import 'dotenv/config';
import connectDb from './configs/db.js';
import adminRouter from './routes/adminRoutes.js';
import blogRouter from './routes/blogRoutes.js';
import express from 'express';

const app = express();
app.use(cors());
app.use(express.json());

const startServer = async () => {
  try {
    await connectDb();
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log('server running');
    });
  } catch (error) {
    console.error('Failed to connect to database:', error);
    process.exit(1);
  }
};

app.get('/', (req, res) => res.send('its alive'));
app.use('/api/admin', adminRouter);
app.use('/api/blog', blogRouter);

startServer();

export default app;
