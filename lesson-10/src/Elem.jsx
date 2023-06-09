import React from "react";

const Elem = props => {
    const {
        visitext,
        type,
        name,
        onChange
    } = props;
    return (
        <div>
            <p>{visitext}</p>
            <p><input type={type} name={name} onChange={onChange} /></p>
        </div>
    );
};

export default Elem;