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
    TextInput
} from 'react-native';

var Dimensions = require('Dimensions');
var width = Dimensions.get('window').width;


 class loginView extends Component {
    render() {
        return (
            <View style={styles.container}>
                {/*头像*/}
                <Image source={require('./Img/icon.png')} style={styles.iconstyle} />
                {/*账号和密码*/}
                <TextInput placeholder={'请输入用户名'} style={styles.textInputstyle}/>
                <TextInput placeholder={'请输入密码'} password={true} style={styles.textInputstyle} />
                {/*登录*/}
                <View style={styles.loginBtnStyle}>
                    <Text style={{color:'white'}}>登陆</Text>
                </View>
                {/*设置*/}
                <View style={styles.settingStyle}>
                    <Text>无法登陆</Text>
                    <Text>新用户</Text>
                </View>
                {/*其他的登录方式*/}
                <View style={styles.otherLoginStyle}>
                    <Text>其他登录方式：</Text>
                    <Image source={require('./Img/icon3.png')}  style={styles.otherImgStyle} />
                    <Image source={require('./Img/icon7.png')}  style={styles.otherImgStyle} />
                    <Image source={require('./Img/icon8.png')}  style={styles.otherImgStyle} />
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        //设置侧轴对齐方式
        alignItems: 'center',
        backgroundColor: '#dddddd',
    },
    iconstyle: {
        width:80,
        height:80,
        borderRadius:40,
        borderWidth:5,
        borderColor:'white',
        marginTop:50,
        marginBottom:30
    },
    textInputstyle: {
        height:30,
        backgroundColor:'white',
        marginBottom:1,
        //内容居中
        textAlign:'center'
    },
    loginBtnStyle: {
        height:35,
        backgroundColor:'blue',
        width:width*0.8,
        marginTop:30,
        marginBottom:20,
        //主轴
        justifyContent:'center',
        //侧轴
        alignItems:'center',
        borderRadius:8
    },
    settingStyle: {
        //设置主轴方向
        flexDirection:'row',
        // backgroundColor: 'red',
        //设置主轴的对齐方式
        width:width*0.8,
        justifyContent: 'space-between'
    },
    otherLoginStyle: {
        // backgroundColor: 'red',
        //设定主轴方向
        flexDirection: 'row',
        //设定侧轴对齐方式
        alignItems: 'center',

        //绝对定位
        position: 'absolute',
        bottom:10,
        left:20
    },
    otherImgStyle: {
        width:50,
        height:50,
        borderRadius:25,
        marginLeft:8
    }
});

//输出类
module.exports = loginView;