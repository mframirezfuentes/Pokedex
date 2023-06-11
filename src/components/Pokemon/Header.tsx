import { StyleSheet, SafeAreaView, View, Text, Image } from "react-native";
import React from "react";
import { capitalize } from "lodash";
import getColorByPokemonType from "../../utils/getColorByPokemonType";

export default function Header(props) {
  const { name, order, image, type } = props;
  const pokemonColor = getColorByPokemonType(type);


  const bgSytle=[{ backgroundColor: pokemonColor, ...styles.bg }]

  return (
    <>
    <View style={bgSytle} />

    <SafeAreaView style={styles.content}>
      <View style={styles.header}>
        <Text style={styles.name}>{capitalize(name)}</Text>
        <Text style={styles.order}>#{`${order}`}</Text>
      </View>
      <View style={styles.contentImg}>
        <Image source={{ uri: image }} style={styles.image} />
      </View>
    </SafeAreaView>
  </>
  );
}
const styles = StyleSheet.create({
  bg: {
    width: "100%",
    height: 400,
    position: "absolute",
    borderBottomEndRadius: 300,
    borderBottomLeftRadius: 300,
    transform: [{ scaleX: 2 }],
  },
  content: {
    marginHorizontal: 20,
    marginTop: 30,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 40,
  },
  name: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 27,
  },
  order: {
    color: "#fff",
    fontWeight: "bold",
  },
  contentImg: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
    top: 30,
  },
  image: {
    widht: 250,
    height: 300,
    resizeMode:'contain'
  },
});
