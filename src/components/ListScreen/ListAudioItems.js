import { View, Text, StyleSheet } from "react-native";
import AutoScroll from "@homielab/react-native-auto-scroll";
import * as sharing from "expo-sharing";
import * as FileSystem from "expo-file-system";

import IconButton from "../UI/IconButton";

const ListAudioItem = (props) => {
  const { tamilTitle, englishTitle, setNewDialogue, dialogueId, audioUri } =
    props;

  const shareToSocialMedia = async () => {
    try {
      const { uri } = await FileSystem.downloadAsync(
        audioUri,
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
    <View style={styles.constainer}>
      <View style={{ width: 255 }}>
        {tamilTitle.length < 25 ? (
          <Text style={{ fontSize: 18 }}>{tamilTitle}</Text>
        ) : (
          <AutoScroll delay={2150} duration={13000} endPaddingWidth={70}>
            <Text style={{ fontSize: 18 }}>{tamilTitle}</Text>
          </AutoScroll>
        )}
        <Text style={{ fontSize: 16 }}>
          {englishTitle.length < 30
            ? `${englishTitle}`
            : `${englishTitle.substring(0, 30)}...`}
        </Text>
      </View>
      <View style={styles.iconsContainer}>
        <IconButton
          name="play"
          size={35}
          color="black"
          onPress={() => setNewDialogue(dialogueId)}
        />
        <IconButton
          name="logo-whatsapp"
          size={35}
          color="green"
          onPress={shareToSocialMedia}
        />
      </View>
    </View>
  );
};

export default ListAudioItem;

const styles = StyleSheet.create({
  constainer: {
    backgroundColor: "blue",
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
