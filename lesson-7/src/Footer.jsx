import React from 'react';

class Footer extends React.Component {
    render() {
        let contacts = this.props.contacts;
        let address = this.props.address;
        return (
            <>
                <h4>{this.props.siteName}</h4>
                <ul>
                    {contacts.map((item, index) => <li key={index}>{item}</li>)}
                </ul>
                <div>
                    {address.map((item, index) => <span key={index}>{item} </span>)}
                </div>
            </>
        )
    }
}

export default Footer;