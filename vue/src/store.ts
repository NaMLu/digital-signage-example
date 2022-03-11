import type { InjectionKey } from "vue";
import { createStore, Store } from "vuex";
import type { IPlayListItem } from "@/interfaces/IPlayListItem";
import type { IState } from "@/interfaces/IState";
import type { IPlayListService } from "@/interfaces/IPlayListService";

export const key: InjectionKey<Store<IState>> = Symbol();

export const store = createStore<IState>({
  state: {
    showModal: false,
    activeTab: 0,
    service: undefined,
    ticker: undefined,
    second: 0,
    current: 0,
  },
  mutations: {
    setShowModal(state, show) {
      state.showModal = show;
    },
    setActiveTab(state, tab: number) {
      state.activeTab = tab;
    },
    setService(state, service: IPlayListService) {
      state.service = service;
    },
    increment(state) {
      state.second++;
      const currentData = state.service?.getPlayList()[state.current];
      const total = state.service?.getPlayList()?.length || 0;

      if (currentData?.duration === state.second && state.current < total) {
        state.current++;
        if (state.current == total) {
          state.current = 0;
        }

        state.second = 0;
      }
    },
  },
  getters: {
    getList(state): IPlayListItem[] | [] {
      return state.service?.getPlayList() ?? [];
    },
    getShowModal(state): boolean {
      return state.showModal;
    },
    getActiveTab(state): number {
      return state.activeTab;
    },
    getCurrentData(state): IPlayListItem | undefined {
      return state.service?.getPlayList()[state.current];
    },
    getCurrentIndex(state): number | undefined {
      return state.service
        ?.getPlayList()
        .indexOf(state.service?.getPlayList()[state.current]);
    },
  },
});
