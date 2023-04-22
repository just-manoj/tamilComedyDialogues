import { View, Text, StyleSheet, Dimensions } from "react-native";
import AutoScroll from "@homielab/react-native-auto-scroll";
import * as sharing from "expo-sharing";
import * as FileSystem from "expo-file-system";

import IconButton from "../UI/IconButton";

const ListAudioItem = (props) => {
  const {
    bgColor,
    dialogueTamilTitle,
    dialogueEnglishTitle,
    setNewDialogue,
    dialogueId,
    dialogueUri,
    setPauseId,
  } = props;

  const shareToSocialMedia = async () => {
    try {
      const { uri } = await FileSystem.downloadAsync(
        dialogueUri,
        FileSystem.cacheDirectory + "audio.mp3"
      );
      await sharing.shareAsync(uri, {
        mimeType: "audio/mp3",
        dialogTitle: "",
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View
      key={dialogueId}
      style={[styles.constainer, { backgroundColor: bgColor }]}
    >
      <View style={{ width: "72%" }}>
        {dialogueTamilTitle.length < 20 ? (
          <Text numberOfLines={1} style={styles.tamilText}>
            {dialogueTamilTitle}
          </Text>
        ) : (
          <AutoScroll delay={2150} duration={14000} endPaddingWidth={70}>
            <Text style={styles.tamilText}>{dialogueTamilTitle}</Text>
          </AutoScroll>
        )}
        <Text style={styles.englishText} numberOfLines={1}>
          {dialogueEnglishTitle}
        </Text>
      </View>
      <View style={styles.iconsContainer}>
        <IconButton
          name={setPauseId === dialogueId ? "pause" : "play"}
          size={35}
          color="#11883c"
          onPress={() => setNewDialogue(dialogueId)}
        />
        <IconButton
          name="share-social"
          size={35}
          color="#F2005F"
          onPress={shareToSocialMedia}
        />
      </View>
    </View>
  );
};

export default ListAudioItem;

const styles = StyleSheet.create({
  constainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 8,
    margin: 10,
    padding: 10,
  },
  iconsContainer: {
    backgroundColor: "pink",
    borderRadius: 10,
    flexDirection: "row",
    padding: 2,
  },
  tamilText: {
    paddingBottom: 1,
    fontSize: 18,
    color: "#460c36",
    fontWeight: "800",
  },
  englishText: {
    fontSize: 16.5,
    color: "#4ce6dc",
    fontWeight: "600",
  },
});
