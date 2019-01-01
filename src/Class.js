import React, { Component } from "react"

class Class extends Component { 
    constructor(props) {
        super(props)
        this.state = {name: 'Class'}
    }

    render() {
        return <div>
            <hr/>
            <div>Hi {this.state.name}.</div>
        </div>
    }
}

export default Class
