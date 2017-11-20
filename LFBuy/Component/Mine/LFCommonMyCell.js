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
    TouchableOpacity,
    Platform
} from 'react-native';


var MyCell = React.createClass({

    getDefaultProps(){
      return{
          leftIconName:'',
          leftTitle:'',
          rightIconName:'',
          rightTitle:'',
      }
    },

    render() {
        return (
            <TouchableOpacity activeOpacity={0.5}>
                <View style={styles.container}>
                    {/*--左边--*/}
                    <View style={styles.leftViewStyle}>
                        <Image source={{uri:this.props.leftIconName}} style={styles.leftImgStyle}/>
                        <Text style={styles.leftTitleStyle}>{this.props.leftTitle}</Text>
                    </View>
                    {/*--右边--*/}

                    <View style={styles.rightViewStyle}>
                        {this.rightSubView()}
                    </View>
                </View>
            </TouchableOpacity>
            );
    },

    //右边的内容
    rightSubView(){
        return(
            <View style={{flexDirection:'row',alignItems:'center'}}>
                {this.renderRightContent()}
                {/*箭头*/}
                <Image  source={{uri:'icon_cell_rightArrow'}} style={{width:8,height:13,marginRight:8,marginLeft:5}}/>
            </View>
        )
    },

    //右边具体返回的值
    renderRightContent(){
        if (this.props.rightIconName.length ===0){//不返回图片
            return(
                <Text style={{color:'gray'}}>{this.props.rightTitle}</Text>
            )
        }else{
            return(
                <Image source={{uri:this.props.rightIconName}} style={{width:24,height:13}}/>
            )
        }
    }

});


const styles = StyleSheet.create({
    container: {
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        backgroundColor:'white',
        height:Platform.OS=== 'ios'? 40 : 36,

        //下边框
        borderBottomWidth:0.5,
        borderBottomColor:'#e8e8e8'
    },
    leftViewStyle:{
        flexDirection:'row',
        alignItems:'center',
        marginLeft:8,
    },
    rightViewStyle:{

    },
    leftImgStyle:{//左边的图片
        width:24,
        height:24,
        marginRight:6,
        borderRadius:12,

    },
    leftTitleStyle:{
        flexDirection:'row',
        fontSize:16
    }
});

// 输出组件类
module.exports = MyCell;
