import React, { useState } from "react"

function Hook() {
    const [name] = useState('Hook')

    return <div>
        <hr/>
        <div>Hi {name}.</div>
    </div>
}

export default Hook
