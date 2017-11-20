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
    TextInput,
    Image,
    TouchableOpacity,
    Platform,
    ScrollView
} from 'react-native';

var Dimensions = require('Dimensions');
var {width, height} = Dimensions.get('window');

/**----导入外部的组件类---**/
var HomeDetail = require('./LFHomeDetail');
var TopView = require('./LFTopView');
var MiddleView = require('./LFHomeMiddleView');
var MiddleBottomView = require('./LFMiddleBottomView');

var Home = React.createClass({
    render(){
        return(
            <View style={styles.container}>
                {/*首页导航条*/}
                {this.renderNavBar()}

                {/*首页的主要内容*/}
                <ScrollView>
                    {/*头部的view*/}
                    <TopView />

                    {/*中间的内容*/}
                    <MiddleView />

                    {/*中间下半部分的内容*/}
                    <MiddleBottomView />

                </ScrollView>
            </View>
        );
    },

    //首页导航条
    renderNavBar(){
        return(
            <View style={styles.navBarStyle}>
                {/*左边*/}
                <TouchableOpacity onPress={()=>{alert('点击了')}}>
                <Text style={{color:'white'}}>广州</Text>
                </TouchableOpacity>
                {/*中间*/}
                <TextInput
                    placeholder="输入上架，品类，商圈"
                    style={styles.topInputStyle}
                />
                {/*右边*/}
                <View style={styles.rightNavViewStyle}>
                    <TouchableOpacity onPress={()=>{alert('点击了')}}>
                        <Image source={{uri:'icon_homepage_message'}} style={styles.navRightImgStyle}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>{alert('点击了')}}>
                        <Image source={{uri:'icon_homepage_scan'}} style={styles.navRightImgStyle}/>
                    </TouchableOpacity>
                </View>
            </View>
        )
    },

    // 跳转到二级界面
    pushToDetail(){
        this.props.navigator.push(
            {
                component: HomeDetail, // 要跳转的版块
                title:'详情页'
            }
        );
    }
});


const styles = StyleSheet.create({
    navBarStyle:{//导航条的样式
        height:Platform.OS === 'ios' ? 64:44,
        flexDirection:'row',
        backgroundColor:'rgba(255,96,0,1.0)',
        alignItems:'center',
        //设置主轴的对齐方式
        justifyContent:'space-around'
    },
    rightNavViewStyle:{
        flexDirection:'row',
        // backgroundColor:'blue',
        height:64,
        alignItems:'center'
    },
    topInputStyle:{//设置输入框
        width:width*0.7,
        height:Platform.OS === 'ios' ? 35:30,
        backgroundColor:'white',
        marginTop:Platform.OS === 'ios'? 18 : 0,
        borderRadius:18,
        marginLeft:5,
        //设置内左边距
        paddingLeft:10
    },
    navRightImgStyle:{//设置图片大小
        width:Platform.OS === 'ios'? 28 : 24,
        height:Platform.OS === 'ios'? 28 : 24,
    },
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    }
});

// 输出组件类
module.exports = Home;
