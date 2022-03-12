import PlayListItemMongodbService from "./mongodb/PlayListItemMongodbService";
import PlayListItemLocalVariableService from "./localVariable/PlayListItemLocalVariableService";
import { IPlayListItemService } from "../interfaces/play_list_item_service.interface";
import dotenv from "dotenv";
dotenv.config();

const service: IPlayListItemService =
  process.env.ISMONGO == "true"
    ? new PlayListItemMongodbService()
    : new PlayListItemLocalVariableService();

export default service;
