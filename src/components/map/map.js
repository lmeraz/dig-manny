import React from "react";
import axios from "axios";

class Map extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            data: null,
            water1: null,
            water2: null,
            water3: null,
            water4: null
        }
        // const { data } = this.state
        //const condition = data[0] > 15 ? 'red' : data[0] > 6 ? 'orange' : 'green';

    }

    componentWillMount = () => {
        this.getTimes();
    }


    getTimes = () => {
        axios.get('https://pt04hn1ypb.execute-api.us-west-2.amazonaws.com/prod')
            .then(response => {
                let data = response.data;
                this.setState({
                    data: data.times,
                    water1: data.times[0] > 15 ? 'red' : data.times[0] > 6 ? 'orange' : 'green',
                    water2: data.times[1] > 15 ? 'red' : data.times[1] > 6 ? 'orange' : 'green',
                    water3: data.times[2] > 15 ? 'red' : data.times[2] > 6 ? 'orange' : 'green',
                    water4: data.times[3] > 15 ? 'red' : data.times[3] > 6 ? 'orange' : 'green',

                })
                console.log('state is', this.state)
            });

    }
    render() {

        return (
            <div>
                <img src="https://edmidentity.com/wp-content/uploads/2017/06/EDC-Las-Vegas-2017-Festival-Map.jpg" alt="edcMap" className="edcMap" />
                <div style={{ color: this.state.water1 }}>1</div>
                <div style={{ color: this.state.water2 }}>2</div>
                <div style={{ color: this.state.water3 }}>3</div>
                <div style={{ color: this.state.water4 }}>4</div>
            </div >
        )
    }
}

export default Map;