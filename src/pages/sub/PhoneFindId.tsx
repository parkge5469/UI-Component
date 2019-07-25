import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Button,TextField } from '@material-ui/core';
import { makeStyles,withStyles } from '@material-ui/styles';
import {} from '@material-ui/core/colors';

interface Props extends RouteComponentProps<void>{}

const PhoneFindId = (props:Props) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div className={classes.findForm}>
                <div className={classes.inputBox}>
                    <div className={classes.inputForm}>
                        <TextField className={classes.inputStyle} label="이름" />
                        <TextField className={classes.inputStyle} label="전화번호" />
                    </div>
                    <div className={classes.buttonForm}>
                        <Button className={classes.sendButton} variant='contained' color='primary'>인증번호 전송</Button>
                    </div>
                </div>
            </div>
        </div>
    )

}

const useStyles = makeStyles({
    root: {
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    findForm: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexFlow: "column",
        width: "60%",
        height: "60%",
    },
    buttonStyle: {
        '&:hover': {
            backgroundColor: "gray"
        }
    },
    inputForm: {
        width: "100%",
        height: "60%",
        display: "flex",
        flexFlow: "column",
        justifyContent: "flex-end",
        alignItems: "flex-end",
        paddingRight: 10

    },
    inputBox: {
        height: "40%",
        width: "80%",
        display: "flex",
        flexFlow: "flex-start",
        justifyContent: "space-between"
    },
    buttonForm: {
        width: "40%",
        display: "flex",
        height: "100%",
        alignItems: "center", 
    },
    sendButton: {
        textAlign: "center",
        height: "15%",
        width: "100%",
    },
    inputStyle: {
        width: "70%",
        
    }
})



export default PhoneFindId;