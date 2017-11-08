/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

export default class DTouchableDemo extends Component {
    render() {
        return (
            <View style={styles.container} onPress={this.renderPress()}>
                <TouchableOpacity activeOpacity={0.5}>
                    <View style={styles.innerViewStyle}>
                        <Text>我是文本，但是可以点击</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }

    //当按下鼠标
    renderPress(){
        console.log('按下鼠标');
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
    innerViewStyle:{
      backgroundColor:'red'

    }
});

AppRegistry.registerComponent('DTouchableDemo', () => DTouchableDemo);
