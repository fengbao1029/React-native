/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

// npm install

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';


var Shop = React.createClass({
    render() {
        return(
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    更多
                </Text>
                {/*<Image source={require('./40.png')} style={styles.imgStyle}/>*/}
            </View>
        );
    }
});


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    imgStyle:{
        width:40,
        height:40
    }
});

// 输出组件类
module.exports = Shop;
