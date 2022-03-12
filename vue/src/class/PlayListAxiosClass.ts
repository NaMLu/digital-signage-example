import type { IPlayListService } from "@/interfaces/IPlayListService";
import axios, { type AxiosInstance } from "axios";
import type { IPlayListItem } from "@/interfaces/IPlayListItem";

export class PlayListAxiosClass implements IPlayListService {
  private readonly _axios: AxiosInstance;
  private list: IPlayListItem[] = [];

  public constructor() {
    this._axios = axios.create({
      baseURL: import.meta.env.VITE_API_BASE_URL,
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
      },
    });
  }

  async addPlayListItem(item: IPlayListItem): Promise<void> {
    this.list.push(
      await this.getAxios()
        .post("/add", {
          name: item.name,
          duration: item.duration,
          type: item.type,
          url: item.url,
        })
        .then(({ data }) =>
          data.items.length > 0
            ? (data.items[0] as IPlayListItem)
            : ({} as IPlayListItem)
        )
    );
  }

  getPlayList() {
    return this.list;
  }

  async fetchPlayList(): Promise<void> {
    this.list = await this.getAxios()
      .get("/playlist")
      .then(({ data }) => data.items as IPlayListItem[]);
  }

  getAxios() {
    return this._axios;
  }
}
