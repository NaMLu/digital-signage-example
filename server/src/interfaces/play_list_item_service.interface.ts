import type { IPlayListItem } from "./play_list_item.interface";
import type { IPlayListItemResponse } from "./play_list_item_response.interface";

export interface IPlayListItemService {
  all(): IPlayListItemResponse | Promise<IPlayListItemResponse>;

  add(Item: IPlayListItem): void;
}
