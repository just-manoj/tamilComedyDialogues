import { Text, Image, StyleSheet, Pressable, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";

const ComedianListItem = (props) => {
  const { comedianName, comedianImageUri, dialoguesCount, index } = props;

  const screenWidth = Dimensions.get("window").width;

  const navigation = useNavigation();

  const navigateToListPage = () => {
    navigation.navigate("List", {
      comedianName,
      comedianImageUri,
      dialoguesCount,
      bgColor: bgColor[fingBGColor()],
    });
  };

  const bgColor = ["#5c89d0", "#cd72eb"];

  const fingBGColor = () => {
    if ((index / 2) % 2 == 1.5) return 0;
    return Math.ceil((index / 2) % 2);
  };

  return (
    <Pressable
      style={({ pressed }) => [
        pressed && styles.pressed,
        { width: screenWidth / 2 - 22.5 },
        styles.full,
        { backgroundColor: bgColor[fingBGColor()] },
        index % 2 ? styles.rightIemContainer : styles.leftItemContainer,
      ]}
      onPress={navigateToListPage}
    >
      <Image source={{ uri: comedianImageUri }} style={styles.image} />
      <Text style={{ color: "#a93108", fontSize: 18, fontWeight: "800" }}>
        {comedianName}
      </Text>
      <Text style={{ color: "#000000", fontSize: 16.5, fontWeight: "800" }}>
        {dialoguesCount}
      </Text>
    </Pressable>
  );
};

export default ComedianListItem;

const styles = StyleSheet.create({
  full: {
    backgroundColor: "#90ddbf",
    alignItems: "center",
    marginBottom: 15,
    paddingBottom: 1,
    elevation: 5,
    color: "#ab09bf",
  },
  pressed: {
    opacity: 0.6,
  },
  leftItemContainer: {
    marginLeft: 15,
    marginRight: 7.5,
  },
  rightIemContainer: {
    marginLeft: 7.5,
    marginRight: 15,
  },
  image: {
    height: 130,
    width: 130,
    padding: 10,
  },
});
