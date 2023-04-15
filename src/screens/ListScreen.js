import { View, StyleSheet, BackHandler, ActivityIndicator } from "react-native";
import { useRoute } from "@react-navigation/native";
import { useState, useEffect } from "react";
import { Audio } from "expo-av";

import ListScreenBody from "../components/ListScreen/ListScreenBody";
import { fetchAllComedianDialogues } from "../util/http";
import SearchBar from "../components/Header/SearchBar";

const ListScreen = ({ navigation }) => {
  const route = useRoute();

  const [comedianDialogues, setComedianDialogues] = useState([]);
  const [tempComedianDialogues, setTempComedianDialogues] = useState([]);
  const [dialogueAudio, setDialogueAudio] = useState(null);
  const [dialogue, setDialogue] = useState({});
  const [isPlaying, setIsPlaying] = useState(false);
  const [isFinish, setIsFinish] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [titleState, setTitleState] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  //for search
  const clearSearchText = () => {
    setComedianDialogues(tempComedianDialogues);
    setSearchText("");
  };

  const changeTitleHandler = () => {
    clearSearchText();
    setTitleState(!titleState);
  };

  const getSearchInput = (inp) => {
    setSearchText(inp);
    setComedianDialogues(
      tempComedianDialogues.filter((item) => {
        return (
          item.dialogueEnglishTitle.toUpperCase().indexOf(inp.toUpperCase()) !==
            -1 || item.dialogueTamilTitle.indexOf(inp) !== -1
        );
      })
    );
  };

  //for search
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
      return forPlayPause();
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

  const forPlayPause = async () => {
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
      setTempComedianDialogues(data);
      setComedianDialogues(data);
      setIsLoading(false);
    };
    fetchComedyDialogueData();
  }, [fetchAllComedianDialogues, setComedianDialogues, route, setIsLoading]);
  return (
    <>
      {isLoading ? (
        <View style={[styles.full, styles.loading]}>
          <ActivityIndicator size="large" color="#e58525" />
        </View>
      ) : (
        <View style={styles.full}>
          <SearchBar
            withImage
            titleState={titleState}
            searchText={searchText}
            setSearchText={getSearchInput}
            listHeaderData={route.params}
            navigateToHomeScreen={navigateToHomeScreen}
            changeTitleHandler={changeTitleHandler}
            clearSearchText={clearSearchText}
          />
          <ListScreenBody
            bgColor={route.params.bgColor}
            findPauseId={findPauseId}
            setNewDialogue={setNewDialogue}
            comedianDialogues={comedianDialogues}
          />
        </View>
      )}
    </>
  );
};

export default ListScreen;

const styles = StyleSheet.create({
  full: {
    flex: 1,
  },
  loading: {
    justifyContent: "center",
    alignItems: "center",
  },
});
