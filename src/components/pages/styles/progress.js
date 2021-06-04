import { Box, Paper, Typography } from '@material-ui/core'
import React from 'react'
import LinearProgressWithLabel from './linearProgressWithLabel'


const Title = ({title}) => (
    <Typography variant="h3" component="h3" className="text-impact-italic">
        {title}
    </Typography>
)

const Progress = () => {
    return (
        <div style={{marginTop:'150px'}}>
            <Box p={3}>
                <Title title="Progress bar primary indeterminate (default)"/>
                    <LinearProgressWithLabel height="10px" value={50}/>
                <Paper>
                    <pre>
    {`
    <LinearProgressWithLabel color="primary" height="10px" variant="indeterminate" value={50} />
    `}
                    </pre>
                </Paper>
            </Box>
            <Box p={3}>
                <Title title="Progress bar primary buffer"/>
                    <LinearProgressWithLabel color="primary" variant="buffer" valueBuffer={60} height="10px" value={50}/>
                <Paper>
                    <pre>
    {`
    <LinearProgressWithLabel color="primary" variant="buffer" valueBuffer={60} height="10px" value={50}/>
    `}
                    </pre>
                </Paper>
            </Box>
        </div>
    )
}

export default Progress
