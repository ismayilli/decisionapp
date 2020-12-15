import React from 'react'
import AddOption from './AddOption'
import Header from './Header'
import Action from './Action'
import Options from './Options'
import OptionModal from './OptionModal'

class InDecisionApp extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            options: [],
            selected: undefined
        }
        this.handleRemoveAll = this.handleRemoveAll.bind(this)
        this.handlePick = this.handlePick.bind(this)
        this.handleAddOption = this.handleAddOption.bind(this)
        this.handleRemoveOption = this.handleRemoveOption.bind(this)
        this.handleCloseModal = this.handleCloseModal.bind(this)
    }
    componentDidMount() {
        try {
            const options = localStorage.getItem('options')
            const json = JSON.parse(options)

            if(options) {
                this.setState(() => ({ options : json }))
            }
        } catch(e) {

        } 
    }
    componentDidUpdate(prevProps,prevState) {
        const options = this.state.options
        const json = JSON.stringify(options)

        localStorage.setItem('options',json)
    }
    handleRemoveAll() {
        this.setState(() => ({ options: [] }))
    }
    handleRemoveOption(optionKey) {
        this.setState((prev) => {
            return {
                options: prev.options.filter((option) => {
                    return optionKey !== option
                })
            }
        })
    }
    handlePick() {
        const randomNum = Math.floor(Math.random() * this.state.options.length)
        const option = this.state.options[randomNum]
        this.setState(() => ({
            selected: option
        }))
    }
    handleAddOption(optionValue) {
        if(!optionValue.trim()) {
            return "Enter valid option"
        }
        else if(this.state.options.indexOf(optionValue)>-1) {
            return "There is already that option"
        }

        this.setState((prev)=>({ options: prev.options.concat([optionValue]) }))
    }
    handleCloseModal() {
        this.setState(()=>({
            selected: undefined
        }))
    }
    render() {
        const title = 'Decision App'
        const subtitle = 'Decide what to do next randomly'
        return (
            <div>
                <Header title={title} subtitle={subtitle} />
                <div className="container">
                    <Action isEmpty={this.state.options.length} handlePick={this.handlePick} />
                    <Options handleRemoveOption={this.handleRemoveOption} handleRemoveAll={this.handleRemoveAll} options={this.state.options} />
                    <AddOption handleAddOption={this.handleAddOption} />
                    <OptionModal option={this.state.selected} handleCloseModal={this.handleCloseModal} />
                </div>
            </div>
        )
    }
}

export default InDecisionApp