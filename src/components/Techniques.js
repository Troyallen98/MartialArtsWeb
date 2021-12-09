import React, {useState, useEffect} from 'react'
import Technique from './Technique'


import axios from 'axios'
export default function Techniques() {

const baseURL = 'https://laravel-troywagonera734279.codeanyapp.com/';
const [viewTechnique, setViewTechnique] = useState([])

    useEffect(() => {
        axios({
            method: 'get',
            url: baseURL + 'api/v1/view-technique',
            
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
                setViewTechnique(response.data)
            })
            .catch(function (error) {
                console.log(error);
            });
    }, [])

    


       
    return (
         viewTechnique.map((technique)=> <Technique viewTechnique={technique}/>)
    )
}
