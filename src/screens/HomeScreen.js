import { View } from "react-native";
import { useState, useEffect } from "react";

import SearchBar from "../components/Header/SearchBar";
import HomeScreenBody from "../components/HomeScreen/HomeScreenBody";
import { fetchAllComediansList } from "../util/http";

const HomeScreen = () => {
  const [searchText, setSearchText] = useState("");
  const [titleState, setTitleState] = useState(false);
  const [comedianListData, setComedianListData] = useState([]);

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
    const fetchData = async () => {
      const data = await fetchAllComediansList();
      setComedianListData(data);
    };
    fetchData();
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
      <HomeScreenBody comedianListData={comedianListData} />
    </View>
  );
};

export default HomeScreen;
