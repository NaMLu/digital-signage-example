import mongoose from "mongoose";
const PlayListItemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  duration: {
    type: Number,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
});

const PlayListItem = mongoose.model("PlayListItem", PlayListItemSchema);

export default PlayListItem;
