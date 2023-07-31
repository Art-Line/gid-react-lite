import React from "react";
import Calc from "../Calc";

class Rate extends React.Component {

    constructor() {
        super()
        this.state = {
            date: '',
            currencyRate: {}
        }
    }

    componentDidMount() {
        this.currency = ['USD', 'UAH', 'CAD', 'BSD'];
        this.getRate();
    }

    getRate = () => {
        const APIKEY = '7f1eec5ce9b2154b680c7a2b4a2a9693';
        fetch(`http://data.fixer.io/api/latest?access_key=${APIKEY}&format=1`)
            .then((response) => {
                return response.json();
            })
            .then((data) => {  
                let result = {};
                this.currency.forEach(item => {         // go through our currency array, iterate and create our result object based on it
                    result[item] = data.rates[item];    // we add the values ​​from what we got by api
                })
                this.setState({ 
                    currencyRate: result,               // the received object was written to the state
                    date: data.date                     // set Date
                });  
            });
    };



    render() {
        return (
            <>
                <h3> Курс валют на {this.state.date} Что бы купить 1 EUR</h3>
                <div className="flex-container">
                    {
                        Object.keys(this.state.currencyRate).map(item => {
                            return (
                                <div key={item} className="block flex-item">
                                    <div className="currency-name">{item}</div>
                                    <div className="currency-in">{(this.state.currencyRate[item]).toFixed(2)} {item}</div>
                                </div>
                            )
                        })
                    }
                </div>
                <Calc rate={this.state.currencyRate} />
            </>
        )
    }
}

export default Rate;