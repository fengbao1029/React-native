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
  Image,
  ListView
} from 'react-native';

var Dimensions = require('Dimensions');
var {width} = Dimensions.get('window');

//导入json 数据
var Wine = require('./Wine.json');  //数组

var GListViewDemo = React.createClass({
    //设置初始值
    getInitialState(){
        //1.1设置数据源
        var ds = new ListView.DataSource({rowHasChanged:(r1,r2) => r1!==r2});
        //1.2 设置返回数据
        return{
            dataSource:ds.cloneWithRows(Wine)
        }
    },

    //设置render 函数
    render() {
        return(
            <ListView
                dataSource={this.state.dataSource} //数据源
                renderRow={this.renderRow}
            />
        );
    },

    renderRow(rowData,sectionID,rowID,highlightRow) {
         // console.log(rowData,sectionID,rowID)
        return (
            <View style={styles.cellViewStyle}>
                {/*左边的图片*/}
                <Image source={{uri:rowData.image}} style={styles.leftImageStyle}/>
                {/*右边的View*/}
                <View style={styles.cellViewStyle}>
                    {/*上边的text*/}
                    <Text style={styles.topTitleStyle}>{rowData.name}</Text>
                    {/*下边的text*/}
                    <Text style={styles.bottomTitleStyle}>¥{rowData.money}</Text>
                </View>
            </View>

        );
    }
});


const styles = StyleSheet.create({
    cellViewStyle:{
        backgroundColor:'#e8e8e8'
    },
    leftImageStyle:{
        width:60,
        height:60
    },
    topTitleStyle:{

    },
    bottomTitleStyle:{

    }
});

AppRegistry.registerComponent('GListViewDemo', () => GListViewDemo);
