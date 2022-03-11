import express from "express";
import routes from "./src/routes";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

/*let playlist = [
  {
    name: "Buzullar.",
    url: "https://cdn.shopify.com/s/files/1/2018/8867/files/ice.mp4",
    type: "video",
    duration: 8,
  },
  {
    name: "Rastgele Resim",
    url: "https://loremflickr.com/1920/1080?random=1",
    type: "image",
    duration: 3,
  },
  {
    name: "Rastgele Resim",
    url: "https://loremflickr.com/1920/1080?random=2",
    type: "image",
    duration: 3,
  },
  {
    name: "Rastgele Resim",
    url: "https://loremflickr.com/1920/1080?random=3",
    type: "image",
    duration: 3,
  },
];

app.get("/api/list", (request: Request, response: Response) => {
  response.json(playlist);
});

app.post("/api/add", (request: Request, response: Response) => {
  const object = {
    name: request.body.name,
    url: request.body.url,
    type: request.body.type,
    duration: request.body.duration,
  };

  playlist.push(object);

  response.json(object);
});*/

routes(app);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT}`);
});
