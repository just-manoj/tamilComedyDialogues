import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

const ComedianListItem = (props) => {
  const { comedianName, comedianImageUri, dialoguesCount, index } = props;

  const navigation = useNavigation();

  const navigateToListPage = () => {
    navigation.navigate("List", {
      comedianName,
      comedianImageUri,
      dialoguesCount,
    });
  };

  return (
    <Pressable
      style={[
        styles.full,
        index % 2 ? styles.rightIemContainer : styles.leftItemContainer,
      ]}
      onPress={navigateToListPage}
    >
      <Image source={{ uri: comedianImageUri }} style={styles.image} />
      <Text>{comedianName}</Text>
      <Text>{dialoguesCount}</Text>
    </Pressable>
  );
};

export default ComedianListItem;

const styles = StyleSheet.create({
  full: {
    flex: 1,
    backgroundColor: "red",
    alignItems: "center",
    marginBottom: 15,
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
