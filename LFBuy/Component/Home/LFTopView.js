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
    ScrollView
} from 'react-native';

var Dimensions = require('Dimensions');
var {width} = Dimensions.get('window');

//引入外部json 数据
var TopMenu = require('../../LocalData/TopMenu.json');

//引入外部组件
var TopListView = require('./LFTopListView');

var TopView = React.createClass({

    getInitialState(){
        return{
            activePage:0,
        }
    },

    render() {
        return(
            <View style={styles.container}>
                {/*内容部分*/}
                <ScrollView
                    horizontal={true}
                    pagingEnabled={true}
                    showsHorizontalScrollIndicator={false}
                    onMomentumScrollEnd = {this.scrollAnimationEnd}
                >
                    {this.renderScrollItem()}
                </ScrollView>
                {/*页码部分*/}
                <View style={styles.indicatorViewStyle}>
                    {this.renderIndicator()}
                </View>
            </View>
        );
    },

    //当一帧滚动结束的时候
    scrollAnimationEnd(e){
        //求出当前的页码
        var currentPage = Math.floor( e.nativeEvent.contentOffset.x / width);
        this.setState({
           activePage:currentPage
        });

    },

    //scrollView 内部的组件
    renderScrollItem(){
        //组件数组
        var itemArr = [];
        //颜色数组  ---> 数据数组
        var dataArr = TopMenu.data;
        //遍历创建组件
        for (var i = 0; i<dataArr.length; i++){
            itemArr.push(
                <TopListView key={i}
                    dataArr = {dataArr[i]}
                />
            );
        }
        return itemArr;
    },

    //页码指示器
    renderIndicator(){
        //指示器数组
        var indicatorArr = [], style;
        //遍历创建组件
        for (var i= 0; i< 2 ; i++){
           // 设置圆点的样式
            style = (i === this.state.activePage) ? {color:'orange'} : {color:'gray'}
            indicatorArr.push(
                <Text key={i} style={[{fontSize:25},style]}>&bull;</Text>
            );
        }
        return indicatorArr;
    }
});


const styles = StyleSheet.create({
    container: {
        backgroundColor:'white'
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    indicatorViewStyle:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'
    }
});

// 输出组件类
module.exports = TopView;
