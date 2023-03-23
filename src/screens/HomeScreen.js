import { View, Text, FlatList } from "react-native";
import { useState, useEffect } from "react";

import SearchBar from "../components/Header/SearchBar";
import DisplayComedianImage from "../components/HomeScreen/DisplayComedianImage";

const HomeScreen = () => {
  const [searchText, setSearchText] = useState("");
  const [titleState, setTitleState] = useState(false);
  const [comedianListData, setComedianListData] = useState([]);

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

  const clearSearchText = () => {
    setComedianListData(comedianListData);
    setSearchText("");
  };

  const getSearchInput = (inp) => {
    setSearchText(inp);
    setComedianListData(
      comedianListData.filter((item) => {
        return (
          item.comedianName.toUpperCase().indexOf(inp.toUpperCase()) !== -1
          // || item.title.toUpperCase().indexOf(inp.toUpperCase()) !== -1
        );
      })
    );
  };

  const changeTitleHandler = () => {
    setComedianListData(comedianListData);
    setSearchText("");
    setTitleState(!titleState);
  };

  useEffect(() => {
    setComedianListData(dummyData);
  }, []);
  return (
    <View style={{ flex: 1 }}>
      <SearchBar
        changeTitleHandler={changeTitleHandler}
        titleState={titleState}
        title="Tamil Comedy Dialogues"
        searchText={searchText}
        setSearchText={getSearchInput}
        clearSearchText={clearSearchText}
      />
      <FlatList
        data={comedianListData}
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
