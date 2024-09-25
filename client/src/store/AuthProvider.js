import React from 'react'
import { AuthContext } from './context-store'
import { useState } from 'react'


const AuthProvider = (props) => {
    const initialToken = localStorage.getItem('token')
    //const [user, setUser] = useState(initialToken)
    const [user, setUser] = useState({token:'asdf'})

    const login = (token) => {
        const data = { token: token }
        setUser(data)
        localStorage.setItem('token', token)
    }

    const logout = () => {
        setUser(null)
        localStorage.removeItem('token')
    }

    return (
        <AuthContext.Provider value={{user, login, logout}} > 
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthProvider