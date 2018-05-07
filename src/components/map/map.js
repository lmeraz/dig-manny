import React from "react";
import axios from "axios";
import edcmap from "../../images/edcmap.jpg";
import $ from 'jquery';


class Map extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            water1: null,
            water2: null,
            water3: null,
            water4: null
        }
    }

    componentDidMount = () => {
        this.getTimes()
        console.log("this:", this)
    }


    getTimes = () => {
        function give_color_to_station(jClass) {
            if ($(jClass).hasClass('btn-danger')) {
                return '#CC444A'
            } else if ($(jClass).hasClass('btn-warning')) {
                return '#F7C244'
            } else {
                return '#53A351'
            }
        }

        this.setState({
            water1: give_color_to_station($('td button:first')[0]),
            water2: give_color_to_station($('td button:first')[1]),
            water3: give_color_to_station($('td button:first')[2]),
            water4: give_color_to_station($('td button:first')[3])
        });
    }
    render() {

        return (
            <div className="holder">
                <img src={edcmap} alt="edcMap" className="edcMap" />
                <div style={{ backgroundColor: this.state.water1 }} className="waterStation" id="waterstation1">1</div>
                <div style={{ backgroundColor: this.state.water2 }} className="waterStation" id="waterstation2">2</div>
                <div style={{ backgroundColor: this.state.water3 }} className="waterStation" id="waterstation3">3</div>
                <div style={{ backgroundColor: this.state.water4 }} className="waterStation" id="waterstation4">4</div>
            </div >

        )
    }
}

export default Map;