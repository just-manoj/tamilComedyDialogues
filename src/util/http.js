import axios from "axios";

import { Comedian } from "./model";

// https://comedydialogueappdb111-default-rtdb.asia-southeast1.firebasedatabase.app/listAllComedians.json
const www = "https:";
const slas = "/";
const firstHalf = www + slas + slas + "comedydialogueappdb111";
const defaultStr = "default";
const after = "rtdb.asia-southeast1.firebasedatabase.app";
const db = "listAllComedians";
const dbFormat = ".json";

export const fetchAllComediansList = async () => {
  const response = await axios.get(
    firstHalf + "-" + defaultStr + "-" + after + slas + db + dbFormat
  );

  const listAllComedians = [];

  for (const key in response.data) {
    listAllComedians.push(
      new Comedian(
        key,
        response.data[key].comdianName,
        response.data[key].imageUri,
        response.data[key].dialogueCount
      )
    );
  }
  return listAllComedians;
};
