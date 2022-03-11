<template>
  <div class="area" v-if="store.getters.getActiveTab === 0">
    <div class="header">New Play List Item</div>
    <form action="" @submit.prevent="addNewItem">
      <div class="form-element">
        <label for="">Name</label>
        <input
          v-model="playerItem.name"
          type="text"
          required
          placeholder="Enter source name."
        />
      </div>
      <div class="form-element">
        <label for="">Duration (seconds)</label>
        <input
          v-model="playerItem.duration"
          type="number"
          required
          min="1"
          placeholder="Enter the playing time in seconds."
        />
      </div>
      <div class="form-element">
        <label for="">Url</label>
        <input
          type="url"
          required
          v-model="playerItem.url"
          placeholder="Enter source url."
        />
      </div>
      <div class="form-element">
        <label for="">Type</label>
        <select name="type" required v-model="playerItem.type" id="">
          <option value="">Plase Choose Source Type</option>
          <option value="image">Image</option>
          <option value="video">Video</option>
        </select>
      </div>
      <button type="submit">Add</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { useStore } from "vuex";
import { reactive } from "vue";
import { key } from "@/store";
import type { IPlayListItem } from "@/interfaces/IPlayListItem";

const store = useStore(key);

const playerItem = reactive({
  name: "",
  duration: 1,
  url: "",
  type: "",
} as IPlayListItem);

function resetForm() {
  playerItem.name = "";
  playerItem.duration = 1;
  playerItem.url = "";
  playerItem.type = "";
}

function addNewItem() {
  store.state.service?.addPlayListItem(playerItem);

  resetForm();
}
</script>

<style scoped></style>
