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
  View
} from 'react-native';

/**-------------------第一个示例程序--------------------*/

export  class BViewDemo extends Component {
  render() {
    return (
      <View style={styles.container}>
          {/*<Text>其实我是存在的</Text>*/}
          <View style={styles.innerViewStyle}>
              <Text>我是里面的view</Text>
          </View>
          <View style={styles.innerViewStyle2}>
              <Text>我是下面的view</Text>
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flex:1,
      backgroundColor: 'red',
      // width:300,
      height:100,
      //改变主轴方向----> 默认是竖向
      flexDirection:'row',
      //设置主轴的对齐方式
      justifyContent:'center',
      //设定侧轴的对齐方式
      alignItems: 'center'
  },
  innerViewStyle:{
      //上边距
      marginTop:25,
      //设置主轴对齐方式
      justifyContent: 'flex-end',
      backgroundColor:  'green',
      width:100
  },
    innerViewStyle2:{
        backgroundColor:  'yellow',
        width:100
    },
  container2: {
      backgroundColor: 'purple',
      marginTop:25,
      flexDirection:'row',
      justifyContent:'space-around',
      alignItems:'center'

  }
});


/**-------------------第二个示例程序--------------------*/


export  class BViewDemo2 extends Component {
    render() {
        return (
            <View style={styles.container2}>
                <Text style={{backgroundColor:'red',height:30}}>第一个</Text>
                <Text style={{backgroundColor:'green',height:40}}>第二个</Text>
                <Text style={{backgroundColor:'blue',height:50}}>第三个</Text>
                <Text style={{backgroundColor:'yellow',height:60}}>第四个</Text>
            </View>
        );
    }
}

/**-------------------第三个示例程序--------------------*/

export  class BViewDemo3 extends Component {
    render() {
        return (
            <View style={styles1.container}>
                <Text style={{backgroundColor:'red',width:80}}>第一个</Text>
                <Text style={{backgroundColor:'green',width:90}}>第二个</Text>
                <Text style={{backgroundColor:'blue',width:100}}>第三个</Text>
                <Text style={{backgroundColor:'yellow',width:110}}>第四个</Text>
            </View>
        );
    }
}

const  styles1 = StyleSheet.create({
    container:{
        backgroundColor: 'purple',
        marginTop:25,
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'center',
        //显示不下，换一行
        flexWrap:'wrap'
    }
});

/**-------------------第四个示例程序--------------------*/

export  class BViewDemo4 extends Component {
    render() {
        return (
            <View style={styles2.container}>
                <Text style={{backgroundColor:'red',flex:1,height:60,alignSelf:'flex-start'}}>第一个</Text>
                <Text style={{backgroundColor:'green',flex:1,height:70,alignSelf:'flex-end'}}>第二个</Text>
                <Text style={{backgroundColor:'blue',flex:2,height:80}}>第三个</Text>
                <Text style={{backgroundColor:'yellow',flex:3,height:90}}>第四个</Text>
            </View>
        );
    }
}

const  styles2 = StyleSheet.create({

    container:{
        backgroundColor: 'purple',
        marginTop:25,
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'center',
    }
});

/**-------------------第五个示例程序--------------------*/
//引入类库(Dimensions，获取尺寸的相关类库)
var  Dimensions = require('Dimensions');

export  class BViewDemo5 extends Component {
    render() {
        return (
            <View style={styles5.outViewSytle}>
                <Text>当前屏幕的宽度:{Dimensions.get('window').width}</Text>
                <Text>当前屏幕的高度:{Dimensions.get('window').height}</Text>
                <Text>当前屏幕的分辨率:{Dimensions.get('window').scale}</Text>
            </View>
        );
    }
}

const styles5 = StyleSheet.create({
    outViewSytle:{
        flex:1,
        //主轴方向居中
        justifyContent:'center',
        //侧轴方向居中
        alignItems:'center',
        //背景
        backgroundColor:'red'
    }
});

AppRegistry.registerComponent('BViewDemo', () => BViewDemo5);
