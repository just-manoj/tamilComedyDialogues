import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import { useState, useEffect } from "react";
import { Audio } from "expo-av";

import ListAudioItem from "./ListAudioItems";
import { fetchAllComedianDialogues } from "../../util/http";

const ListScreenBody = (props) => {
  const { comedianName } = props;
  // console.log(comedianName);
  const dummyList = [
    {
      dialogueId: 1,
      audioUri:
        "https://vadiveludialogues.s3.ap-south-1.amazonaws.com/pothum+pothum+list+perusa+poitu+irruku.mpeg",
      tamilTitle: "போதும் போதும் list பெருசா போயிட்டு இருக்கு",
      englishTitle: "Pothum pothum list perusa poitu iruku",
    },
    {
      dialogueId: 2,
      audioUri:
        "https://vadiveludialogues.s3.ap-south-1.amazonaws.com/Kaasu+illa+pa.mpeg",
      tamilTitle: "காசு இல்ல பா",
      englishTitle: "Kaasu illa pa",
    },
    {
      dialogueId: 3,
      audioUri:
        "https://vadiveludialogues.s3.ap-south-1.amazonaws.com/manda+mela+irrutha+konda+ya+marakalaye+da.mpeg",
      tamilTitle: "மண்ட மேல இருந்த கொண்டைய மறந்துடேன டா",
      englishTitle: "Manda mela iruntha kondaya marathutena da",
    },
    {
      dialogueId: 4,
      audioUri:
        "https://vadiveludialogues.s3.ap-south-1.amazonaws.com/singam+kai+erakiduche.mpeg",
      tamilTitle: "சிங்கம் கலை இறங்கிருச்சி",
      englishTitle: "Singam kalai erangiruchi",
    },
  ];

  const [comedianDialogues, setComedianDialogues] = useState([]);
  const [dialogueAudio, setDialogueAudio] = useState(null);
  const [dialogue, setDialogue] = useState({});
  const [isPlaying, setIsPlaying] = useState(false);
  const [isFinish, setIsFinish] = useState(false);

  const onPlayStatusUpdate = (status) => {
    setIsPlaying(status.isPlaying);
    setIsFinish(status.didJustFinish);
  };

  const setNewDialogue = async (id) => {
    let dialogueNull = false;
    if ((dialogueAudio && id !== dialogue.dialogueId) || isFinish) {
      await dialogueAudio.pauseAsync();
      await dialogueAudio.unloadAsync();
      setDialogue(null);
      dialogueNull = true;
    }

    if (!dialogueNull && id === dialogue.dialogueId) {
      forPlayPause();
      return;
    }

    const data = comedianDialogues.find((d) => d.dialogueId == id);
    console.log(data.dialogueUri);
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

  useEffect(() => {
    const fetchComedyDialogueData = async () => {
      const data = await fetchAllComedianDialogues(comedianName);
      setComedianDialogues(data);
    };
    fetchComedyDialogueData();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={comedianDialogues}
        keyExtractor={({ dialogueId }) => dialogueId}
        renderItem={({ item }) => (
          <ListAudioItem {...item} setNewDialogue={setNewDialogue} />
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
