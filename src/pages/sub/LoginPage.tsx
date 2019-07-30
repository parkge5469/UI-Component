import * as React from 'react';
import { RouteComponentProps,NavLink } from 'react-router-dom';
import { makeStyles, withStyles } from '@material-ui/styles'
import { Card,CardHeader,CardContent,Button,TextField } from '@material-ui/core';
import { orange } from '@material-ui/core/colors';

interface Props extends RouteComponentProps<void>{}

const LoginPage = (props:Props) => {
    const classes = useStyles();
    const [ id,setId ] = React.useState('');
    const [ password,setPW ] = React.useState(''); 
    const idInput = React.useRef<any>();   
    const passwordInput = React.useRef<any>();    

    function HandleClick(): void{
        const id = idInput.current.value();
        console.log('LoginPage-HandleClick : ' + id);
        
    }

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
                                <CssTextField ref={idInput} id="custom-css-standard-input" label="ID" />
                                <CssTextField ref={passwordInput} id="custom-css-standard-input" label="Password" type='password' />
                            </div>

                            <NavLink to='/main'>
                                <LoginButton variant='contained' color='primary' fullWidth={true} onClick={HandleClick}>
                                    로그인
                                </LoginButton>
                            </NavLink>
                            <div className={classes.buttonForm}>
                                <NavLink to='findId'><Button className={classes.buttonStyle} variant='contained' color='primary'>아이디 찾기</Button></NavLink>
                                <NavLink to='findPassword'><Button className={classes.buttonStyle} variant='contained' color='primary'>비밀번호 찾기</Button></NavLink>
                                <NavLink to='signUp'><Button className={classes.buttonStyle} variant='contained' color='primary'>회원가입</Button></NavLink>
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
        minHeight: "100%",
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