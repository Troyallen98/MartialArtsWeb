import React from 'react'
import PositionTechniqueCard from './PositionTechniqueCard'
import { useParams } from 'react-router-dom'

export default function PositionTechniques({ token, techniques }) {

    const { name } = useParams()
    const parsedName = name.split('-').join(' ')

    return (
        techniques
        .filter(t => {
                console.log({ t, parsedName })
                if (t.position_technique.position.name === parsedName) {
                    return true
                }
                return false
            })
            .map((technique, index) => <PositionTechniqueCard key={index} technique={technique} token={token}/>)

    )
}
