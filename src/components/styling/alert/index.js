import SweetAlert from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import alertFrameTop from '../../../assets/images/alertframetop.png'
import alertFrameMiddle from '../../../assets/images/alertframemiddle.png'
import alertFrameBottom from '../../../assets/images/alertframebottom.png'
import { fade, makeStyles } from '@material-ui/core'
import ButtonHonkai from '../buttons'

const bgColor = '#303030'

const useStyles = makeStyles(({palette, spacing}) => ({
    popupBackground:{
        backgroundSize:'contain',
        backgroundRepeat:'no-repeat'
    },
    popupHeader:{
        color:fade(bgColor, .8),
        paddingTop:spacing(7),
        minHeight:'215px',
        marginBottom:'-75px',
        background:`url(${alertFrameTop})`,
        backgroundSize:'100% 100%',
        backgroundRepeat:'no-repeat',
        fontFamily:'Impact, sans-serif',
        fontStyle:'italic'
    },
    popupContent:{
        color:fade(bgColor, .8),
        minHeight:'70px',
        background:`url(${alertFrameMiddle})`,
        backgroundSize:'100%',
        backgroundRepeat:'no-repeat',
        paddingTop:'0px!important'
    },
    popupFooter:{
        marginTop:0,
        padding:'30px 0px',
        borderTop:'none',
        height:'120px',
        background:`url(${alertFrameBottom})`,
        backgroundSize:'100% 100%',
        backgroundPosition:'bottom center',
        backgroundRepeat:'no-repeat'
    },
    actionButton:{
        minWidth:'200px',
        marginLeft:spacing(2),
        marginRight:spacing(2)
    }
}))

const Sweet = ({children, html, confirmButtonText, title, onConfirm, cancelButtonText}) => {
    const classes = useStyles()
    const MySwal = withReactContent(SweetAlert)

    const Wrapping = () => (
        <>
            <ButtonHonkai glitch={true} className={classes.actionButton} onClick={() => MySwal.clickConfirm()}>
                {confirmButtonText ? confirmButtonText : 'OK'}
            </ButtonHonkai>
            {cancelButtonText &&
                <ButtonHonkai glitch={true} className={classes.actionButton} onClick={() => MySwal.clickDeny()}>
                    {cancelButtonText}
                </ButtonHonkai>
            }
        </>
    )

    const Swal = () => {
        return MySwal.fire({
            title: (title),
            width:'980px',
            background:'transparent',
            showConfirmButton:false,
            showClass: {
                popup: 'animate__animated animate__fastest animate__fadeIn'
            },
            hideClass: {
                popup: 'animate__animated animate__fastest animate__fadeOut'
            },
            customClass: {
                title:classes.popupHeader,
                container:classes.popupContent,
                htmlContainer:classes.popupContent,
                footer:classes.popupFooter
            },
            html:html,
            footer:(<Wrapping/>)
        }).then((result) => {
            if (result.isConfirmed && onConfirm) {
                onConfirm()
            }
        })
    }
    
    return(
        <span onClick={Swal}>
            {children}
        </span>
    )
}

export default Sweet