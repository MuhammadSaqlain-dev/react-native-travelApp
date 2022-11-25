import React from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  Platform,
  TouchableHighlight,
} from "react-native";
import { Shadow } from "react-native-shadow-2";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

function Card({ imageUri, title, text }) {
  const navigation = useNavigation();
  return (
    <TouchableHighlight
      underlayColor={"#fff"}
      onPress={() => navigation.navigate("Details")}
    >
      <Shadow distance={6} offset={[0, 3]}>
        <View style={styles.card}>
          <View style={styles.img}>
            <Image
              source={{
                uri: imageUri,
                width: "100%",
                height: "100%",
              }}
            />
          </View>
          <Text style={styles.title}>{title}</Text>
          {text && (
            <View>
              <Text>
                <Ionicons name="location" color="#000" size={15} />
                {text}
              </Text>
            </View>
          )}
        </View>
      </Shadow>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 200,
    height: 250,
    padding: 5,
    borderRadius: 25,
    backgroundColor: "#fff",
  },
  img: {
    width: "100%",
    height: 160,
    borderRadius: 25,
    overflow: "hidden",
    marginBottom: 15,
  },
  title: {
    fontSize: 18,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
});

export default Card;
