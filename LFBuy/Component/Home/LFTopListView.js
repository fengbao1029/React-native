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
    Image,
    ListView,
    TouchableOpacity,
    Platform
} from 'react-native';

var Dimensions = require('Dimensions');
var {width} = Dimensions.get('window');

//全局的变量
var cols = 5;
var cellW = Platform.OS === 'ios' ? 72:65;
var cellH = 70;
var vMargin = (width - cellW*cols) / (5+1);

var HomeTopListView = React.createClass({

    getDefaultProps(){
      return{
        dataArr:[]
      }
    },

    getInitialState(){
      //创建数据源
        var ds = new ListView.DataSource({rowHasChanged:(row1,row2)=> row1 !== row2});

      return{
          dataSource:ds.cloneWithRows(this.props.dataArr)
      }
    },

    render() {
        return(
            <ListView
                dataSource={this.state.dataSource}
                renderRow={this.renderRow}
                contentContainerStyle={styles.contentViewStyle}
                scrollEnabled={false}
            />
        );
    },

    //具体的cell
    renderRow(rowData){
        return(
            <TouchableOpacity onPress={()=>{alert('0')}}>
                <View style={styles.cellStyle}>
                    <Image source={{uri:rowData.image}} style={{width:52,height:52}}/>
                    <Text style={styles.titleStyle}>{rowData.title}</Text>
                </View>
            </TouchableOpacity>
        )
    }
});


const styles = StyleSheet.create({

    contentViewStyle:{
        flexDirection:'row',
        //多个cell在同一行显示
        flexWrap:'wrap',
        width:width

    },
    cellStyle:{
        backgroundColor:'white',
        width:cellW,
        height:cellH,
        alignItems:'center',
        justifyContent:'center',
        marginTop:10,
        marginLeft:vMargin
    },
    titleStyle:{
        fontSize:Platform.OS === 'ios' ? 14:10,
        color:'gray'
    }
});

// 输出组件类
module.exports = HomeTopListView;
