import React from "react";
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Card } from "react-native-elements";

class CountryScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      country: {},
    };
  }

  componentDidMount() {
    this.getData();
  }

  searchingCountry = () => {
    const coutry_name = this.props.route.params.item.Country;
    this.state.backupdata.forEach((element) => {
      if (element.Country === coutry_name) {
        this.setState({ country: element.Country });
        return;
      }
    });
  };

  // Getting countries
  async getData() {
    try {
      const response = await fetch(
        "https://api.covid19api.com/live/country/south-africa/status/confirmed"
      );
      const responseJson = await response.json();
      this.setState(
        {
          isLoading: false,
          dataSource: responseJson,
        },
        function () {}
      );
      const coutry_name = this.props.route.params.item.Country;
      this.state.dataSource.forEach((element) => {
        if (element.Country.localeCompare(coutry_name)) {
          this.setState({ country: element });
        } else {
          this.setState({ country: "Error fetching data!" });
        }
      });
    } catch (error) {
      console.error(error);
    }
  }

  render() {
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
        <Card
          title={this.props.route.params.item.Country}
          // style={{backgroundColor:'gray'}}
          containerStyle={{ width: "80%", backgroundColor: "lightgrey" }}
        >
          <Text style={styles.text}>
            {"Latitude : \t\t\t\t\t" +this.state.country.Lat}
          </Text>
          <Text style={styles.text}>
            {"Longitude : \t\t\t\t" + this.state.country.Lon}
          </Text>
          <Text style={styles.text}>
            {"Confirmed : \t\t\t\t" + this.state.country.Confirmed}
          </Text>
          <Text style={styles.text}>
            {"Deaths : \t\t\t\t\t\t " + this.state.country.Deaths}
          </Text>
          <Text style={styles.text}>
            {"Recovered : \t\t\t\t" + this.state.country.Recovered}
          </Text>
          <Text style={styles.text}>
            {"Active : \t\t\t\t\t\t\t" + this.state.country.Active}
          </Text>
        </Card>
      </View>
    );
  }
}

export default function (props) {
  const navigation = useNavigation();
  return <CountryScreen {...props} navigation={navigation} />;
}

const styles = StyleSheet.create({
  screen: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    height: "100%",
    padding: 20,
    backgroundColor: "#62D272",
  },
  text: {
    fontSize: 20,
    textAlign: "center",
  },
});
