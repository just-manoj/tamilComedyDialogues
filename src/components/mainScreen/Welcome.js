import {
  View,
  Text,
  Image,
  Pressable,
  Linking,
  StyleSheet,
} from "react-native";
import { useRef } from "react";
import { Video } from "expo-av";

const Welcome = () => {
  const videoRef = useRef(null);

  const onPlaybackStatusUpdate = (playbackStatus) => {
    if (playbackStatus.didJustFinish) {
      videoRef.current.replayAsync();
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/Welcome.jpg")}
        style={styles.welcomeImg}
      />
      <View style={styles.videoContainer}>
        <Video
          ref={videoRef}
          source={require("../../assets/Welcome.mp4")}
          style={styles.video}
          resizeMode="cover"
          isLooping
          shouldPlay={true}
          onPlaybackStatusUpdate={onPlaybackStatusUpdate}
        />
      </View>
      <Text style={styles.text}>Powered By</Text>
      <Image
        source={require("../../assets/ChannelLogo.jpg")}
        style={styles.welcomeImg}
      />
      <Pressable
        style={({ pressed }) => [
          styles.channelNameContainer,
          pressed && { opacity: 0.5 },
        ]}
        onPress={() =>
          Linking.openURL("https://www.youtube.com/@FreeTimeDeveloper/")
        }
      >
        <Image
          source={require("../../assets/Youtube.png")}
          style={styles.logo}
        />
        <Text style={styles.channelName}>/FreeTimeDevloper</Text>
      </Pressable>
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  videoContainer: {
    width: 200,
    height: 200,
    borderRadius: 100,
    overflow: "hidden",
  },
  video: {
    flex: 1,
  },
  welcomeImg: {
    height: 150,
    width: 300,
    resizeMode: "contain",
  },
  text: {
    paddingTop: 100,
    fontSize: 20,
    fontWeight: "500",
    color: "#b92ad9",
  },
  channelNameContainer: {
    flexDirection: "row",
    alignSelf: "center",
    alignContent: "center",
  },
  logo: {
    height: 22,
    width: 30,
    position: "absolute",
    resizeMode: "cover",
  },
  channelName: {
    marginLeft: 28,
    fontSize: 15,
    fontWeight: "500",
    color: "#19b1c8",
  },
});
