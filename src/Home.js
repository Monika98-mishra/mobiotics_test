import React, { Component } from 'react';
import axios from 'axios';
import CheckOut from './CheckOut';
class Home extends Component {
    constructor() {
        super();
        this.state = {
            allUser: [], //variable declaration under state
            allUser1: [],
            allUser2:[],
            allUser3:[],
            allUser4:[],
            initialNumber: 0,
            initialNumber1: 0,
            initialNumber2: 0,
            initialNumber3: 0,
            initialNumber4: 0,
            MRF: 0,
            cart:0,
        }
        this.readUser();//calling in constructer because it should load while constructer calling
        this.readUser1();
        this.readUser2();
        this.readUser3();
        this.readUser4();
    }
    readUser = () => {
        axios.get("user1.json").then(responseData => {
            this.setState({
                allUser: responseData.data //variable update under state
            })
        })
    }
    readUser1 = () => {
        axios.get("user2.json").then(responseData => {
            this.setState({
                allUser1: responseData.data //variable update under state
            })
        })
    }
    readUser2 = () => {
        axios.get("user3.json").then(responseData => {
            this.setState({
                allUser2: responseData.data //variable update under state
            })
        })
    }
    readUser3 = () => {
        axios.get("user4.json").then(responseData => {
            this.setState({
                allUser3: responseData.data //variable update under state
            })
        })
    }
    readUser4 = () => {
        axios.get("user5.json").then(responseData => {
            this.setState({
                allUser6: responseData.data //variable update under state
            })
        })
    }
    componentDidMount() {
        this.readUser();  // to call after render function
        this.readUser1();
        this.readUser2();
        this.readUser3();
        this.readUser4();
    }

