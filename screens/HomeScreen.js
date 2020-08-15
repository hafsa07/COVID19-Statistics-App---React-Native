import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SelectionScreen from "./SelectionScreen";
import CountryDetails from "./CountryDetails";
import { Button } from "react-native-elements";
import Icon from "react-native-vector-icons/Entypo";

export default class HomeScreen extends React.Component {
  render() {
    const Stack = createStackNavigator();
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Search"
          component={SelectionScreen}
          options={{
            // headerTransparent:true,
            title: "Search Country",
            headerTintColor: "black",
            headerTitleAlign: "center",
            headerStyle: { backgroundColor: "#62D272" },
            headerLeft: () => (
              <Button
                onPress={() => {
                  this.props.navigation.openDrawer();
                }}
                icon={<Icon name={"menu"} size={25} />}
                buttonStyle={{
                  backgroundColor: "#62D272",
                  marginLeft: 8,
                }}
              />
            ),
          }}
        />
        <Stack.Screen
          name="Country Detail"
          component={CountryDetails}
          options={{
            title: "Country Details",
            headerTintColor: "black",
            headerTitleAlign: "center",
            headerStyle: { backgroundColor: "#62D272" },
            headerLeft: () => (
              <Button
                onPress={() => {
                  this.props.navigation.openDrawer();
                }}
                icon={<Icon name={"menu"} size={25} />}
                buttonStyle={{ backgroundColor: "#62D272", marginLeft: 8 }}
              />
            ),
          }}
        />
      </Stack.Navigator>
    );
  }
}
