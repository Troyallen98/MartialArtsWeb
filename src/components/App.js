import React, {useState, useEffect} from 'react'
import Layout from './Layout.js'
import {Routes, Route} from 'react-router-dom'

function App() {
    const [token, setToken] = useState('')

    const saveToken = (newToken) =>{
        window.localStorage.setItem('token', newToken);
        setToken(newToken);
    }

    useEffect(() => {
        const lsToken = window.localStorage.getItem('token');
        if(lsToken){
            setToken(lsToken);
        }
    }, [])
    
    return (
        <Routes>
            <Route path='/' element={<Layout token={token} saveToken={saveToken} />}>
                {/* <Route index element={<Home />} /> */}
                {/* <Route path="about" element={<About />} /> */}
                {/* <Route path="dashboard" element={<Dashboard />} /> */}

                {/* Using path="*"" means "match anything", so this route
                        acts like a catch-all for URLs that we don't have explicit
                        routes for. */}
                {/* <Route path="*" element={<NoMatch />} /> */}
            </Route>
        </Routes>
    );
}

export default App;
