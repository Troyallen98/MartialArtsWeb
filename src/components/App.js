import React, {useState, useEffect} from 'react'
import Layout from './Layout.js'
import UserProfile from '../pages/UserProfile'
//import Home from '../pages/Home'
import {Routes, Route} from 'react-router-dom'

function App() {
    const [token, setToken] = useState('')
    
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
        console.log(lsToken)
        if(lsToken){
            setToken(lsToken);
        }
    }, [])
    return (
        <Routes>
            <Route path='/' element={<Layout token={token} saveToken={saveToken} removeToken={removeToken} />}>
                {/* <Route index element={<Home />} /> */}
                <Route path="profile" element={<UserProfile token={token} />} />
                {/* <Route path="dashboard" element={<Dashboard />} /> */}

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