    decrement = () => {
       
        this.setState({
                 
            initialNumber: this.state.initialNumber - 1
        })
    }
    increment = () => {
        this.setState({
            initialNumber: this.state.initialNumber + 1
        })
    }
    decrement1 = () => {
        this.setState({
            initialNumber1: this.state.initialNumber1 - 1
        })
    }
    increment1 = () => {
        this.setState({
            initialNumber1: this.state.initialNumber1 + 1
        })
    }
    decrement2 = () => {
        this.setState({
            initialNumber2: this.state.initialNumber2 - 1
        })
    }
    increment2 = () => {
        this.setState({
            initialNumber2: this.state.initialNumber2 + 1
        })
    }
    decrement3 = () => {
        this.setState({
            initialNumber3: this.state.initialNumber3 - 1
        })
    }
    increment3 = () => {
        this.setState({
            initialNumber3: this.state.initialNumber3 + 1
        })
    }
    decrement4 = () => {
        this.setState({
            initialNumber4: this.state.initialNumber4 - 1
        })
    }
    increment4 = () => {
        this.setState({
            initialNumber4: this.state.initialNumber4 + 1
        })
    }
    render() {
        return (
            <div className="conatiner">
                <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-md-8">
                        {/* <h3 className="text-center">Paid Amount is : {this.state.amountlist.length} </h3> */}
                        <div className="card border border-primary">

                            <div className="card-body middle">
                                {
                                    this.state.allUser.map((row, index) => {
                                        return <div key={index}>

                                            <img src={`${row.ImageURL}`} height="200" width="200" />
                                            <p className="OfferText">{row.OfferText}</p>
                                            <p className="OfferText1 bg-warning">{row.BrandName}</p>
                                            <p className="OfferText2  bg-warning">{row.ProductName}</p>
                                            <p className="OfferText3  bg-warning">{row.Quantity}</p>
                                            <p className="OfferText4  bg-warning">{row.Price}</p>
                                            <p className="OfferText5 bg-warning">{row.MRF}</p>
                                            <div className="btn-group">
                                            <button className="offerText6 bg-primary">Add to cart</button>
                                                <button className="offerText7 bg-primary" onClick={this.decrement} min="0">-</button>
                                                <h4>{this.state.initialNumber}</h4>
                                                <button className="offerText8 bg-primary" onClick={this.increment}>+</button>
                                            </div>

                                        </div>


                                    })
                                }

                            </div>

                        </div>
                    </div>

                    <div className="col-md-2"></div>
                </div>
                <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-md-8">
                        {/* <h3 className="text-center">Paid Amount is : {this.state.amountlist.length} </h3> */}
                        <div className="card border border-primary">

                            <div className="card-body middle">
                                {
                                    this.state.allUser1.map((row, index) => {
                                        return <div key={index}>

                                            <img src={`${row.ImageURL}`} height="200" width="200" />
                                            <p className="OfferText">{row.OfferText}</p>
                                            <p className="OfferText1 bg-warning">{row.BrandName}</p>
                                            <p className="OfferText2  bg-warning">{row.ProductName}</p>
                                            <p className="OfferText3  bg-warning">{row.Quantity}</p>
                                            <p className="OfferText4  bg-warning">{row.Price}</p>
                                            <p className="OfferText5 bg-warning">{row.MRF}</p>
                                            <div className="btn-group">
                                    <button className="offerText6 bg-primary">Add to cart</button>
                                                <button className="offerText7 bg-primary" onClick={this.decrement1}>-</button>
                                                <h4>{this.state.initialNumber1}</h4>
                                                <button className="offerText8 bg-primary" onClick={this.increment1}>+</button>
                                            </div>

                                        </div>


                                    })
                                }

                            </div>

                        </div>
                    </div>

                    <div className="col-md-2"></div>
                </div>
                <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-md-8">
                        {/* <h3 className="text-center">Paid Amount is : {this.state.amountlist.length} </h3> */}
                        <div className="card border border-primary">

                            <div className="card-body middle">
                                {
                                    this.state.allUser2.map((row, index) => {
                                        return <div key={index}>

                                            <img src={`${row.ImageURL}`} height="200" width="200" />
                                            <p className="OfferText">{row.OfferText}</p>
                                            <p className="OfferText1 bg-warning">{row.BrandName}</p>
                                            <p className="OfferText2  bg-warning">{row.ProductName}</p>
                                            <p className="OfferText3  bg-warning">{row.Quantity}</p>
                                            <p className="OfferText4  bg-warning">{row.Price}</p>
                                            <p className="OfferText5 bg-warning">{row.MRF}</p>
                                            <div className="btn-group">
                                                <button className="offerText6 bg-primary">Add to cart</button>
                                                <button className="offerText7 bg-primary" onClick={this.decrement2}>-</button>
                                                <h4>{this.state.initialNumber2}</h4>
                                                <button className="offerText8 bg-primary" onClick={this.increment2}>+</button>
                                            </div>

                                        </div>


                                    })
                                }

                            </div>

                        </div>
                    </div>

                    <div className="col-md-2"></div>
                </div>
                <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-md-8">
                        {/* <h3 className="text-center">Paid Amount is : {this.state.amountlist.length} </h3> */}
                        <div className="card border border-primary">

                            <div className="card-body middle">
                                {
                                    this.state.allUser3.map((row, index) => {
                                        return <div key={index}>

                                            <img src={`${row.ImageURL}`} height="200" width="200" />
                                            <p className="OfferText">{row.OfferText}</p>
                                            <p className="OfferText1 bg-warning">{row.BrandName}</p>
                                            <p className="OfferText2  bg-warning">{row.ProductName}</p>
                                            <p className="OfferText3  bg-warning">{row.Quantity}</p>
                                            <p className="OfferText4  bg-warning">{row.Price}</p>
                                            <p className="OfferText5 bg-warning">{row.MRF}</p>
                                            <div className="btn-group">
                                                <button className="offerText6 bg-primary">Add to cart</button>
                                                <button className="offerText7 bg-primary" onClick={this.decrement3}>-</button>
                                                <h4>{this.state.initialNumber3}</h4>
                                                <button className="offerText8 bg-primary" onClick={this.increment3}>+</button>
                                            </div>

                                        </div>


                                    })
                                }

                            </div>

                        </div>
                    </div>

                    <div className="col-md-2"></div>
                </div>
                <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-md-8">
                        {/* <h3 className="text-center">Paid Amount is : {this.state.amountlist.length} </h3> */}
                        <div className="card border border-primary">

                            <div className="card-body middle">
                                {
                                    this.state.allUser4.map((row, index) => {
                                        return <div key={index}>

                                            <img src={`${row.ImageURL}`} height="200" width="200" />
                                            <p className="OfferText">{row.OfferText}</p>
                                            <p className="OfferText1 bg-warning">{row.BrandName}</p>
                                            <p className="OfferText2  bg-warning">{row.ProductName}</p>
                                            <p className="OfferText3  bg-warning">{row.Quantity}</p>
                                            <p className="OfferText4  bg-warning">{row.Price}</p>
                                            <p className="OfferText5 bg-warning">{row.MRF}</p>
                                            <div className="btn-group">
                                                <button className="offerText6 bg-primary">Add to cart</button>
                                                <button className="offerText7 bg-primary" onClick={this.decrement4}>-</button>
                                                <h4>{this.state.initialNumber4}</h4>
                                                <button className="offerText8 bg-primary" onClick={this.increment4}>+</button>
                                            </div>

                                        </div>


                                    })
                                }

                            </div>

                        </div>
                    </div>

                    <div className="col-md-2"></div>
                </div>
                <CheckOut value={this.state.initialNumber} value1={this.state.initialNumber1}value2={this.state.initialNumber2}value3={this.state.initialNumber3}value4={this.state.initialNumber4} MRF={this.state.MRF} />
            </div>

        )
    }
}
export default Home;