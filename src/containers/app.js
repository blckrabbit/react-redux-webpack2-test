/**
 * Created by yongyuehuang on 2017/1/15.
 */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import './app.less'

@connect (state => state)
export default class App extends Component {

    render() {
        console.log("App: ", this.props)
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
}