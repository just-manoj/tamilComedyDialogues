import { View, FlatList } from "react-native";

import ComedianListItem from "../HomeScreen/ComedianListItem";

const HomeScreenBody = (props) => {
  const { comedianListData } = props;
  return (
    <View>
      <FlatList
        data={comedianListData}
        keyExtractor={({ id }) => id}
        numColumns={2}
        renderItem={({ item, index }) => (
          <ComedianListItem
            index={index}
            comedianName={item.comedianName}
            comedianImageUri={item.imageUri}
            dialoguesCount={item.dialogueCount}
          />
        )}
      />
    </View>
  );
};

export default HomeScreenBody;
