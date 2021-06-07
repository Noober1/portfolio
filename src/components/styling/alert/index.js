import SweetAlert from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { makeStyles } from '@material-ui/core'
import ButtonHonkai from '../buttons'
import clsx from 'clsx'

const useStyles = makeStyles(({palette, spacing}) => ({
    actionButton:{
        minWidth:'200px',
        marginLeft:spacing(2),
        marginRight:spacing(2)
    }
}))

const Sweet = ({children, html, confirmButtonText, title, onConfirm, cancelButtonText}) => {
    const MySwal = withReactContent(SweetAlert)
    const classes = useStyles()

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
                title:'popup-popupHeader',
                container:'popup-popupContent',
                htmlContainer:'popup-popupContent',
                footer:'popup-popupFooter'
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