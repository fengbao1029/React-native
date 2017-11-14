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
  ListView,
  Image,
  TouchableOpacity
} from 'react-native';

var shareData = require('./shareData.json');



var AListViewDemo = React.createClass({

    //设置默认值、固定值
    getDefaultProps(){

    },

    //设置一些可变化初始值
    getInitialState(){
        // 创建数据源
        var ds = new ListView.DataSource({rowHasChanged:(r1,r2) => r1!==r2});
        return{
            dataSource: ds.cloneWithRows(shareData.data)
        }
    },

    render(){
        return(
            <ListView
                dataSource={this.state.dataSource}
                renderRow={this.renderRow}
            />
        );
    },

    //单独的cell
    renderRow(rowData){
        return(
            <TouchableOpacity activeOpacity={0.5}>
                <View>
                    <Image source={{uri:rowData.icon}} style={styles.iconStyle}/>
                    <Text>{rowData.title}</Text>
                </View>
            </TouchableOpacity>
        );
    }
});



const styles = StyleSheet.create({
   iconStyle:{
       width:80,
       height:80
   }
});

AppRegistry.registerComponent('AListViewDemo', () => AListViewDemo);
