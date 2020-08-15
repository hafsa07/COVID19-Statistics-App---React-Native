import React, { useState, useEffect } from 'react';
import { View, ActivityIndicator, Text, Button, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const FetchAPIData = ({ navigation }) => {

  const [getData, setData] = useState();
  const [isLoading, setLoading] = useState(true);

  const getAPIData = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const responseJson = await response.json();
    setLoading(false);
    setData(responseJson);
  }

  useEffect(() => {
    getAPIData();
  });

  if (isLoading) {
    return (
      <View style={{ flex: 1, padding: 20 }}>
        <ActivityIndicator size="large" />
        <Text>Loading Data from JSON Placeholder API ...</Text>
      </View>
    )
  } else {
    return (
      <View style={styles.container}>
        <FlatList
          data={getData}
          renderItem={({ item, i }) => (
            <TouchableOpacity
              activeOpacity={0.5}
              onPress={() => { navigation.navigate('Start', { id: item.id, postID: item.postId, name: item.name, email: item.email, body: item.body }) }}
            >
              <View style={{ flexDirection: "row", padding: 5 }}>
                <Text>{item.body}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    );
  }
}

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Button
        title="POSTS FROM API"
        onPress={() => navigation.navigate('APICall')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', margin: 20 }
});

const StartScreen = ({ navigation, route }) => {
  const id = route.params.id;
  const body = route.params.body;
  return (
    <View>
      <Text>ID</Text>
      <Text>{id}</Text>
      <Text>Body</Text>
      <Text>{body}</Text>
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={"Home"}
        screenOptions={{
          headerTitleAlign: "center",
          headerTintColor: 'grey',
          headerStyle: {
            backgroundColor: 'lightblue'
          }
        }}
      >
        <Stack.Screen
          name="Start"
          component={StartScreen}
          options={{
            title: 'Start Here',
          }}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'Welcome',
            headerShown: false,
          }}
        />
        <Stack.Screen name="APICall" component={FetchAPIData} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;