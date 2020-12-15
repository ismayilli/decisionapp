class Counter extends React.Component {
    constructor(props) {
        super(props)
        this.handlePlus = this.handlePlus.bind(this)
        this.handleMinus = this.handleMinus.bind(this)
        this.handleReset = this.handleReset.bind(this)
        this.state = {
            count : props.count
        }
    }
    handlePlus() {
        this.setState((prev)=>{
            return {
                count: ++prev.count
            }
        })
    }
    handleMinus() {
        this.setState((prev)=>{
            return {
                count: --prev.count
            }
        })
    }
    handleReset() {
        this.setState((prev)=>{
            return {
                count: 0
            }
        })
    }
    render() {
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.handlePlus}>+1</button>
                <button onClick={this.handleMinus}>-1</button>
                <button onClick={this.handleReset}>Reset</button>
            </div>
        )
    }
}

Counter.defaultProps = {
    count: 10,
}

ReactDOM.render(<Counter />, document.getElementById('app'))