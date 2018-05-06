import React from "react";
import axios from "axios";

class Times extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    componentDidMount = () => {
        this.getTimes();
    }

    getTimes = () => {
        axios.get('https://pt04hn1ypb.execute-api.us-west-2.amazonaws.com/prod')

            .then(response => {
                let data = response.data.times;
                console.log(data);
                debugger;
                const listItems = data.map((waitTime, station) => {
                    let waitTimeColor = waitTime >= 15 ? 'btn btn-danger' : waitTime > 6 ? 'btn btn-warning' : 'btn btn-success'
                    return <tr key={waitTime}><td>{station + 1}</td><td><button type="button" className={waitTimeColor}></button></td></tr>
                }

                )
                // switch(waitTime) {
                //     case (waitTime >= 15):
                //         break;
                //     case (waitTime < 15 && waitTime > 5):
                //         console.log("test");
                //         break;
                //     case (waitTime <= 5 && waitTime > 0):
                //         break;
                //     default:
                // }

                this.setState({
                    time: listItems
                })

                // this.setState({
                //     time1: data[0],
                //     time2: data[1],
                //     time3: data[2],
                //     time4: data[3]
                // })
            })

    }

    render() {

        return (
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Water Station</th>
                            <th>Wait Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.time}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Times;