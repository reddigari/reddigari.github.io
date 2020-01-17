import React from 'react';


function Blurb(props) {
    const style = {textAlign: "center"};
    return (
        <div className="Blurb" style={style}>
            {props.text}
        </div>
    )
}

export default Blurb;
