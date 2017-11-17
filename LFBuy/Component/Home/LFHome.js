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
    TouchableOpacity
} from 'react-native';

/**----导入外部的组件类---**/
var HomeDetail = require('./LFHomeDetail');


var Home = React.createClass({
    render(){
        return(
            <View style={styles.container}>
                {/*首页的导航条*/}
                {/*{this.renderNavBar()}*/}


                <TouchableOpacity onPress={()=>{this.pushToDetail()}}>
                    <Text style={styles.welcome}>
                        首页
                    </Text>
                </TouchableOpacity>
            </View>
        );
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
    }
});

// 输出组件类
module.exports = Home;
