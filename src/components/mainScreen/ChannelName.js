import { Pressable, Text, StyleSheet, Linking } from "react-native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

const ChannelName = () => {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.channelNameContainer,
        pressed && styles.pressed,
      ]}
      onPress={() =>
        Linking.openURL("https://www.youtube.com/@FreeTimeDeveloper/")
      }
    >
      <Ionicons name="logo-youtube" size={21} color="#ff0000" />
      <MaterialCommunityIcons
        name="slash-forward"
        size={19}
        color="#19b1c8"
        style={styles.icon}
      />
      <Text style={styles.channelName}>FreeTimeDeveloper</Text>
    </Pressable>
  );
};

export default ChannelName;

const styles = StyleSheet.create({
  channelNameContainer: {
    flexDirection: "row",
    paddingVertical: 7,
    paddingHorizontal: 10,
    alignItems: "center",
  },
  pressed: {
    opacity: 0.4,
  },
  icon: { marginHorizontal: -6 },
  channelName: {
    fontSize: 15,
    fontWeight: "500",
    color: "#19b1c8",
  },
});
