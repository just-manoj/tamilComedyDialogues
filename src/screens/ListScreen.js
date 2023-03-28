import { View, StyleSheet } from "react-native";
import { useRoute } from "@react-navigation/native";

import Header from "../components/ListScreen/Header";
import ListScreenBody from "../components/ListScreen/ListScreenBody";

const ListScreen = () => {
  const route = useRoute();
  return (
    <View style={styles.full}>
      <Header {...route.params} />
      <ListScreenBody />
    </View>
  );
};

export default ListScreen;

const styles = StyleSheet.create({
  full: {
    flex: 1,
  },
});
