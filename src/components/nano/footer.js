import { Box, Container, Typography } from '@material-ui/core'
import PopupHonkai from '../styling/alert'
import React from 'react'
import SocialMediaLinks from '../pages/main/socialMediaLinks'
import HtmlTooltip from '../styling/tooltip'

const PopupDialog = () => (
    <div>
        <Typography variant="subtitle1" gutterBottom>
            This site was designed by <b>Cucu Ruhiyatna</b>, you can reach me on:
        </Typography>
        <div style={{display:'block',textAlign:'center'}}>
            <SocialMediaLinks/>
        </div>
    </div>
)

const MainFooter = () => {
    return (
        <Container fixed>
            <Box p={1}>
                <Typography variant="body1" align="center">
                    <PopupHonkai
                        title="Thanks for visiting!"
                        html={<PopupDialog/>}
                        confirmButtonText={'Got it!'}
                    >
                        <HtmlTooltip
                            arrow={true}
                            title={
                                <Typography variant="subtitle1" component="span">
                                    Click me
                                </Typography>
                            }
                        >
                            <span className="cursor-pointer">
                                &copy;{new Date().getFullYear()} - This site was designed with 💖 by Cucu Ruhiyatna</span>
                        </HtmlTooltip>
                    </PopupHonkai>
                </Typography>
            </Box>
        </Container>
    )
}

export default MainFooter
