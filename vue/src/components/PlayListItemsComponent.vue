<template>
  <div class="area" v-if="store.getters.getActiveTab === 1">
    <div class="header">Item List</div>
    <div class="list">
      <div
        :key="i"
        v-for="({ name }, i) in store.getters.getList"
        :class="{ active: store.getters.getCurrentIndex === i }"
      >
        <i class="fa-solid fa-angles-right"></i> {{ name }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useStore } from "vuex";
import { key } from "@/store";

const store = useStore(key);
</script>

<style scoped></style>
