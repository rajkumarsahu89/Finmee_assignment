import React from 'react'
import { Box } from '@chakra-ui/react'
import '../assets/loader.css'
export const Loader = () => {

    return (

        <Box

            height={'100vh'}
            width={'100vw'}
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}

        >
            <img src={"https://ntwist.com/wp-content/uploads/2022/03/favicon.png"} alt="logo" width="100vw" className="logo-spinner" />
            <div class="loader"></div>
        </Box>
    )
}