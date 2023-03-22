import { View, Text, Image, StyleSheet } from "react-native";

const DisplayComedianImage = (props) => {
  const { comedianName, comedianImageUri, dialoguesCount } = props;
  return (
    <View>
      <Image source={{ uri: comedianImageUri }} style={styles.image} />
      <Text>{comedianName}</Text>
      <Text>{dialoguesCount}</Text>
    </View>
  );
};

export default DisplayComedianImage;

const styles = StyleSheet.create({
  image: {
    height: 60,
    width: 60,
  },
});
