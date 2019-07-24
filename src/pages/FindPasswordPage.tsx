import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Button,TextField } from '@material-ui/core';
import { makeStyles,withStyles } from '@material-ui/styles';
import {} from '@material-ui/core/colors';

interface Props extends RouteComponentProps<void> {}

const FindPasswordPage = (props:Props) => {
    const classes = useStyles();

    return (
        <div className={classes.root} >
            <div className={classes.container}>
                <div className={classes.bottomBorder}>
                    <h1>비밀번호 찾기</h1>
                </div>
                <TextField
                    id="outlined-bare"
                    defaultValue="아이디 입력"
                    margin="normal"
                    variant="outlined"
                />
                <Button variant='contained' color='primary' size='large'>다음</Button>
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
    container: {
        width: "60%",
        height: "60%",
        display: "flex",
        flexFlow: "column"
    },
    bottomBorder: {
        textAlign: "left",
        width: "100%",
        borderBottom: "3px solid black",
        marginBottom: 20
    },
})

export default FindPasswordPage;
