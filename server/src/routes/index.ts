import PlayListRoute from "./playlist.route";
import { Express } from "express";
export default function (app: Express) {
  PlayListRoute(app);
}
