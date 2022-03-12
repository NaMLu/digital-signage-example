// import PlayListItemMongodbService from "./mongodb/PlayListItemMongodbService";
import PlayListItemLocalVariableService from "./localVariable/PlayListItemLocalVariableService";
import { IPlayListItemService } from "../interfaces/play_list_item_service.interface";

const service: IPlayListItemService = new PlayListItemLocalVariableService();

export default service;
