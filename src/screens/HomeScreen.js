import { View, Text, FlatList } from "react-native";

import DisplayComedianImage from "../components/HomeScreen/DisplayComedianImage";
import Header from "../components/HomeScreen/Header";

const HomeScreen = () => {
  const dummyData = [
    {
      id: 1,
      comedianName: "Vadivelu",
      comedianImageUri:
        "https://comedianimages.s3.ap-south-1.amazonaws.com/vadivelu.jpg",
      dialoguesCount: 6,
    },
    {
      id: 2,
      comedianName: "Vivek",
      comedianImageUri:
        "https://comedianimages.s3.ap-south-1.amazonaws.com/vivek.jpg",
      dialoguesCount: 0,
    },
    {
      id: 3,
      comedianName: "Parithabagal",
      comedianImageUri:
        "https://comedianimages.s3.ap-south-1.amazonaws.com/gosu.jpg",
      dialoguesCount: 2,
    },
    {
      id: 4,
      comedianName: "Plip Plip",
      comedianImageUri:
        "https://comedianimages.s3.ap-south-1.amazonaws.com/plip+plip.jpg",
      dialoguesCount: 1,
    },
  ];
  return (
    <View>
      <Header />
      <FlatList
        data={dummyData}
        keyExtractor={({ id }) => id}
        renderItem={({ item }) => (
          <DisplayComedianImage
            comedianName={item.comedianName}
            comedianImageUri={item.comedianImageUri}
            dialoguesCount={item.dialoguesCount}
          />
        )}
      />
    </View>
  );
};

export default HomeScreen;
