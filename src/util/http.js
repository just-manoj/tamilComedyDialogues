import axios from "axios";

import { Comedian, ComedyDialogue } from "./model";

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

export const fetchAllComedianDialogues = async (name) => {
  const response = await axios.get(
    firstHalf + "-" + defaultStr + "-" + after + slas + name + dbFormat
  );

  const listAllComedyDialogues = [];

  for (const key in response.data) {
    listAllComedyDialogues.push(
      new ComedyDialogue(
        key,
        response.data[key].tamilTitle,
        response.data[key].englishTitle,
        response.data[key].audioUri
      )
    );
  }
  return listAllComedyDialogues;
};
