import React from "react";

function Spot({ company, price }) {
    return (
        <li>
            <header />
            <strong>{company}</strong>
            <span>{price}</span>
        </li>
    )
}

export default Spot;