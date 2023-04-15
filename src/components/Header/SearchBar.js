import { View, StyleSheet } from "react-native";

import Search from "../Header/Search";
import Title from "../Header/Title";
import Header from "../ListScreen/Header";

const SearchBar = (props) => {
  const {
    title,
    searchText,
    setSearchText,
    clearSearchText,
    titleState,
    changeTitleHandler,
    withImage,
    listHeaderData,
    navigateToHomeScreen,
  } = props || {};

  return (
    <View style={styles.container}>
      {titleState ? (
        <Search
          changeTitleHandler={changeTitleHandler}
          searchText={searchText}
          setSearchText={setSearchText}
          clearSearchText={clearSearchText}
        />
      ) : withImage ? (
        <Header
          {...listHeaderData}
          navigateToHomeScreen={navigateToHomeScreen}
          changeTitleHandler={changeTitleHandler}
        />
      ) : (
        <Title title={title} changeTitleHandler={changeTitleHandler} />
      )}
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginHorizontal: 10,
    marginBottom: 5,
  },
});
