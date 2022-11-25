// I need to learn flexbox topic.
import React from "react";
import {
  View,
  Image,
  Text,
  StyleSheet,
  Platform,
  ScrollView,
} from "react-native";
import { Shadow } from "react-native-shadow-2";
import { Ionicons } from "@expo/vector-icons";
import AppButton from "../components/AppButton";

const DisplayAnImageWithStyle = () => {
  return (
    <View>
      <View style={styles.imgContainer}>
        <Image
          style={{
            resizeMode: "cover",
            height: "100%",
            width: "100%",
          }}
          source={require("../assets/Galapagos-Islands.jpeg")}
        />
      </View>

      <View>
        <ScrollView style={styles.detailsContainer}>
          <Shadow distance={6} offset={[0, 3]}>
            <View style={styles.detailContainer}>
              <Text style={styles.title}>Kyoto</Text>
              <View style={styles.span}>
                <Ionicons name="location-sharp" size={15} style={styles.icon} />
                <Text style={styles.text}>Japan</Text>
              </View>
              <Text style={styles.title}>Trip Details</Text>
              <Text style={styles.text}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Reprehenderit, debitis asperiores, dignissimos odio corrupti
                nostrum fugit modi provident mollitia dolor, rerum magni officia
                laudantium distinctio dolorum reiciendis quibusdam in. Nesciunt.
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Lorem
                ipsum dolor sit, amet consectetur adipisicing elit. Lorem ipsum
                dolor sit, amet consectetur adipisicing elit.
              </Text>
              <View
                style={{
                  borderBottomColor: "#d3d3d3",
                  borderBottomWidth: StyleSheet.hairlineWidth,
                  marginTop: 8,
                }}
              />
              <View style={styles.table}>
                <View style={styles.record}>
                  <Text style={{ flex: 1 }}>Duration</Text>
                  <Text style={{ fontWeight: "bold", flex: 4 }}>15 Days</Text>
                </View>
                <View style={styles.record}>
                  <Text style={{ flex: 1 }}>Route</Text>
                  <Text style={{ fontWeight: "bold", flex: 4 }}>
                    17000 kilometers
                  </Text>
                </View>
              </View>
              <View
                style={{
                  position: "absolute",
                  width: "100%",
                  bottom: 30,
                  left: 5,
                }}
              >
                <AppButton
                  text={"Book Trip"}
                  bckColor={"#D68A49"}
                  fontColor={"#fff"}
                />
              </View>
            </View>
          </Shadow>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  imgContainer: {
    width: "100%",
    height: 420,
  },
  detailsContainer: {
    position: "absolute",
    top: -15,
    zIndex: 1,
  },
  detailContainer: {
    backgroundColor: "#fff",
    borderRadius: 25,
    padding: 5,
    minHeight: 465,
  },
  title: {
    fontSize: 20,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    fontWeight: "bold",
    paddingVertical: 10,
  },
  text: {
    color: "#000",
  },
  span: {
    flexDirection: "row",
  },
  icon: {
    paddingRight: 5,
  },
  table: {
    flexDirection: "column",
    height: 70,
    justifyContent: "space-evenly",
  },
  record: {
    flexDirection: "row",
    display: "flex",
  },
});

export default DisplayAnImageWithStyle;
