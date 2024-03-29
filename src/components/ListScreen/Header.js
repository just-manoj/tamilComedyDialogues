import { View, Text, Image, StyleSheet } from "react-native";

import IconButton from "../UI/IconButton";

const Header = (props) => {
  const {
    comedianImageUri,
    comedianName,
    navigateToHomeScreen,
    changeTitleHandler,
  } = props;

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <IconButton
          name="arrow-back"
          size={33}
          color="black"
          onPress={navigateToHomeScreen}
        />
        <Image
          source={{ uri: comedianImageUri }}
          style={{ height: 40, width: 40, borderRadius: 20 }}
        />
      </View>
      <Text style={styles.comedianName}>{comedianName}</Text>
      <IconButton
        name="search"
        size={30}
        color="black"
        onPress={changeTitleHandler}
      />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingRight: 10,
  },
  comedianName: {
    fontSize: 22,
    fontWeight: "800",
  },
  count: {
    fontSize: 23,
    fontWeight: "600",
  },
});
