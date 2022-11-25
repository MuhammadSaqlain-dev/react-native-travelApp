import React, { useRef } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import CategoryCard from "./CategoryCard";

function CategoryCardList({ categories }) {
  const scrollView = useRef();
  return (
    <View>
      <ScrollView ref={scrollView} horizontal>
        <View style={styles.container}>
          {categories.map((category) => (
            <View key={category.name} style={{ marginRight: 10 }}>
              <CategoryCard uri={category.uri} name={category.name} />
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
  },
});

export default CategoryCardList;
