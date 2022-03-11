import { Request } from "express";
import { IPlayListItem } from "../interfaces/play_list_item.interface";
import service from "../services";

const getAllItems = async (
  request: Request,
  response: {
    status: (arg0: number) => {
      send: { (arg0: { message: string; items?: IPlayListItem[] }): void };
    };
  }
) => {
  const all = await service.all();
  response.status(all.status).send({ message: all.message, items: all.items });
};

export default {
  getAllItems,
};
