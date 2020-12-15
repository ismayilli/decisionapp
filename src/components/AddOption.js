import React from 'react'

class AddOption extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            error: undefined
        }
        this.handleAddOption = this.handleAddOption.bind(this)
    }
    handleAddOption(e) {
        e.preventDefault()
        const optionValue = e.target.elements.newOption.value
        const error = this.props.handleAddOption(optionValue)
        e.target.elements.newOption.value = ''

        if(error) {
            this.setState(()=>({ error }))
        }
    }
    render() {
        return (
            <div className="add-option">
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input className="add-option__input" type='text' name='newOption' />
                    <button className="add-option__button">Add</button>
                </form>
            </div>
        )
    }
}

export default AddOption