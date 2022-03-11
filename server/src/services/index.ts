import PlayListItemMongodbService from "./mongodb/PlayListItemMongodbService";
import PlayListItemLocalVariableService from "./localVariable/PlayListItemLocalVariableService";
import { IPlayListItemService } from "../interfaces/play_list_item_service.interface";

let service: IPlayListItemService = new PlayListItemMongodbService();

export default service;
