import React from "react";
//import axios from "axios";

class Times extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            station: "",
            time: null
        };
    }

    componentWillMount = () => {
        this.getTimes();
    }

    getTimes = () => {
        axios.get('https://pt04hn1ypb.execute-api.us-west-2.amazonaws.com/prod')
            .then(response => {
                let data = response.data;
                this.setState({
                    time: data
                })
                console.log(data);
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
                        <tr>
                            <td>1</td>
                            <td>Green</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Red</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Red</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Times;