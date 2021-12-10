import React from 'react'
import {useParams} from 'react-router-dom'
//import axios from 'axios'
export default function Positions() {
    const {position_name} = useParams()

// const baseURL = 'https://laravel-troywagonera734279.codeanyapp.com/';
// const [viewPositionTechnique, setViewPositionTechnique] = useState([])

//     useEffect(() => {
//         axios({
//             method: 'get',
//             url: baseURL + 'api/v1/view-technique', // Do I have a route to do this? do i use position or technique route?

//                                                     //This may need to be on. my technique component.
            
//             headers: {
//             "Accept": "application/json",
//             "Content-Type": "application/json",
//             "Access-Control-Allow-Origin": "*",
//             "Access-Control-Allow-Headers": "Content-Type",
//             "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE",
//             "Access-Control-Allow-Credentials": true,
//             //'Authorization' : `Bearer ${token}`
//         },

//         })
//             .then(function (response) {
//                 console.log(response);
//                 setViewPositionTechnique(response.data)
//             })
//             .catch(function (error) {
//                 console.log(error);
//             });
//     }, [])


    return (
        <div>
            {/*filtered videos from database. */}
            welcome to the position page for this position: {position_name}
        </div>
    )
}
