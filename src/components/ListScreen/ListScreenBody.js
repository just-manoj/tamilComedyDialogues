import React from "react";
import { ScrollView } from "react-native";

import ListAudioItem from "./ListAudioItems";

const ListScreenBody = (props) => {
  const { bgColor, comedianDialogues, setNewDialogue, findPauseId } = props;
  return (
    <ScrollView>
      {comedianDialogues.map((item) => {
        return (
          <ListAudioItem
            key={item.dialogueId}
            bgColor={bgColor}
            {...item}
            setNewDialogue={setNewDialogue}
            setPauseId={findPauseId()}
          />
        );
      })}
    </ScrollView>
  );
};

export default ListScreenBody;
