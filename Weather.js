import React, { Component } from 'react';
import { StyleSheet, Text, View, } from 'react-native';
import { LinearGradient } from 'expo';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import PropTypes from "prop-types";

const weatherCases = {
  Rain: {
    colors:["#00C6FB", "#005BEA"],
    title: "Raining like a waterfall",
    subtitle: "For more info look outside",
    icon: 'weather-pouring',
  },
  Mist: {
    colors:["#00C6FB", "#005BEA"],
    title: "Misty Mist",
    subtitle: "It's like you have no glasses on",
    icon: 'weather-fog',
  },
  Clear: {
    colors: ["#FEF253", "#FF7300"],
    title: "Sunny",
    subtitle: "Yesterday my life was filled with rain",
    icon: "weather-sunny",
  },
  Thunderstorm: {
    colors: ["#00ECBC", "#007ADF"],
    title: "Thunderstorm in the house",
    subtitle: "Actually, outside of the house",
    icon: "weather-lightning",
  },
  Clouds: {
    colors: ["#D7D2CC", "#304352"],
    title: "Clouds",
    subtitle: "I know, boring.",
    icon: "weather-cloudy",
  },
  Snow: {
    colors: ["#7DE2FC", "#B9B6E5"],
    title: "Snowy",
    subtitle: "Do you want to build a snowman?",
    icon: "weather-snowy",
  },
  Drizzle: {
    colors: ["#89F7FE", "#66A6FF"],
    title: "Drizzle",
    subtitle: "It's like rain, but not",
    icon: "weather-rainy",
  },
  Haze: {
    colors: ["#89F7FE", "#66A6FF"],
    title: "Haze",
    subtitle: "It's like snow, but gay",
    icon: "weather-windy",
  },
  Night: {
    colors: ["#D7D2CC", "#304352"],
    title: "Night",
    subtitle: "Nighty night, go to bed",
    icon: "weather-night",
  },
}

function Weather({ temp, weatherName }){
  return(
    <LinearGradient
      colors={weatherCases[weatherName].colors}
      style={styles.container}>
      <View style={styles.upper}>
        <MaterialCommunityIcons color='white' size={144} name={weatherCases[weatherName].icon}/>
        <Text style={styles.temp}>{temp}°</Text>
      </View>
      <View style={styles.lower}>
        <Text style={styles.title}>{weatherCases[weatherName].title}</Text>
        <Text style={styles.subtitle}>{weatherCases[weatherName].subtitle}</Text>
      </View>
    </LinearGradient>
  )
}

Weather.propTypes = {
  temp: PropTypes.number.isRequired,
  weatherName: PropTypes.string.isRequired,
}

export default Weather;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  upper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  temp: {
    fontSize: 48,
    color: 'white',
    marginBottom: 24,
    marginTop: 10,
  },
  lower: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    paddingLeft: 25,
  },
  title: {
    fontSize: 38,
    color: 'white',
    marginBottom: 24,
    fontWeight: '300', //skinny
  },
  subtitle: {
    fontSize: 24,
    color: 'white',
    marginBottom: 24,
  }
})
