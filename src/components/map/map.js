import React from "react";
import axios from "axios";
import edcmap from "../../images/edcmap.jpg";


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
    }

    componentWillMount = () => {
        this.getTimes();
        console.log(this)
    }


    getTimes = () => {
        axios.get('https://pt04hn1ypb.execute-api.us-west-2.amazonaws.com/prod')
            .then(response => {
                let data = response.data;
                this.setState({
                    data: data.times,
                    water1: data.times[0] >= 15 ? '#CC444A' : data.times[0] > 6 ? '#F7C244' : '#53A351',
                    water2: data.times[1] >= 15 ? '#CC444A' : data.times[1] > 6 ? '#F7C244' : '#53A351',
                    water3: data.times[2] >= 15 ? '#CC444A' : data.times[2] > 6 ? '#F7C244' : '#53A351',
                    water4: data.times[3] >= 15 ? '#CC444A' : data.times[3] > 6 ? '#F7C244' : '#53A351',

                })
                console.log(this.state)
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