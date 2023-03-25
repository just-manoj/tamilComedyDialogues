import { View, Text } from "react-native";
import { useRoute } from "@react-navigation/native";

import IconButton from "../components/UI/IconButton";
import Header from "../components/ListScreen/Header";

const ListScreen = ({ props }) => {
  const route = useRoute();
  const { comedianImageUri, comedianName, dialoguesCount } = route.params;
  return <Header {...route.params} />;
};

export default ListScreen;
