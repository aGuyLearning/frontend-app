import React from 'react';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import './style.css';
import PointOfInterestPage from "./MapComponent/PointOfInterestPage"
import {ChakraProvider} from '@chakra-ui/react'


export default function Index() {
    return (
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    )


    // return (
    //     <div>
    //         <ChakraProvider>
    //             <PointOfInterestPage/>
    //         </ChakraProvider>
    //     </div>
    // )
}
