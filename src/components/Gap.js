import React, {Component} from 'react'
import {
    Text
} from 'react-native'


export default class Gap extends Component{
    render(){
        return ( <Text numberOfLines={ 3 } >{ '\n' }</Text> )
    }
}
