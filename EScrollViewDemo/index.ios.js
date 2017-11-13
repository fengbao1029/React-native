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
  ScrollView
} from 'react-native';

class EScrollViewDemo extends Component {
  render() {
    return (
        <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            pagingEnabled={true}
            // scrollEnabled={false}
        >
            {this.renderChildView()}
        </ScrollView>
    );
  }

  renderChildView(){
      //数组
      var allChild = [];
      var colors = ['red','green','blue','yellow','purple'];
      //遍历
      for(var i=0;i<5;i++){
        allChild.push(
            <View key={i} style={{backgroundColor:colors[i], width:375 ,height:120}}>
                <Text>{i}</Text>
            </View>
        );
      }
      //返回
      return allChild;
  }

}

const styles = StyleSheet.create({

});

AppRegistry.registerComponent('EScrollViewDemo', () => EScrollViewDemo);
