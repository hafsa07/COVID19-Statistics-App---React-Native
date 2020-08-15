import React from "react";
import { StyleSheet, View, Text, ActivityIndicator } from "react-native";
import { Card } from "react-native-elements";

class GlobalSummary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      summary: {},
    };
  }
  componentDidMount() {
    this.getData();
  }

  // Getting countries
  async getData() {
    try {
      const response = await fetch("https://api.covid19api.com/summary");
      const responseJson = await response.json();
      this.setState(
        {
          isLoading: false,
          dataSource: responseJson,
          backupdata: responseJson,
        },
        function () {}
      );
      this.setState({ summary: responseJson.Global });
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
        <Card containerStyle={{ backgroundColor: "lightgrey" }}>
          <Text style={styles.heading}>
            {"New Confirmed -> "}
            {this.state.summary.NewConfirmed}
          </Text>
          {/* <Text style={styles.text}>{this.state.summary.NewConfirmed}</Text> */}
          <Text style={styles.heading}>
            {"\nTotal Confirmed -> "}
            {this.state.summary.TotalConfirmed}
          </Text>
          {/* <Text style={styles.text}>{this.state.summary.TotalConfirmed}</Text> */}
          <Text style={styles.heading}>
            {"\nNew Deaths -> "}
            {this.state.summary.NewDeaths}
          </Text>
          {/* <Text style={styles.text}>{this.state.summary.NewDeaths}</Text> */}
          <Text style={styles.heading}>
            {"\nTotal Deaths -> "}
            {this.state.summary.TotalDeaths}
          </Text>
          {/* <Text style={styles.text}>{this.state.summary.TotalDeaths}</Text> */}
          <Text style={styles.heading}>
            {"\nNew Recovered -> "}
            {this.state.summary.NewRecovered}
          </Text>
          {/* <Text style={styles.text}>{this.state.summary.NewRecovered}</Text> */}
          <Text style={styles.heading}>
            {"\nTotal Recovered -> "}
            {this.state.summary.TotalRecovered}
          </Text>
          {/* <Text style={styles.text}>{this.state.summary.TotalRecovered}</Text> */}
        </Card>
      </View>
    );
  }
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
  heading: {
    fontSize: 24,
  },
  text: {
    fontSize: 20,
  },
});
export default GlobalSummary;
