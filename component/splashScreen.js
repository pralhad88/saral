import React from 'react';
import { ImageBackground, StyleSheet, View, Image, Text, Animated } from 'react-native';

function SplashScreen(props) {
    const animated = new Animated.Value(0)

    Animated.spring(animated, {
      toValue: 1,
      duration: 1000,
    }).start();
    
    const opacity = animated.interpolate({
        inputRange: [0,1],
        outputRange: [0,1]
    })

    const scale = animated.interpolate({
        inputRange: [0,1],
        outputRange: [-500, 1]
    })
    const transform = [{scale}]
    
    return (
        <ImageBackground 
          source={require('../assets/images1.jpeg')}
          style={styles.background}
        >
            <View style={styles.logContainer}>
                <Image style={styles.logo} source={require('../assets/favicon.png')}></Image>
                <Animated.Text style={[styles.text, {transform, opacity}]}>Welcome To The Navgurukul E-Learning Platform</Animated.Text>
            </View>
        </ImageBackground>
    )
}


const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center"
    },
    loginButton: {
        width: '100%',
        height: 70,
        backgroundColor: '#fc5c65'
    },
    registerButton: {
        width: '100%',
        height: 70,
        backgroundColor: '#4ecdc4'
    },
    logo: {
        width: 80,
        height: 80,
    },
    logContainer: {
        position: 'absolute',
        top: 300,
        alignItems: "center",
    },
    text: {
        overflow: 'hidden', 
        fontSize: 20,
        color: "white",
        margin: 'auto',
        textAlign: "center",
        fontWeight: "bold",
        top: 20
    }   
})

export default SplashScreen;