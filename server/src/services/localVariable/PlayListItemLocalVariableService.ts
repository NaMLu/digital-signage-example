import { IPlayListItemService } from "../../interfaces/play_list_item_service.interface";
import { IPlayListItem } from "../../interfaces/play_list_item.interface";
import { IPlayListItemResponse } from "../../interfaces/play_list_item_response.interface";

export default class PlayListItemLocalVariableService
  implements IPlayListItemService
{
  private list = [
    {
      name: "Ice Video",
      duration: 8,
      url: "https://cdn.shopify.com/s/files/1/2018/8867/files/ice.mp4",
      type: "video",
    },
    {
      name: "Random Image",
      duration: 3,
      url: "https://loremflickr.com/1920/1080?random=1",
      type: "image",
    },
  ] as IPlayListItem[];

  add(Item: IPlayListItem): void {
    this.list.push(Item);
  }

  all(): IPlayListItemResponse {
    return {
      items: this.list,
      message: "Success",
      status: 200,
    } as IPlayListItemResponse;
  }
}
