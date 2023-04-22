import { View, Text, Image, StyleSheet } from "react-native";
import { useRef } from "react";
import { Video } from "expo-av";

import ChannelName from "./ChannelName";

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
      <View style={styles.channelContainer}>
        <Text style={styles.text}>Powered By</Text>
        <Image
          source={require("../../assets/ChannelLogo.jpg")}
          style={styles.welcomeImg}
        />
        <ChannelName />
      </View>
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
  channelContainer: { alignItems: "center" },
});
