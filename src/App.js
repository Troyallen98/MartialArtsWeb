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
    const [positions, setPositions] = useState([])

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
        // console.log(lsToken)
        if(lsToken){
            setToken(lsToken);
        }
    }, [])
    useEffect(() => {
       axios.get('https://Laravel-troywagonera734279.codeanyapp.com/api/v1/positions')
       .then(r=>{
           console.log(r)
           setPositions(r.data)
       })
    }, [])

    return (
        
        <Routes>
            <Route path='/' element={<Layout 
                            token={token} 
                            saveToken={saveToken} 
                            removeToken={removeToken}
                            positions={positions}
                             />}>
                <Route index element={<Home />} />
                <Route path="home" element={<Home/>} />
                 
                <Route path="profile" element={<UserProfile token={token} positions={positions} />} />
                <Route path="position/:position_name" element={<Positions />} />
                <Route path="video" element={<Video/> }/>

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
