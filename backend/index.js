const express=require("express")
const app=express();
const path = require('path');
const cors=require("cors")
app.use(express.json());
const database=require("./config/database")
const dotenv = require("dotenv");
const {cloudinaryConnect } = require("./config/cloudinary");
const fileUpload = require("express-fileupload");
dotenv.config();
const PORT=process.env.PORT || 4000
const allowedOrigins = [
	'http://localhost:3000'
  ];
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use(cors({
	origin: function (origin, callback) {
	  if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
		callback(null, true);
	  } else {
		callback(new Error('Not allowed by CORS'));
	  }
	}
  }));
app.use(
	fileUpload({
		useTempFiles:true,
		tempFileDir:"/tmp",
	})
)
//cloudinary connection
cloudinaryConnect();
database.dbConnect();
const user=require("./routes/user");
const blog=require("./routes/blog");
app.use("/api/v1",user);
app.use("/api/v1",blog);
app.listen(PORT,()=>{
    console.log("App Started At 5000 Port")
})

app.get("/",(req,res)=>{
    res.send("Hiii")
})