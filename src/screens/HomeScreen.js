import { View } from "react-native";
import { useState, useEffect } from "react";

import SearchBar from "../components/Header/SearchBar";
import HomeScreenBody from "../components/HomeScreen/HomeScreenBody";

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
    {
      id: 5,
      comedianName: "G P Muthu",
      comedianImageUri:
        "https://comedianimages.s3.ap-south-1.amazonaws.com/jmk.jpg",
      dialoguesCount: 12,
    },
    {
      id: 6,
      comedianName: "Rajini",
      comedianImageUri:
        "https://comedianimages.s3.ap-south-1.amazonaws.com/rajini.jpg",
      dialoguesCount: 2,
    },
    {
      id: 7,
      comedianName: "Seeman",
      comedianImageUri:
        "https://comedianimages.s3.ap-south-1.amazonaws.com/seeman.jpg",
      dialoguesCount: 1,
    },
    {
      id: 8,
      comedianName: "Kamal",
      comedianImageUri:
        "https://comedianimages.s3.ap-south-1.amazonaws.com/kamal.jpg",
      dialoguesCount: 1,
    },
    {
      id: 9,
      comedianName: "Translator",
      comedianImageUri:
        "https://comedianimages.s3.ap-south-1.amazonaws.com/translate.jpeg",
      dialoguesCount: 4,
    },
    {
      id: 10,
      comedianName: "Others",
      comedianImageUri:
        "https://comedianimages.s3.ap-south-1.amazonaws.com/others.jpg",
      dialoguesCount: 18,
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
      <HomeScreenBody comedianListData={comedianListData} />
    </View>
  );
};

export default HomeScreen;
