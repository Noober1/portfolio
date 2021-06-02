import { Paper, Typography } from '@material-ui/core'
import React from 'react'
import PopupHonkai from '../../styling/alert'
import ButtonHonkai from '../../styling/buttons'

const Swal = () => {

    const TestHtml = <div>Dengan confirm dan deny button, plus callback jika diconfirm</div>

    return (
        <>
        <Typography variant="h2">
            Honkai Popup
        </Typography>
        <PopupHonkai
            title="Entahlah"
            html={TestHtml}
            onConfirm={() => alert('hellow')}
            confirmButtonText={'Oke'}
            cancelButtonText={'Batal'}
        >
            <ButtonHonkai color="primary">
                full
            </ButtonHonkai>
        </PopupHonkai>
        <PopupHonkai
            title="Entahlah"
            html={TestHtml}
        >
            <ButtonHonkai color="primary">Basic</ButtonHonkai>
        </PopupHonkai>
        <Paper>
            <pre>
                {`
    <PopupHonkai
        title="Entahlah"
        html={TestHtml}
        onConfirm={() => alert('hellow')}
        confirmButtonText={'Oke'}
        cancelButtonText={'Batal'}
    >
        <ButtonHonkai color="primary">Open</ButtonHonkai>
    </PopupHonkai>
                `}
            </pre>
        </Paper>
        </>
        
    )
}

export default Swal
