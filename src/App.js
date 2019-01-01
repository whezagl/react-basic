import React, { Component } from "react"
import Class from "./Class"
import Count from "./Count"
import Hook from "./Hook"

class App extends Component { 

    render() {
        return <div>
            <Class/>
            <Hook/>
            <Count/>
        </div>
    }
}

export default App
