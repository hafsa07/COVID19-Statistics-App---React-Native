import React from "react";
import { StyleSheet, View, Text, ActivityIndicator } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SearchBar, ListItem } from "react-native-elements";
import { FlatList } from "react-native-gesture-handler";

class SelectionScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      isLoading: true,
    };
  }

  // For FlatList and List Item
  keyExtractor = (item, index) => index.toString();
  renderItem = ({ item }) => (
    <ListItem
      title={item.Country}
      containerStyle={{ width: 360 }}
      onPress={() =>
        this.props.navigation.navigate("Country Detail", {
          item: item,
        })
      }
    />
  );

  componentDidMount() {
    this.getData();
  }

  updateSearch = (search) => {
    this.setState({ search });
    const List = [];
    if (search == "") {
      this.setState({ dataSource: this.state.backupdata });
    } else {
      this.state.backupdata.forEach((element) => {
        if (element.Country.toLowerCase().includes(search.toLowerCase())) {
          List.push(element);
        }
      });
      this.setState({ dataSource: List });
    }
  };

  // Getting countries
  async getData() {
    try {
      const response = await fetch("https://api.covid19api.com/countries");
      const responseJson = await response.json();
      this.setState(
        {
          isLoading: false,
          dataSource: responseJson,
          backupdata: responseJson,
        },
        function () {}
      );
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    const { search } = this.state;
    if (this.state.isLoading) {
      return (
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <ActivityIndicator size="large" />
        </View>
      );
    }

    return (
      <View style={styles.screen}>
        {/* Search Bar Code */}
        <SearchBar
          platform="android"
          placeholder="Search"
          onChangeText={this.updateSearch}
          value={search}
          inputContainerStyle={{
            width: 291,
            backgroundColor: "white",
            marginBottom: 20,
          }}
          raised
        />

        <FlatList
          keyExtractor={this.keyExtractor}
          data={this.state.dataSource}
          renderItem={this.renderItem}
        />
      </View>
    );
  }
}

export default function (props) {
  const navigation = useNavigation();
  return <SelectionScreen {...props} navigation={navigation} />;
}

const styles = StyleSheet.create({
  screen: {
    alignItems: "center",
    backgroundColor: "#62D272",
    height: "100%",
    padding: 60,
  },
});
