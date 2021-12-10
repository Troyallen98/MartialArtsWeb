import React, {useState, useEffect} from 'react'
import Layout from './components/Layout'
import UserProfile from './pages/UserProfile'
import Home from './pages/Home'
import Video from './pages/Video'
import Positions from './pages/Positions'
import {Routes, Route} from 'react-router-dom'
import axios from 'axios'

function App() {
    const [token, setToken] = useState('')
    const [user, setUser] = useState({})
    const [positions, setPositions] = useState([])
    const base_url ='https://Laravel-troywagonera734279.codeanyapp.com/api/v1/'

    const saveToken = (newToken) => {
        window.localStorage.setItem('token', newToken);
        setToken(newToken);
    }
    const removeToken = () => {
        window.localStorage.removeItem('token');
        setToken('');
    }

    useEffect(() => {
        const lsToken = window.localStorage.getItem('token');
        if(lsToken){
            setToken(lsToken);
        }
    }, [])

    useEffect(() => {
       axios.get(base_url+'positions')
       .then(r=>{
           console.log(r)
           setPositions(r.data)
       })
    }, [])


    useEffect(() => {
        if(token.length > 0){
            axios({
                method: 'get',
                url: base_url + 'user',
                
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": "*",
                    "Access-Control-Allow-Headers": "Content-Type",
                    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE",
                    "Access-Control-Allow-Credentials": true,
                    'Authorization' : `Bearer ${token}`
                }
            })
            .then(r => {
                console.log(r.data);
                setUser(r.data);
            })
            .catch(function (error) {
                console.log(error);
            });
        }
    }, [token])


const [techniques, setTechniques] = useState([])

    useEffect(() => {
        axios({
            method: 'get',
            url: base_url + 'view-technique',
            
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
                setTechniques(response.data)
            })
            .catch(function (error) {
                console.log(error);
            });
    }, [])

    


    return (
        
        <Routes>
            <Route 
                path='/' 
                element={<Layout 
                    token={token} 
                    saveToken={saveToken} 
                    removeToken={removeToken}
                    positions={positions}
                />}
            >
                <Route index element={<Home token={token}  techniques={techniques} />} />
                <Route path="home" element={<Home token={token} techniques={techniques} />} />
                 
                <Route path="profile" element={<UserProfile token={token} positions={positions} />} />
                <Route path="position/:position_name" element={<Positions />} />
                <Route path="video/:id" element={<Video  techniques={techniques} /> }/>

                {/* Using path="*"" means "match anything", so this route
                        acts like a catch-all for URLs that we don't have explicit
                        routes for. */}
                {/* <Route path="*" element={<NoMatch />} /> */}
            </Route>
        </Routes>
    
    );
}


// function NoMatch() {
//     return (
//         <div>
//             404
//         </div>
//     )
// }


export default App;
