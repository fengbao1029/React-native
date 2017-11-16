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
    Image
} from 'react-native';

var Home = require('../Home/LFHome');
var Shop = require('../Shop/LFShop');
var Mine = require('../Mine/LFMine');
var More = require('../More/LFMore');

/**---------导入外部的组件类--------**/
import TabNavigator from 'react-native-tab-navigator';

var Main = React.createClass({

    //初始化函数(变量可改变，充当状态机的角色)
    getInitialState(){
        return{
            selectedTab:'home'  //默认是第一个
        }
    },


    render() {
        return (
            <TabNavigator>
                {/*---首页---*/}
                <TabNavigator.Item
                    title="首页"
                    renderIcon={() => <Image source={{uri:'icon_tabbar_homepage'}} sytle={styles.iconStyle}/>}
                    renderSelectedIcon={() => <Image source={{uri:'icon_tabbar_homepage_selected'}} sytle={styles.iconStyle}/>}
                    onPress={()=>{this.setState({selectedTab:'home'})}}
                    selected={this.state.selectedTab==='home'}
                >
                    <Home />
                </TabNavigator.Item>

                {/*---商家---*/}
                <TabNavigator.Item
                    title="商家"
                    renderIcon={() => <Image source={{uri:'icon_tabbar_merchant_normal'}} sytle={styles.iconStyle}/>}
                    renderSelectedIcon={() => <Image source={{uri:'icon_tabbar_merchant_selected'}} sytle={styles.iconStyle}/>}
                    onPress={()=>{this.setState({selectedTab:'shop'})}}
                    selected={this.state.selectedTab==='shop'}
                >
                    <Shop />
                </TabNavigator.Item>

                {/*---我的---*/}
                <TabNavigator.Item
                    title="我的"
                    renderIcon={() => <Image source={{uri:'icon_tabbar_mine'}} sytle={styles.iconStyle}/>}
                    renderSelectedIcon={() => <Image source={{uri:'icon_tabbar_mine_selected'}} sytle={styles.iconStyle}/>}
                    onPress={()=>{this.setState({selectedTab:'mine'})}}
                    selected={this.state.selectedTab==='mine'}
                >
                    <Mine />
                </TabNavigator.Item>

                {/*---更多---*/}
                <TabNavigator.Item
                    title="更多"
                    renderIcon={() => <Image source={{uri:'icon_tabbar_misc'}} sytle={styles.iconStyle}/>}
                    renderSelectedIcon={() => <Image source={{uri:'icon_tabbar_misc_selected'}} sytle={styles.iconStyle}/>}
                    onPress={()=>{this.setState({selectedTab:'more'})}}
                    selected={this.state.selectedTab==='more'}
                >
                    <More />
                </TabNavigator.Item>
            </TabNavigator>

        );
    }
});


const styles = StyleSheet.create({
    iconStyle:{
        width:33,
        height:33
    }
});

// 输出组件类
module.exports = Main;
