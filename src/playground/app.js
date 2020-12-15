class InDecisionApp extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            options: []
        }
        this.handleRemoveAll = this.handleRemoveAll.bind(this)
        this.handlePick = this.handlePick.bind(this)
        this.handleAddOption = this.handleAddOption.bind(this)
        this.handleRemoveOption = this.handleRemoveOption.bind(this)
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
        alert(option)
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
    render() {
        const title = 'Indecision App'
        const subtitle = 'Put your life and stuff'
        return (
            <div>
                <Header title={title} subtitle={subtitle} />
                <Action isEmpty={this.state.options.length} handlePick={this.handlePick} />
                <Options handleRemoveOption={this.handleRemoveOption} handleRemoveAll={this.handleRemoveAll} options={this.state.options} />
                <AddOption handleAddOption={this.handleAddOption} />
            </div>
        )
    }
}

const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            <h2>{props.subtitle}</h2>
        </div>
    )
}

const Action = (props) => {
    return (
        <div>
            <button disabled={!props.isEmpty} onClick={props.handlePick}>What should i do?</button>
        </div>
    )
}

const Options = (props) => {
    return (
        <div>
        <button onClick={props.handleRemoveAll}>Remove all</button>
        {!props.options.length && <p>Add an aption</p>}
        {
            props.options.map((option)=> (
                <Option 
                 key={option}
                 text={option}
                 handleRemoveOption={props.handleRemoveOption}
                />)
             )
        }
        </div>
    )
}

const Option = (props) => {
    return (
        <div>
            Option: {props.text}
            <button 
                onClick={(e) => {
                    props.handleRemoveOption(props.text)
                }}
                >remove</button>
        </div>
    )
}

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
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input type='text' name='newOption' />
                    <button>Add</button>
                </form>
            </div>
        )
    }
}

ReactDOM.render(<InDecisionApp />,document.getElementById('app'))