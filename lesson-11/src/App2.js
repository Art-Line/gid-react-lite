import React from 'react';

class App2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            y1: '',
        }
    }

    static getDerivedStateFromProps(props, state) {
        return { y1: props.z1 }
    }

    render() {
        // const z1 = this.props.z1;
        return (
            <p>{this.state.y1}</p>
        )
    }
}

export default App2;
