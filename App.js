import React from "react";
import { render } from "react-dom";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import { Header } from "react-native-elements";

export default class App extends React.Component {
  gteWoedd = (word) => {
    var searchKeyWord = word.toLowerCase();
    var url =
      "https://rupinwhitehatjr.github.io/dictionary/%22+searchKeyword+%22.json";
    console.log(url);
    return fetch(url).then((data) => {
      if (data.status === 200) {
        return data.json();
      } else {
        return null;
      }
    });
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.headerStyle}>Dictionary App</Text>
        <View style={styles.searchBox}>
          <TextInput
            style={styles.inputBox}
            placeholder=" Enter a word"
          ></TextInput>
          <TouchableOpacity style={styles.searchButton}>
            <Text>Go</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  headerStyle: {
    fontSize: 20,
  },
  inputBox: {
    borderWidth: 1,
    textAlign: "center",
    height: 40,
    width: "80%",
    alignSelf: "center",
    marginBottom: 30,
    marginTop: 30,
  },

  searchButton: {
    backgroundColor: "orange",
    height: 50,
    width: "60%",
    marginBottom: 30,
    borderRadius: 7,
    alignItems: "center",
    justifyContent: "center",
  },
  searchBox: {
    width: "100%",
    alignItems: "center",
  },
});
