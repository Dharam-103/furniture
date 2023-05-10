import { Alert, useToast } from '@chakra-ui/react'
import React from 'react'
import { Navigate } from 'react-router-dom'
import { createStandaloneToast } from '@chakra-ui/react'

const { ToastContainer, toast } = createStandaloneToast()

const PrivateRoute = ({children}) => {
let token=localStorage.getItem("token")
// let toast = useToast()
toast({
    title: 'Please Login',
    description: "Need to Login!!",
    status: 'error',
    duration: 9000,
    isClosable: true,
  })
    if(!token){
        return <>
                <Navigate to='/'/>

        <ToastContainer />
        // <Navigate to='/'/>
        </>
    }else{
        return children
    }
    
  
}

export default PrivateRoute
