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
import Icon from 'react-native-vector-icons/FontAwesome';
import { globalStyle } from "../../style/globalStyle";

const Tab = createBottomTabNavigator();
const CategoryHeader = ({ title }) => {
  return <View style={{
    // display: 'flex',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: globalStyle.colors.primary,
    // width: 100
  }}>
    <AntDesign name="arrowleft" size={30} color="#900" />
    <Text>{title}</Text>
    <Ionicons name="notifications-outline" size={30} color="#900" />
  </View>
}
const TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: { backgroundColor: "#FFFFFF", height: 90 },
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
        name="Category"
        component={CategoryScreen}
        options={{
          headerTitle: () => <CategoryHeader title="Catégories" />,
          headerStyle: {
            backgroundColor: globalStyle.colors.primary,
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
        // options={{
        //   tabBarIcon: () => {
        //     <SimpleLineIcons name="basket" size={24} color="black" />;
        //   },
        //   headerTitle: () => <CategoryHeader title="Categorie" />
        // }}
      />
      {/* <View> */}
      <Tab.Screen name="panier" component={PanierScreen} />
      <Tab.Screen name="parametre" component={ParameterScreen} />
      {/* </View> */}
    </Tab.Navigator>
  );
};

export default TabNavigation;
