import { View, Text, Image } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../../screens/home/Home";
import CategoryScreen from "../../screens/category/CategoryScreen";
import PanierScreen from "../../screens/Panier/PanierScreen";
import ParameterScreen from "../../screens/parameter/ParameterScreen";
//import home from "../../../assets/images/home.png"
import { Ionicons } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();
const TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: { backgroundColor: "#FFFFFF" },
      }}
    >
      <Tab.Screen
        name="Accueil"
        component={Home}
        options={{
          tabBarIcon: () => {
            <AntDesign name="pluscircleo" size={30} color="#093545" />;
          },
        }}
      />
      <Tab.Screen
        name="category"
        component={CategoryScreen}
        options={{
          tabBarIcon: () => {
            <SimpleLineIcons name="basket" size={24} color="black" />;
          },
        }}
      />
      {/* <View> */}
      <Tab.Screen name="panier" component={PanierScreen} />
      <Tab.Screen name="parametre" component={ParameterScreen} />
      {/* </View> */}
    </Tab.Navigator>
  );
};

export default TabNavigation;
