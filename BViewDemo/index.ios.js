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
  View
} from 'react-native';

export default class BViewDemo extends Component {
  render() {
    return (
      <View style={styles.container}>
          {/*<Text>其实我是存在的</Text>*/}
          <View style={styles.innerViewStyle}>
              <Text>我是里面的view</Text>
          </View>
          <View style={styles.innerViewStyle2}>
              <Text>我是下面的view</Text>
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flex:1,
      backgroundColor: 'red',
      // width:300,
      height:100,
      //改变主轴方向----> 默认是竖向
      flexDirection:'row',
      //设置主轴的对齐方式
      justifyContent:'center'
      //设定侧轴的对齐方式
  },
  innerViewStyle:{
      //上边距
      marginTop:25,
      //设置主轴对齐方式
      justifyContent: 'flex-end',
      backgroundColor:  'green',
      width:100
  },
    innerViewStyle2:{
        backgroundColor:  'yellow',
        width:100
    }
});

AppRegistry.registerComponent('BViewDemo', () => BViewDemo);
