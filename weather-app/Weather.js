import React, { component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo';
import { Ionicons } from '@expo/vector-icons';
import PropTypes from 'prop-types';

const weatherCases = {
    Rain: {
        colors:["#00C6FB", "#005BEA"],
        title: "Raining",
        subtitle: "For more info look outside",
        icon: 'ios-rainy'
    },
    Mist: {
        colors:["#89F7FE", "#66A6FF"],
        title: "Mist",
        subtitle: "For more info look outside",
        icon: 'ios-rainy-outline'
    },
    Clear: {
        colors:["#FEF253", "#FF7300"],
        title: "Sunny",
        subtitle: "For more info look outside",
        icon: 'ios-sunny'
    },
    Thunderstorm: {
        colors:["#00ECBC", "#007ADF"],
        title: "Thunderstorm",
        subtitle: "For more info look outside",
        icon: 'ios-thunderstorm'
    },
    Clouds: {
        colors:["#D7D2CC", "#304352"],
        title: "Clouds",
        subtitle: "For more info look outside",
        icon: 'ios-clouduy'
    },
    Snow: {
        colors:["#7DE2FC", "#B9B6E5"],
        title: "Snow",
        subtitle: "For more info look outside",
        icon: 'ios-snow'
    },
    Drizzle: {
        colors:["#89F7FE", "#66A6FF"],
        title: "Drizzle",
        subtitle: "For more info look outside",
        icon: 'ios-rainy-outline'
    },
    Haze: {
        colors:["#89F7FE", "#66A6FF"],
        title: "Haze",
        subtitle: "For more info look outside",
        icon: 'ios-rainy-outline'
    }
}

function Weather({ weatherName, temp }) {
    console.log(weatherName);
    return(
        <LinearGradient 
            colors={weatherCases[weatherName].colors}
            style={styles.container}
        >
            <View style={styles.upper}>
                <Ionicons color="white" size={144} name={weatherCases[weatherName].icon}/>
                <Text style={styles.temp}>{temp}℃
                </Text>
            </View>
            <View style={styles.lower}>
                <Text style={styles.title}>{weatherCases[weatherName].title}</Text>
                <Text style={styles.subtitle}>{weatherCases[weatherName].subtitle}</Text>
            </View>
        </LinearGradient>
    );
}

// export default class Weather extends React.Component {
//     render() {
//         return (
//             <LinearGradient 
//             colors={["#00C6FB", "#005BEA"]}
//             style={styles.container}
//             >
//                 <View style={styles.upper}>
//                     <Ionicons color="white" size={144} name="ios-rainy"/>
//                     <Text style={styles.temp}>35℃
//                     </Text>
//                 </View>
//                 <View style={styles.lower}>
//                     <Text style={styles.title}>Raining crazy</Text>
//                     <Text style={styles.subtitle}>For more info look outside</Text>
//                 </View>
//             </LinearGradient>
//         );
//     }
// }

export default Weather;

Weather.propTypes = {
    weatherName: PropTypes.string.isRequired,
    temp: PropTypes.number.isRequired
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    upper: {
        flex: 4,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "transparent"
    },
    temp: {
        fontSize: 48,
        backgroundColor: "transparent",
        color: "white",
        marginTop: 5
    },
    lower: {
        flex: 2,
        alignItems: "flex-start",
        justifyContent: "flex-end",
        paddingLeft: 25
    },
    title: {
        fontSize: 38,
        backgroundColor: "transparent",
        color: "white",
        marginBottom: 10,
        fontWeight: "300"
    },
    subtitle: {
        fontSize: 24,
        backgroundColor: "transparent",
        color: "white",
        marginBottom: 24
    }
});