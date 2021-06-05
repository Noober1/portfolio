import React from 'react'
import { Facebook, Twitter, GitHub, Reddit } from '@material-ui/icons/';
import HtmlTooltip from '../../styling/tooltip';
import { IconButton, Typography } from '@material-ui/core';

const SocialMediaTooltip = ({children, title}) => (
    <HtmlTooltip
        arrow={true}
        title={
            <Typography variant="subtitle1" component="span">
                {title}
            </Typography>
        }
    >
        {children}
    </HtmlTooltip>
)

const SocialMediaLinks = () => {
    return (
        <>
        <SocialMediaTooltip title="Follow me on Facebook">
            <IconButton href="https://fb.me/ruhiyatna.cucu" target="blank">
                <Facebook fontSize="large"/>
            </IconButton>
        </SocialMediaTooltip>
        <SocialMediaTooltip title="Follow me on Twitter">
            <IconButton href="https://twitter.com/cybersnatural" target="blank" >
                <Twitter fontSize="large"/>
            </IconButton>
        </SocialMediaTooltip>
        <SocialMediaTooltip title="Follow me on Reddit">
            <IconButton href="https://www.reddit.com/user/lordazhura" target="blank" >
                <Reddit fontSize="large"/>
            </IconButton>
        </SocialMediaTooltip>
        <SocialMediaTooltip title="Follow me on GitHub">
            <IconButton href="https://github.com/Noober1" target="blank" >
                <GitHub fontSize="large"/>
            </IconButton>
        </SocialMediaTooltip>
        </>
    )
}

export default SocialMediaLinks
