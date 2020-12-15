import React from 'react'

const Option = (props) => {
    return (
        <div className="option">
            <p>{props.index}. {props.text}</p>
            <button className="option__remove" 
                onClick={(e) => {
                    props.handleRemoveOption(props.text)
                }}
                >Remove</button>
        </div>
    )
}

export default Option