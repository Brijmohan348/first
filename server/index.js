import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import User from './model/User.model.js';
import conectiondb from './Conection.js';
import multer from 'multer';
import Image from './model/Image.js';

dotenv.config();
const port = process.env.PORT || 5000; // Default to port 5000 if not set

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true,
  maxAge: 3600 // Setting maxAge in seconds
}));

// Set up Multer storage configuration
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './Upload');
  },
  filename: function (req, file, cb) {
    
    cb(null,file.originalname);
  }
});

const upload = multer({ storage: storage });

// Route for file upload
app.post('/profile', upload.single('avatar'),async (req, res) => {
  try {
    const {originalname } =req.file
    const image = new Image({originalname})
    await image.save()
  } catch (error) {
    console.log(error)
  }
});

// Example route to create a user
app.get("/profile",  async(req, res) => {
  try {
    const imagedata = await Image.find({})
    res.send(imagedata)
  } catch (error) {
    console.log(error)
  }
  

});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
