import { View, StyleSheet, BackHandler } from "react-native";
import { useRoute } from "@react-navigation/native";
import { useState, useEffect } from "react";
import { Audio } from "expo-av";

import Header from "../components/ListScreen/Header";
import ListScreenBody from "../components/ListScreen/ListScreenBody";
import { fetchAllComedianDialogues } from "../util/http";

const ListScreen = ({ navigation }) => {
  const route = useRoute();

  const [comedianDialogues, setComedianDialogues] = useState([]);
  const [dialogueAudio, setDialogueAudio] = useState(null);
  const [dialogue, setDialogue] = useState({});
  const [isPlaying, setIsPlaying] = useState(false);
  const [isFinish, setIsFinish] = useState(false);

  BackHandler.addEventListener(
    "hardwareBackPress",
    async () => await navigateToHomeScreen()
  );

  const navigateToHomeScreen = async () => {
    await clearDialogueAudio();
    navigation.navigate("Home");
  };

  const onPlayStatusUpdate = (status) => {
    setIsPlaying(status.isPlaying);
    setIsFinish(status.didJustFinish);
  };

  const clearDialogueAudio = async () => {
    if (!dialogueAudio) {
      return;
    }
    await dialogueAudio.pauseAsync();
    await dialogueAudio.unloadAsync();
  };

  const setNewDialogue = async (id) => {
    let dialogueNull = false;
    if ((dialogueAudio && id !== dialogue.dialogueId) || isFinish) {
      clearDialogueAudio();
      setDialogue(null);
      dialogueNull = true;
    }

    if (!dialogueNull && id === dialogue.dialogueId) {
      return forPlayPause(id);
    }

    const data = comedianDialogues.find((d) => d.dialogueId == id);
    const { sound } = await Audio.Sound.createAsync(
      {
        uri: data.dialogueUri,
      },
      { shouldPlay: true },
      onPlayStatusUpdate
    );
    setDialogueAudio(sound);
    setDialogue({ ...data });
  };

  const forPlayPause = async (id) => {
    if (isPlaying) {
      await dialogueAudio.pauseAsync();
    } else {
      await dialogueAudio.playAsync();
    }
  };

  const findPauseId = () => {
    if (dialogue)
      return !isFinish && isPlaying ? dialogue.dialogueId : undefined;
    else return undefined;
  };

  useEffect(() => {
    const fetchComedyDialogueData = async () => {
      const data = await fetchAllComedianDialogues(route.params.comedianName);
      setComedianDialogues(data);
    };
    fetchComedyDialogueData();
  }, [fetchAllComedianDialogues, setComedianDialogues, route]);
  return (
    <View style={styles.full}>
      <Header {...route.params} navigateToHomeScreen={navigateToHomeScreen} />
      <ListScreenBody
        bgColor={route.params.bgColor}
        findPauseId={findPauseId}
        setNewDialogue={setNewDialogue}
        comedianDialogues={comedianDialogues}
      />
    </View>
  );
};

export default ListScreen;

const styles = StyleSheet.create({
  full: {
    flex: 1,
  },
});
