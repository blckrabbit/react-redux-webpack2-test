/**
 * Created by yongyuehuang on 2017/1/15.
 */
import React, { Component } from 'react';

export default class HotTag extends React.Component {

    render() {
        const { hotText, hotClick } = this.props
        return (
            <span className="style_span"
                  onClick={hotClick}
            >
                {hotText}
            </span>
        )
    }
}