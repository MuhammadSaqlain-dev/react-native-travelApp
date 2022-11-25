import React, { useRef } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import Card from "./Card";

function CardList({ recommended }) {
  const scrollView = useRef();
  return (
    <View>
      <ScrollView ref={scrollView} horizontal>
        <View style={styles.container}>
          {recommended.map(({ uri, title, text }) => (
            <View key={title} style={{ marginRight: 15 }}>
              <Card imageUri={uri} title={title} text={text} />
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginVertical: 30,
  },
});

export default CardList;
