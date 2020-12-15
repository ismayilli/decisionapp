const rootFile = document.getElementById('app');

const tasks = {
    options: []
};

const addTask = (e) => {
    e.preventDefault()
    const value = e.target.elements.option.value
    tasks.options.push(value)
    e.target.elements.option.value = ''
    renderAll()
}

const renderAll = () => {
    const template = (
        <div>
            <h1>Indecision app</h1>
            <p>Number: {tasks.options.length}</p>
            <h3>Add Task</h3>
            <form onSubmit={addTask}>
                <input name="option" type="text" />
                <button>Add</button>
            </form>
            <ul>
            {
                tasks.options.map((option)=> {
                    return <li key={option}>Task: {option}</li>
                })
            }
            </ul>
        </div>
    );
    
    ReactDOM.render(template, rootFile);
}

renderAll()