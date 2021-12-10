import React from 'react'
import ReactPlayer from 'react-player/youtube'
import {useNavigate } from 'react-router-dom'
import { Row, Col } from 'react-bootstrap'



export default function VideoRow({ technique, token }) {
  
  
  const navigate = useNavigate()
  const next = () => {
    navigate(`/video/${technique.id}`)
  }

  return (
      
    <tr 
    onClick={next}
    >
      <td
        as={Row}
        className="player-wrapper d-flex justify-content-between align-items-center"
        >

        <Col sm={7} >
          <ReactPlayer
            
            url={technique.video_url}
            controls={true}
            className='react-player'
            width='100%'
            height='100%'
          />
        </Col>

        <Col sm={5}>
          <div className="ms-2">
            <div className="fw-bold">{technique.name}</div>
            {technique.user.name}
          </div>
        </Col>
      </td>
      
    </tr>
   

  )
}
