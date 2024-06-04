import React, { Component } from 'react';

export default class Test extends Component {
    render() {
        console.log('this.props: ', this.props)
        return (
            <div>Test</div>
        )
    }
}