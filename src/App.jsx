import './App.css'
import {createElement} from "react";

function App() {
    //Declarative
    return createElement(
        'div',
        null,
        createElement('h1', null, 'Vite + React'),
        createElement(
            'div',
            {className: 'card'},
            createElement('h2', null, `The year is ${new Date().getFullYear()}`)
        )
    )
}

export default App
