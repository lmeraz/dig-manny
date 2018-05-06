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
        .then(response =>{
            let data = response.data.times;
            console.log(data);

            const listItems = data.map((waitTime, station)=>{
                if(waitTime >= 15){
                    this.setState({waitColor: "btn btn-block btn-danger"})
                }
                else if(waitTime > 5 && waitTime < 15){
                    this.setState({waitColor: "btn btn-block btn-warning"})
                }
                else{
                    this.setState({waitColor: "btn btn-block btn-success"})
                }
                return <tr key= {waitTime}><td>{station+1}</td><td><button type="button" className= {this.state.waitColor}/>
                </td></tr>
            }
        )
        
        this.setState({
                time: listItems
            })
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