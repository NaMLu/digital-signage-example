import { IPlayListItem } from "./play_list_item.interface";

export interface IPlayListItemResponse {
  items: IPlayListItem[];
  message: string;
  status: number;
}
