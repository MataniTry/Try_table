import React from "react";


const Elem = (props) => {
    return (
        <tr>
            <td>{props.id}</td>
            <td>{props.name}</td>
            <td>{props.surname}</td>
            <td>{props.subject}</td>
            <td>{props.presence}</td>
        </tr>
    )
}

export default Elem;