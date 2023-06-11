import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Favorite } from "../screens/Favorite";

const Stack = createNativeStackNavigator();

export default function FavoriteNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Favorito" component={Favorite} options={{title:"Favoritos"}} />
    </Stack.Navigator>
  );
}
