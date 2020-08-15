import React, { useState, useEffect } from "react";
import { Text, View, ActivityIndicator, FlatList } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Fontisto } from "@expo/vector-icons";
import { Card } from "react-native-elements";

function AfricaScreen() {
  const [getData, setData] = useState();
  const [isLoading, setLoading] = useState(true);

  const getAPIData = () => {
    return fetch(
      "http://covid19-update-api.herokuapp.com/api/v1/world/continent/africa"
    )
      .then((response) => response.json())
      .then((responseJson) => {
        setLoading(false);
        setData(responseJson.countries);
      });
  };

  useEffect(() => {
    getAPIData();
  });

  if (isLoading) {
    return (
      <View
        style={{
          flex: 1,
          padding: 20,
          alignContent: "center",
          justifyContent: "center",
        }}
      >
        <ActivityIndicator size="large" />
      </View>
    );
  } else {
    return (
      <View>
        <FlatList
          data={getData}
          renderItem={({ item }) => (
            <Card>
              <Text style={{ textAlign: "center", fontSize: 15 }}>
                {item.name} =>{" "}
                {"Cases :" + item.cases + "\t\tDeaths : " + item.deaths}
              </Text>
            </Card>
          )}
        />
      </View>
    );
  }
}

function EuropeScreen() {
  const [getData, setData] = useState();
  const [isLoading, setLoading] = useState(true);

  const getAPIData = () => {
    return fetch(
      "http://covid19-update-api.herokuapp.com/api/v1/world/continent/europe"
    )
      .then((response) => response.json())
      .then((responseJson) => {
        setLoading(false);
        setData(responseJson.countries);
      });
  };

  useEffect(() => {
    getAPIData();
  });

  if (isLoading) {
    return (
      <View
        style={{
          flex: 1,
          padding: 20,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <ActivityIndicator size="large" />
      </View>
    );
  } else {
    return (
      <View>
        <FlatList
          data={getData}
          renderItem={({ item }) => (
            <Card>
              <Text style={{ textAlign: "center", fontSize: 15 }}>
                {item.name} =>{" "}
                {"Cases : " + item.cases + "\t\tDeaths : " + item.deaths}
              </Text>
            </Card>
          )}
        />
      </View>
    );
  }
}

function NorthAmericaScreen() {
  const [getData, setData] = useState();
  const [isLoading, setLoading] = useState(true);

  const getAPIData = () => {
    return fetch(
      "http://covid19-update-api.herokuapp.com/api/v1/world/continent/north%20america"
    )
      .then((response) => response.json())
      .then((responseJson) => {
        setLoading(false);
        setData(responseJson.countries);
      });
  };

  useEffect(() => {
    getAPIData();
  });

  if (isLoading) {
    return (
      <View style={{ flex: 1, padding: 20 }}>
        <ActivityIndicator size="large" />
      </View>
    );
  } else {
    return (
      <View>
        <FlatList
          data={getData}
          renderItem={({ item }) => (
            <Card>
              <Text style={{ textAlign: "center", fontSize: 15 }}>
                {item.name} =>{" "}
                {"Cases : " + item.cases + "\t\tDeaths : " + item.deaths}
              </Text>
            </Card>
          )}
        />
      </View>
    );
  }
}
function SouthAmericaScreen() {
  const [getData, setData] = useState();
  const [isLoading, setLoading] = useState(true);

  const getAPIData = () => {
    return fetch(
      "http://covid19-update-api.herokuapp.com/api/v1/world/continent/south%20america"
    )
      .then((response) => response.json())
      .then((responseJson) => {
        setLoading(false);
        setData(responseJson.countries);
      });
  };

  useEffect(() => {
    getAPIData();
  });

  if (isLoading) {
    return (
      <View style={{ flex: 1, padding: 20 }}>
        <ActivityIndicator size="large" />
      </View>
    );
  } else {
    return (
      <View>
        <FlatList
          data={getData}
          renderItem={({ item }) => (
            <Card>
              <Text style={{ textAlign: "center", fontSize: 15 }}>
                {item.name} =>{" "}
                {"Cases : " + item.cases + "\t\tDeaths : " + item.deaths}
              </Text>
            </Card>
          )}
        />
      </View>
    );
  }
}
function AsiaScreen() {
  const [getData, setData] = useState();
  const [isLoading, setLoading] = useState(true);

  const getAPIData = () => {
    return fetch(
      "http://covid19-update-api.herokuapp.com/api/v1/world/continent/asia"
    )
      .then((response) => response.json())
      .then((responseJson) => {
        setLoading(false);
        setData(responseJson.countries);
      });
  };

  useEffect(() => {
    getAPIData();
  });

  if (isLoading) {
    return (
      <View style={{ flex: 1, padding: 20 }}>
        <ActivityIndicator size="large" />
      </View>
    );
  } else {
    return (
      <View>
        <FlatList
          data={getData}
          renderItem={({ item }) => (
            <Card>
              <Text style={{ textAlign: "center", fontSize: 15 }}>
                {item.name} =>{" "}
                {"Cases : " + item.cases + "\t\tDeaths : " + item.deaths}
              </Text>
            </Card>
          )}
        />
      </View>
    );
  }
}

function AustraliaScreen() {
  const [getData, setData] = useState();
  const [isLoading, setLoading] = useState(true);

  const getAPIData = () => {
    return fetch(
      "http://covid19-update-api.herokuapp.com/api/v1/world/continent/africa"
    )
      .then((response) => response.json())
      .then((responseJson) => {
        setLoading(false);
        setData(responseJson.countries);
      });
  };

  useEffect(() => {
    getAPIData();
  });

  if (isLoading) {
    return (
      <View style={{ flex: 1, padding: 20 }}>
        <ActivityIndicator size="large" />
      </View>
    );
  } else {
    return (
      <View>
        <FlatList
          data={getData}
          renderItem={({ item }) => (
            <Card>
              <Text style={{ textAlign: "center", fontSize: 15 }}>
                {item.name} =>{" "}
                {"Cases : " + item.cases + "\t\tDeaths : " + item.deaths}
              </Text>
            </Card>
          )}
        />
      </View>
    );
  }
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (
            route.name === "Africa" ||
            route.name === "Europe" ||
            route.name === "Australia" ||
            route.name === "Asia" ||
            route.name === "South" ||
            route.name === "North"
          ) {
            iconName = focused ? "world-o" : "world-o";
          }

          // You can return any component that you like here!
          return <Fontisto name="world-o" size={20} color="black" />;
        },
      })}
      tabBarOptions={{
        activeTintColor: "#5DADE2   ",
        inactiveTintColor: "grey",
      }}
    >
      <Tab.Screen
        name="Africa"
        component={AfricaScreen}
        options={{ HeaderTitle: "walkh" }}
      />
      <Tab.Screen name="Europe" component={EuropeScreen} />
      <Tab.Screen name="Australia" component={AustraliaScreen} />
      <Tab.Screen name="Asia" component={AsiaScreen} />
      <Tab.Screen name="North" component={NorthAmericaScreen} />
      <Tab.Screen name="South" component={SouthAmericaScreen} />
    </Tab.Navigator>
  );
}
