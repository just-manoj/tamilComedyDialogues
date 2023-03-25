import { View, Text, Image, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

import IconButton from "../UI/IconButton";

const Header = (props) => {
  const navigation = useNavigation();
  const { comedianImageUri, comedianName, dialoguesCount } = props;
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <IconButton
          name="arrow-back"
          size={33}
          color="black"
          onPress={() => navigation.navigate("Home")}
        />
        <Image
          source={{ uri: comedianImageUri }}
          style={{ height: 40, width: 40, borderRadius: 20 }}
        />
      </View>
      <Text style={styles.comedianName}>{comedianName}</Text>
      <IconButton name="search" size={30} color="black" onPress={() => {}} />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 6,
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
