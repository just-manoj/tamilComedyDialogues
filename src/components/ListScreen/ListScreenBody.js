import React from "react";
import { View, FlatList, StyleSheet } from "react-native";

import ListAudioItem from "./ListAudioItems";

const ListScreenBody = (props) => {
  const { comedianDialogues, setNewDialogue, findPauseId } = props;

  return (
    <View style={styles.container}>
      <FlatList
        data={comedianDialogues}
        keyExtractor={({ dialogueId }) => dialogueId}
        renderItem={({ item }) => (
          <ListAudioItem
            {...item}
            setNewDialogue={setNewDialogue}
            setPauseId={findPauseId()}
          />
        )}
      />
    </View>
  );
};

export default ListScreenBody;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
  },
});
