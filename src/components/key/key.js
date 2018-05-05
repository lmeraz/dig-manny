import React from 'react';

class Key extends React.Component{
    render(){
        return(
            <div>
                 <table className="table">
                    <thead>
                        <tr>
                            <th>Key</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <button type="button" className="btn btn-success"></button>
                            </td>
                            <td>0-5 minute approx. wait</td>
                        </tr>
                        <tr>
                            <td>
                                <button type="button" className="btn btn-warning"></button>
                            </td>
                            <td>6-14 minute approx. wait</td>
                        </tr>
                        <tr>
                            <td>
                                <button type="button" className="btn btn-danger"></button>
                            </td>
                            <td>15+ minute approx. wait</td>
                        </tr>
                    </tbody>
                </table>
            </div>   
        )
    }
}

export default Key;