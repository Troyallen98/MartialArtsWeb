import React from 'react'
import TechniqueCard from './TechniqueCard'

export default function Techniques({token, techniques}) {
  
    return (
         techniques.map((technique, index)=> <TechniqueCard key={index} technique={technique} token={token}/>)
        
    )
}
