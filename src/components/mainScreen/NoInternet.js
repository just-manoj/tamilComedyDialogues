import { View, Text, Image, StyleSheet, Pressable } from "react-native";

const NoInternet = (props) => {
  const { onPress } = props;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>No Internet</Text>
      <Image
        source={require("../../assets/NoInternet.png")}
        style={styles.image}
      />
      <Text style={styles.subTitle}>Check Internet Connection</Text>
      <Pressable
        onPress={onPress}
        style={styles.button}
        android_ripple={{ color: "#ebba70" }}
      >
        <Text style={styles.buttonText}>Try Again</Text>
      </Pressable>
    </View>
  );
};

export default NoInternet;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 20,
  },
  title: {
    fontSize: 21,
    color: "#e02b68",
    fontWeight: "700",
  },
  image: { width: 200, height: 200 },
  subTitle: {
    marginTop: 30,
    fontSize: 18,
    fontWeight: "500",
  },
  button: {
    marginTop: 15,
    padding: 8,
    borderRadius: 5,
    backgroundColor: "#f21d1d",
  },
  buttonText: {
    fontSize: 20,
    fontWeight: "600",
    color: "#3fe8c6",
  },
});
