import React, { Component } from 'react';


class Map extends Component {
    constructor(props) {
        super(props);

        this.state = {
            waterStation1: {
                color: null,
                time: null
            },
            waterStation2: {
                color: null,
                time: null
            },
            waterStation3: {
                color: null,
                time: null
            },
            waterStation4: {
                color: 'apples',
                time: null
            },
        }
    }
 
    getWaitTime() {
     
    }

    render() {

        return (
            <h1>this is map</h1>
        )
    }
}

export default Map;