import type { IPlayListService } from "@/interfaces/IPlayListService";

export interface IState {
  showModal: boolean;
  activeTab: number;
  service?: IPlayListService;
  ticker?: number;
  second: number;
  current: number;
}
