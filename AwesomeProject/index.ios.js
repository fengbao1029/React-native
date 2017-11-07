/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    Text,
    StyleSheet,
    Image,
    View
} from 'react-native';

//导入json 数据
var BadgeData = require('./BadgeData.json');

var Dimensions = require('Dimensions');
var {width} = Dimensions.get('window');

//定义一些全局变量
var cols = 3;  //总列数
var boxW = 100; //每个items宽度
var vMargin = (width - cols*boxW)/(cols + 1); //水平间距
var hMargin = 25; //垂直间距

class  BlinkApp extends Component {
    render() {
        return (<View style={styles.container}>
            {/*返回6个包*/}
            {this.renderAllBadge()}
        </View>
        );
    }

    //返回所有的包
    renderAllBadge(){
        //定义数组装所有的子组件
        var allBadge = [];
        //遍历json数据
        for(var i=0; i<BadgeData.data.length; i++){
            //取出单独的数据对象
            var badge = BadgeData.data[i];
            //直接转入数组
            allBadge.push(
                <View key={i} style={styles.outViewStyle}>

                    <Image source={{uri:badge.icon}} style={styles.imagesStyle}/>

                    <Text sytle={styles.mainTitleStyle}>
                        {badge.title}
                    </Text>
                </View>

            );
        }
        //返回数组
        return allBadge;
    }
}

const styles = StyleSheet.create({
    container:{
        // flex:1,
        // backgroundColor:'#F5FCFF',
        //设定主轴方向
        flexDirection:'row',
        //换行显示
        flexWrap:'wrap'
    },
    outViewStyle:{
        backgroundColor:'gray',
        //设置侧轴的对齐方式
        alignItems:'center',
        width:100,
        height:100,
        marginLeft:vMargin,
        marginTop:hMargin

    },
    imagesStyle:{
        width:80,
        height:80
    },
    mainTitleStyle:{

    }
});


AppRegistry.registerComponent('AwesomeProject', () => BlinkApp);
