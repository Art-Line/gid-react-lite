import React from "react";

class Calc extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            result: 0
        }
    }

    // static getDerivedStateFromProps(props, state) {
    //     return {
    //         rate: props.rate,
    //     }
    // }

    calcRate = (e) => {
        e.preventDefault();
        let countCurrent = e.target.number.value;
        let typeCurrent = e.target.select.value;
        this.setState({
            result: (countCurrent / this.props.rate[typeCurrent]).toFixed(2),
        });
    }

    render() {
        return (
            <>
                <h3>Калькулятор обмена</h3>
                <div className="block">
                    <div>Я хочу</div>
                    <div>
                        <form onSubmit={this.calcRate}>
                            <input name="number" type="number" defaultValue="150" />
                            <select name="select" id="">
                                {
                                    Object.keys(this.props.rate).map(item => {
                                        return (
                                            <option key={item} value={item}>{item}</option>
                                        )
                                    })
                                }
                            </select>
                            <button type="submit">calc</button>
                        </form>
                    </div>
                    <div>
                        <h4>Результат</h4>
                        <ul className="calc-res">
                            <li>{this.state.result} EUR</li>
                        </ul>
                    </div>
                </div>
            </>
        )
    }
}

export default Calc;