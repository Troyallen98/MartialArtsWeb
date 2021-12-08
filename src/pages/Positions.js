import React from 'react'
import {useParams} from 'react-router-dom'

export default function Positions() {
    const {position_name} = useParams()
    return (
        <div>
            welcome to the position page for this position: {position_name}
        </div>
    )
}
