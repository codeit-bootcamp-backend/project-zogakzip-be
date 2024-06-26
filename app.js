import express from 'express';
import groupRoutes from './src/routes/groupRoutes.js';
import postRoutes from './src/routes/postRoutes.js';
import commentRoutes from './src/routes/commentRoutes.js';
import baseRoutes from './src/routes/baseRoutes.js';
import cors from 'cors';

const app = express();
const baseRoute = '/api';

app.use(express.json());
app.use(cors());

app.use(baseRoute, groupRoutes);
app.use(baseRoute, postRoutes);
app.use(baseRoute, commentRoutes);
app.use(baseRoute, baseRoutes);
app.use('/uploads', express.static('uploads'))

app.listen(3001);