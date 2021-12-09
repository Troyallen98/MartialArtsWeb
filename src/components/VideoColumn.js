import React from 'react'
import ReactPlayer from 'react-player/youtube'
import {Link} from 'react-router-dom'
import {Row, Col} from 'react-bootstrap';

export default function VideoColumn() {
    return (
        <>
            <tbody  >
                <tr>
                    <td
                        as={Row}
                        className="player-wrapper d-flex justify-content-between align-items-center"
                        >

                        <Col sm={7}>
                        <ReactPlayer
                            url = 'https://www.youtube.com/watch?v=ysz5S6PUM-U'//position.position_id.technique_id.techniques.video_url
                            controls = {true}
                            as = {Link}
                            to = {'/video'}
                            className='react-player'
                            width='100%'
                            height='100%'
                            />
                        </Col>

                        <Col sm={5}>
                        <div className="ms-2">
                            <div className="fw-bold">Title</div>
                            username
                        </div>
                        </Col>
                    </td>
                </tr> 
            </tbody>
        </>
    )
}
