import React from 'react'
import {Card, Image} from 'react-bootstrap'
import ReactPlayer from 'react-player/youtube'
import {Link} from 'react-router-dom'

export default function TechniqueCard({technique, token}) {

    

    return (

          <Card border='light' className='col-12 col-md-6 col-lg-4 col-xl-3 text-center'>
            <ReactPlayer
                url = {technique.video_url }//position.position_id.technique_id.techniques.video_url
                controls = {true}
                width='100%'
                height='100%'
                />
            <Card.Body>
                <Card.Title>{technique.name }</Card.Title>
                <Card.Text>
                    <Image 
                        src="holder.js/171x180" 
                        roundedCircle 
                        />
                    {technique.user.name }
                </Card.Text>

            </Card.Body>
            <Link to = {`/video/${technique.id}`} class="btn btn-primary stretched-link">watch</Link>
        </Card>  
   
    )
}
