<template>
  <div class="iconArea">
    <div class="icon" @click="toggle">
      <i
        :class="{
          'fa-xmark': store.getters.getShowModal,
          'fa-arrow-left': !store.getters.getShowModal,
        }"
        class="fa-solid"
      ></i>
    </div>
    <div
      v-if="store.getters.getShowModal"
      @click="setTab(0)"
      :class="{ active: store.getters.getActiveTab === 0 }"
      class="icon"
    >
      <i class="fa-solid fa-circle-plus"></i>
    </div>
    <div
      v-if="store.getters.getShowModal"
      @click="setTab(1)"
      :class="{ active: store.getters.getActiveTab === 1 }"
      class="icon"
    >
      <i class="fa-solid fa-list"></i>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useStore } from "vuex";
import { key } from "@/store";

const store = useStore(key);

function toggle() {
  store.commit("setShowModal", !store.getters.getShowModal);
}

function setTab(tab: number) {
  store.commit("setActiveTab", tab);
}
</script>

<style scoped></style>
