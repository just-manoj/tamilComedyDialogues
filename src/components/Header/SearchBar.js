import { View, StyleSheet } from "react-native";

import Search from "../Header/Search";
import Title from "../Header/Title";

const SearchBar = (props) => {
  const {
    title,
    searchText,
    setSearchText,
    clearSearchText,
    titleState,
    changeTitleHandler,
  } = props;

  console.log(titleState);
  return (
    <View style={styles.container}>
      {titleState ? (
        <Search
          changeTitleHandler={changeTitleHandler}
          searchText={searchText}
          setSearchText={setSearchText}
          clearSearchText={clearSearchText}
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
