// import React from 'react';
// import axios from 'axios';

// class Color extends React.Component{
//     constructor(props){
//         super(props);
//         this.state = {
//         };
//     }

//     componentWillMount = () => {
//         this.getTimes();
//         this.getColor();
//     }

//     getTimes = () => {
//         axios.get('https://pt04hn1ypb.execute-api.us-west-2.amazonaws.com/prod')
//         .then(response =>{
//             let data = response.data.times;
//             this.setState({
//                 time1: data[0],
//                 time2: data[1],
//                 time3: data[2],
//                 time4: data[3]
//             })
//         })
//     }

//     render(){
//         return(
//             <div>
//                  <button type="button" className={this.state.button}></button>
//             </div>
//         )
//     }
// }

// export default Color;