import PlayListItemController from "../controllers/play_list_item.controller";
import { Express } from "express";

export default function (app: Express) {
  app.get("/api/playlist", PlayListItemController.getAllItems);
  app.post("/api/add", PlayListItemController.addNewItem);
}
