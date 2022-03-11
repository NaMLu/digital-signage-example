import type { IPlayListItem } from "@/interfaces/IPlayListItem";

export interface IPlayListService {
  fetchPlayList(): void;

  getPlayList(): IPlayListItem[];

  addPlayListItem(item: IPlayListItem): void;
}
