import React, { Component } from "react"
import Class from "./Class"
import Count from "./Count"
import Count1 from "./Count~1"
import Count2 from "./Count~2"
import Hook from "./Hook"

class App extends Component { 

    render() {
        return <div>
            <Class/>
            <Hook/>
            <Count/>
            <Count1/>
            <Count2/>
        </div>
    }
}

export default App
