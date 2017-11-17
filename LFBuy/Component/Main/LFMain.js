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
    Platform
} from 'react-native';

var Home = require('../Home/LFHome');
var Shop = require('../Shop/LFShop');
var Mine = require('../Mine/LFMine');
var More = require('../More/LFMore');


/**---------导入外部的组件类--------**/
import TabNavigator from 'react-native-tab-navigator';
import {Navigator} from 'react-native-deprecated-custom-components';

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
                {/*--首页--*/}
                {this.renderTabBarItem('首页', 'icon_tabbar_homepage', 'icon_tabbar_homepage_selected','home', '首页', Home)}
                {/*--商家--*/}
                {this.renderTabBarItem('商家', 'icon_tabbar_merchant_normal', 'icon_tabbar_merchant_selected','shop', '商家', Shop)}
                {/*--我的--*/}
                {this.renderTabBarItem('我的', 'icon_tabbar_mine', 'icon_tabbar_mine_selected','mine', '我的', Mine)}
                {/*--更多--*/}
                {this.renderTabBarItem('更多', 'icon_tabbar_misc', 'icon_tabbar_misc_selected','more', '更多', More)}
            </TabNavigator>
        );
    },

    //每个tabbarIrem
    renderTabBarItem(title,iconName, selectedIconName, selectedTab,componentName,component){
        return(
            <TabNavigator.Item
                title={title}
                renderIcon={() => <Image source={{uri:iconName}} style={styles.iconStyle}/>}
                renderSelectedIcon={() => <Image source={{uri:selectedIconName}} style={styles.iconStyle}/>}
                onPress={()=>{this.setState({selectedTab:selectedTab})}}
                selected={this.state.selectedTab===selectedTab}
                selectedTitleStyle={styles.selectedTitleStyle}
            >
                <Navigator
                    initialRoute={{name:componentName,component:component}}
                    configureScene={()=>{
                        return Navigator.SceneConfigs.PushFromRight;
                    }}
                    renderScene={(route,navigator)=>{
                        let Component = route.component;
                        return <Component {...route.passProps} navigator={navigator}/>;
                    }}
                />
            </TabNavigator.Item>
        );
    }
});


const styles = StyleSheet.create({
    iconStyle:{
        width: Platform.OS === 'ios' ? 30 : 25,
        height:Platform.OS === 'ios' ? 30 : 25
    },
    selectedTitleStyle:{
        color:'orange'
    }
});

// 输出组件类
module.exports = Main;
