import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { makeStyles, withStyles } from '@material-ui/styles'
import { Card,CardHeader,CardContent,Button,TextField } from '@material-ui/core';
import { orange } from '@material-ui/core/colors';

interface Props extends RouteComponentProps<void>{}

const LoginPage = (props:Props) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.loginBox}>
                <Card className={classes.card}>
                    <h1>
                        LOGIN
                    </h1>
                    <CardContent>
                        <div className={classes.loginForm}>
                            <div className={classes.inputForm}>
                                <CssTextField id="custom-css-standard-input" label="ID" />
                                <CssTextField id="custom-css-standard-input" label="Password" type='password' />
                            </div>

                            <LoginButton variant='contained' color='primary' fullWidth={true} >
                                로그인
                            </LoginButton>
                            <div className={classes.buttonForm}>
                                <Button className={classes.buttonStyle} variant='contained' color='primary'>아이디 찾기</Button>
                                <Button className={classes.buttonStyle} variant='contained' color='primary'>비밀번호 찾기</Button>
                                <Button className={classes.buttonStyle} variant='contained' color='primary'>회원가입</Button>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )

}

const useStyles = makeStyles({
    root: {
        height: "100%",
		textAlign: "center",
		paddingTop: 20,
		paddingLeft: 15,
		paddingRight: 15,
    },
    loginBox: {
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",

    },
    loginForm: {
        height: "100%",
        display: "flex",
        flexFlow: "column",
        justifyContent:"space-around",
    },
    card: {
        maxWidth: 500,
        padding: 30
    },
    inputForm: {
        height: "30%",
        display: "flex",
        flexFlow: "column",
        paddingBottom: 30
    },
    buttonForm: {
        width: 360,
        display: "flex",
        flexFlow: "row",
        justifyContent: "space-between",
        alignContent: "stretch",
        paddingTop: 10,
        
    },
    buttonStyle: {
        minWidth: 90 
    },
    
})

const LoginButton = withStyles(theme => ({
    root: {
        
        color: theme.palette.getContrastText(orange[700]),
        backgroundColor: orange[700],
        '&:hover' : {
            backgroundColor: orange[900],
        }
    }
}))(Button)

const CssTextField = withStyles({
    root: {
      '& label.Mui-focused': {
        color: 'green',
      },
      '& .MuiInput-underline:after': {
        borderBottomColor: 'green',
      },
      '& .MuiOutlinedInput-root': {
        '& fieldset': {
          borderColor: 'red',
        },
        '&:hover fieldset': {
          borderColor: 'yellow',
        },
        '&.Mui-focused fieldset': {
          borderColor: 'green',
        },
      },
    },
  })(TextField);

export default LoginPage;