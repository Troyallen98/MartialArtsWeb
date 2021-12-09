import React, {useState, useEffect} from 'react'
import {Card, Image} from 'react-bootstrap'
import ReactPlayer from 'react-player/youtube'
import axios from 'axios'
export default function Technique({viewTechnique}) {

    const baseURL = 'https://laravel-troywagonera734279.codeanyapp.com/';
    const [comment, setComment] = useState({})

    useEffect(() => {
        axios({
            method: 'get',
            url: baseURL + 'api/v1/view-positions-technique-comment',
            
            headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "Content-Type",
            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE",
            "Access-Control-Allow-Credentials": true,
            //'Authorization' : `Bearer ${token}`
        },

        })
            .then(function (response) {
                console.log(response);
                setComment(response.data)
            })
            .catch(function (error) {
                console.log(error);
            });
    }, [])

    return (
        <>
          <Card border='light' className='col-12 col-md-6 col-lg-4 col-xl-3 text-center'>
            <ReactPlayer
                url = {viewTechnique?.video_url || ''}//position.position_id.technique_id.techniques.video_url
                controls = {true}
                width='100%'
                height='100%'
                />
            <Card.Body>
                <Card.Title>position.position_id.technique_id.techniques.name</Card.Title>
                <Card.Text>
                    <Image 
                        src="holder.js/171x180" 
                        roundedCircle 
                        />
                    'position.position_id.technique_id.techniques.user_id.username'
                </Card.Text>
                <Card.Text>
                    {comment.content || ''}
                </Card.Text>
            </Card.Body>
        </Card>  
        </>
    )
}
