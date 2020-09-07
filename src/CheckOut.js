import React, { Component } from 'react';

class CheckOut extends Component {
    constructor(){
        super();
    }
    render(props){
        return(
            <div className="container footer_container">
                <div className="bg-danger" height="70px" width="100%">
                <div>
                    Total Amount:{this.props.MRF}<br/>
                    Quantity:{this.props.value}{this.props.value1}{this.props.value2}{this.props.value3}
                </div>
                </div>
            </div>
        )
    }
}
 
export default CheckOut;