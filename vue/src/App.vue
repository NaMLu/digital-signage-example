<template>
  <div class="container">
    <video
      v-if="store.getters.getCurrentData?.type === 'video'"
      autoplay
      muted
      :src="store.getters.getCurrentData?.url"
    ></video>
    <img
      v-if="store.getters.getCurrentData?.type === 'image'"
      :src="store.getters.getCurrentData?.url"
      ref="image"
      alt=""
    />
  </div>
  <div
    class="form"
    :class="{
      'visible-modal': store.getters.getShowModal,
      'unvisible-modal': !store.getters.getShowModal,
    }"
  >
    <IconsComponent />
    <PlayListItemsComponent />
    <FormComponent />
  </div>
</template>

<script setup lang="ts">
import { PlayListAxiosClass } from "@/class/PlayListAxiosClass";
import FormComponent from "@/components/FormComponent.vue";
import PlayListItemsComponent from "@/components/PlayListItemsComponent.vue";
import IconsComponent from "@/components/IconsComponent.vue";
import { useStore } from "vuex";
import { key } from "./store";
import { onMounted } from "vue";

const store = useStore(key);

store.commit("setService", new PlayListAxiosClass());

onMounted(async () => {
  await store.state.service?.fetchPlayList();

  store.state.ticker = setInterval(() => store.commit("increment"), 1000);
});
</script>

<style>
@import url("assets/base.css");
</style>
