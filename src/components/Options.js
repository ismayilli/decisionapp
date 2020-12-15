import React from 'react'
import Option from './Option'

const Options = (props) => {
    return (
        <div className="options">
        <div className="options--tab">
            <p className="options--tab__title">Your Options</p>
            <button className="options--tab__remove-all" onClick={props.handleRemoveAll}>Remove all</button>
        </div>
        {!props.options.length && <p className="options__no-option">Add an aption</p>}
        {
            props.options.map((option, indexOf)=> (
                <Option 
                 key={option}
                 index={indexOf+1}
                 text={option}
                 handleRemoveOption={props.handleRemoveOption}
                />)
             )
        }
        </div>
    )
}

export default Options