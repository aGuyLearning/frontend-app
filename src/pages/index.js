import React from 'react';
import './style.css';
import GoogleClone from "./MapComponent/GoogleClone"
import {ChakraProvider} from '@chakra-ui/react'

export default function App() {
    return (
        <ChakraProvider>
            <GoogleClone/>
        </ChakraProvider>
    )
}
