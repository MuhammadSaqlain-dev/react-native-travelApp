import React from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableHighlight,
} from "react-native";
import { Shadow } from "react-native-shadow-2";

function CategoryCard({ name, uri }) {
  return (
    <TouchableHighlight underlayColor={"#fff"} onPress={() => console.log(".")}>
      <View style={{ marginVertical: 15 }}>
        <Shadow distance={6} offset={[0, 3]}>
          <View style={styles.container}>
            <View style={styles.imgContainer}>
              <Image
                source={{
                  uri: uri,
                  width: "100%",
                  height: "100%",
                }}
              />
            </View>
            <Text>{name}</Text>
          </View>
        </Shadow>
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 25,
    backgroundColor: "#fff",
    paddingHorizontal: 12,
    paddingVertical: 6,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  imgContainer: {
    height: 35,
    width: 35,
    borderRadius: 50,
    overflow: "hidden",
    backgroundColor: "#000",
    marginRight: 4,
  },
});

export default CategoryCard;
