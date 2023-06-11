import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/FontAwesome5";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import FavoriteNavigation from "./FavoriteNavigation";
import PokedexNavigation from "./PokedexNavigation";
import AccountNavitagion from "./AccountNavigation";


const Tab = createBottomTabNavigator();

export const Navigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Favorito"
        component={FavoriteNavigation}
        options={{
          title: "Favorito",
          tabBarIcon: ({ color, size }) => (
            <Icon name="heart" color={color} size={size} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Pokedex"
        component={PokedexNavigation}
        options={{
          title: "Pokedex",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="pokeball" size={size} color={color} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Account"
        component={AccountNavitagion}
        options={{
          title: "Mi cuenta",
          tabBarLabel: "Mi cuenta",
          tabBarIcon: ({ color, size }) => (
            <Icon name="user" color={color} size={size} />
          ),
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};
