import mongoose from "mongoose";

import PlayListItemModel from "./play_list_item.model";

const db = {
  mongoose,
  PlayListItemModel,
  initial: (): void => {
    const Item = db.PlayListItemModel;

    Item.estimatedDocumentCount((error: any, count: number) => {
      if (!error && count === 0) {
        new Item({
          name: "Ice",
          url: "https://cdn.shopify.com/s/files/1/2018/8867/files/ice.mp4",
          type: "video",
          duration: 8,
        }).save((error: any) => {
          if (error) {
            console.log("error", error);
          }
          console.log("Added new Item to Items collection");
        });

        new Item({
          name: "Random Image 1",
          url: "https://loremflickr.com/1920/1080?random=1",
          type: "image",
          duration: 3,
        }).save((error: any) => {
          if (error) {
            console.log("error", error);
          }
          console.log("Added new Item to Items collection");
        });

        new Item({
          name: "Random Image 2",
          url: "https://loremflickr.com/1920/1080?random=2",
          type: "image",
          duration: 3,
        }).save((error: any) => {
          if (error) {
            console.log("error", error);
          }
          console.log("Added new Item to Items collection");
        });
      }
    });
  },
};

export default db;
