import { View, Text, StyleSheet } from "react-native";
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
      <View style={{ width: 255 }}>
        {dialogueTamilTitle.length < 20 ? (
          <Text style={{ fontSize: 18 }}>{dialogueTamilTitle}</Text>
        ) : (
          <AutoScroll delay={2150} duration={13000} endPaddingWidth={70}>
            <Text style={{ fontSize: 18 }}>{dialogueTamilTitle}</Text>
          </AutoScroll>
        )}
        <Text style={{ fontSize: 16 }}>
          {dialogueEnglishTitle.length < 28
            ? `${dialogueEnglishTitle}`
            : `${dialogueEnglishTitle.substring(0, 28)}...`}
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
    // backgroundColor: "#cd72eb",
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
});
