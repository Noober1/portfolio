import { Box, Container, Grid, Paper, Typography } from '@material-ui/core'
import { queueWrite } from 'glitched-writer'
import React, { useEffect, useState } from 'react'

const Quotes = () => {
    
    const [isGlitchLoaded, setisGlitchLoaded] = useState(false)
    const phrases = [
        'If you fail to plan, you plan to fail - Benjamin Franklin',
        'Genius is one percent inspiration, ninety-nine percent perspiration - Thomas A. Edison',
        'All creative people want to do the unexpected - Hedy Lamarr',
        'Education is the key to unlocking the golden door of freedom - George Washington Carver',
        'A person who never made a mistake never tried anything new - Albert Einstein',
        'Whether you think you can or think you can\'t, you\'re right. - Henry Ford',
        'Keep it simple, stupid - Kelly Johnson'
    ]

    useEffect(() => {
        if (!isGlitchLoaded) {
            queueWrite(phrases, '#glitchType', 'default', 5000, true, null)
            setisGlitchLoaded(true)
        }
    },[])

    return (
        <Box alignContent="center" mt={5} mb={5}>
            <Container maxWidth="md" style={{textAlign:'center'}}>
                <Box p={2} style={{minHeight:'100px'}}>
                    <Typography variant="h5" component="span" id="glitchType" className="ZillaSlab"/>
                </Box>
            </Container>
        </Box>
    )
}

export default Quotes
