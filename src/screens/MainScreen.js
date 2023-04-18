import { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import NetInfo from "@react-native-community/netinfo";

import Welcome from "../components/mainScreen/Welcome";
import NoInternet from "../components/mainScreen/NoInternet";

const MainScreen = ({ navigation }) => {
  const [isConnected, setIsConnected] = useState(false);

  const checkNet = () => {
    const unsubscribe = NetInfo.addEventListener((state) => {
      setIsConnected(state.isConnected);
    });
    unsubscribe();
  };

  const executerAfter5Sec = () => {
    let timer = null;

    if (isConnected) {
      timer = setTimeout(() => {
        navigation.navigate("Home");
      }, 4000);
    }

    return () => {
      clearTimeout(timer);
    };
  };

  const tryAgain = () => {
    checkNet();
    executerAfter5Sec();
  };

  useEffect(() => {
    checkNet();
  }, [checkNet]);

  useEffect(() => {
    executerAfter5Sec();
  }, [executerAfter5Sec]);

  return (
    <View style={styles.container}>
      {isConnected ? <Welcome /> : <NoInternet onPress={tryAgain} />}
    </View>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff",
  },
});
