import * as React from 'react';
import { RouteComponentProps,NavLink } from 'react-router-dom';
import { Card,CardContent,TextField,Button,FormControl,InputLabel,InputBase } from '@material-ui/core';
import { makeStyles,withStyles,fade } from '@material-ui/core/styles';
import {} from '@material-ui/core/colors';

interface Props extends RouteComponentProps<void>{}

const SignUp = (props:Props) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            
                <Card className={classes.card}>
                    
                    <CardContent className={classes.cardContent}>
                        <div className={classes.input1}>
                            <div className={classes.inputBox}>
                                <FormControl>
                                    <InputLabel shrink htmlFor="bootstrap-input">
                                        아이디 *
                                    </InputLabel>
                                    <BootstrapInput id="bootstrap-input"/>
                                </FormControl>
                            </div>
                            <div></div>
                            <div className={classes.inputBox}>
                                <FormControl>
                                    <InputLabel shrink htmlFor="bootstrap-input">
                                        비밀번호 *
                                    </InputLabel>
                                    <BootstrapInput id="bootstrap-input"/>
                                </FormControl>
                            </div>
                            <div></div>
                            <div className={classes.inputBox}>
                                <FormControl>
                                    <InputLabel shrink htmlFor="bootstrap-input">
                                        비밀번호 재확인 *
                                    </InputLabel>
                                    <BootstrapInput id="bootstrap-input"/>
                                </FormControl>
                            </div>
                            <div></div>

                        </div>
                        <div className={classes.input2}>
                            <div className={classes.inputBox}>
                                <FormControl>
                                    <InputLabel shrink htmlFor="bootstrap-input">
                                        이름 *
                                    </InputLabel>
                                    <BootstrapInput id="bootstrap-input"/>
                                </FormControl>
                            </div>
                            <div></div>
                            <div className={classes.inputBox}>
                                <FormControl>
                                    <InputLabel shrink htmlFor="bootstrap-input">
                                        구분 *
                                    </InputLabel>
                                    <BootstrapInput id="bootstrap-input"/>
                                </FormControl>
                            </div>
                            <div></div>
                            
                        </div>
                        <div className={classes.input3}>
                            <div className={classes.inputBox}>
                                <FormControl>
                                    <InputLabel shrink htmlFor="bootstrap-input">
                                        전화번호 *
                                    </InputLabel>
                                    <BootstrapInput id="bootstrap-input"/>
                                </FormControl>
                            </div>

                            <div className={classes.button}>
                                <Button variant='contained'>+</Button>
                                <Button variant='contained'>-</Button>
                            </div>
                            
                            <div className={classes.inputBox}>
                                <FormControl>
                                    <InputLabel shrink htmlFor="bootstrap-input">
                                        Email *
                                    </InputLabel>
                                    <BootstrapInput id="bootstrap-input"/>
                                </FormControl>
                            </div>

                            <div className={classes.button}>
                                <Button variant='contained'>+</Button>
                                <Button variant='contained'>-</Button>
                            </div>

                            <div className={classes.inputBox}>
                                <FormControl>
                                    <InputLabel shrink htmlFor="bootstrap-input">
                                        주소 *
                                    </InputLabel>
                                    <BootstrapInput id="bootstrap-input"/>
                                </FormControl>
                            </div>

                            <div className={classes.button}>
                                <Button variant='contained'>+</Button>
                                <Button variant='contained'>-</Button>
                            </div>
                            
                        </div>
                        <div className={classes.input4}>
                            <Button variant='contained'>취소</Button>
                            <Button variant='contained'>가입</Button>
                        </div>
                        
                        
                    </CardContent>
                </Card>
        </div>
    );
}

const useStyles = makeStyles({
    root: {
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'

    },
    card: {
        maxHeight: '100%',
        height: '60%',
        width: '30%',
    },
    cardContent: {
        maxHeight: '100%',
        height: '60%',
        width: '80%',
        marginTop: 20,
        marginBottom: 20,
        display: 'grid',
        
    },
    input1: {
        display: 'grid',
        gridTemplateColumns: '2fr 1fr ',
        paddingBottom: 20,
    },
    input2: {
        display: 'grid',
        gridTemplateColumns: '2fr 1fr ',
    },
    input3: {
        display: 'grid',
        gridTemplateColumns: '2fr 1fr ',

    },
    input4: {
        marginTop: 30,
        display: 'flex',
        justifyContent: 'center',
    },
    button: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
    inputBox: {
        marginTop: 5,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }
})

const BootstrapInput = withStyles(theme => ({
    root: {
      'label + &': {
        marginTop: theme.spacing(3),
      },
    },
    input: {
      borderRadius: 4,
      position: 'relative',
      backgroundColor: theme.palette.common.white,
      border: '1px solid #ced4da',
      fontSize: 16,
      width: 'auto',
      padding: '10px 12px',
      transition: theme.transitions.create(['border-color', 'box-shadow']),
      // Use the system font instead of the default Roboto font.
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      '&:focus': {
        boxShadow: `${fade(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
        borderColor: theme.palette.primary.main,
      },
    },
  }))(InputBase);

export default SignUp;