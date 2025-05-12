import express from 'express';
import 'dotenv/config'

const app = express();

const PORT = process.env.PORT || 3000;

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('src/frontend/build'));
}

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
