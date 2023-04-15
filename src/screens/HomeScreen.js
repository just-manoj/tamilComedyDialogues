import { View } from "react-native";
import { useState, useEffect } from "react";

import SearchBar from "../components/Header/SearchBar";
import HomeScreenBody from "../components/HomeScreen/HomeScreenBody";
import { fetchAllComediansList } from "../util/http";
import Empty from "../components/common/Empty";

const HomeScreen = () => {
  const [searchText, setSearchText] = useState("");
  const [titleState, setTitleState] = useState(false);
  const [comedianListData, setComedianListData] = useState([]);
  const [tempComedianListData, setTempComedianListData] = useState([]);

  const clearSearchText = () => {
    setComedianListData(tempComedianListData);
    setSearchText("");
  };

  const getSearchInput = (inp) => {
    setSearchText(inp);
    setComedianListData(
      tempComedianListData.filter((item) => {
        return (
          item.comedianName.toUpperCase().indexOf(inp.toUpperCase()) !== -1
        );
      })
    );
  };

  const changeTitleHandler = () => {
    clearSearchText();
    setTitleState(!titleState);
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchAllComediansList();
      setComedianListData(data);
      setTempComedianListData(data);
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
      {comedianListData.length !== 0 ? (
        <HomeScreenBody comedianListData={comedianListData} />
      ) : (
        <Empty>No comedian found</Empty>
      )}
    </View>
  );
};

export default HomeScreen;
