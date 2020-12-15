import React from 'react'

const Action = (props) => {
    return (
        <div className="action">
            <button className="action__button" disabled={!props.isEmpty} onClick={props.handlePick}>What should i do?</button>
        </div>
    )
}

export default Action