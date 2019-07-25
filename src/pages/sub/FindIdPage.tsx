import * as React from 'react'
import { RouteComponentProps,NavLink } from 'react-router-dom';
import { makeStyles,withStyles } from '@material-ui/styles';
import { Button } from '@material-ui/core';
import { orange } from '@material-ui/core/colors'

interface Props extends RouteComponentProps<void>{}

const FindIdPage = (props:Props) => {
    const classes = useStyles();

    return(
        <div className={classes.root}>
            <div className={classes.container}>
                <div className={classes.bottomBorder}>
                    <h1>아이디 찾기</h1>
                </div>
                <div className={classes.buttonForm}>
                    
                    <CustomButton 
                        className={classes.buttonStyle}
                        fullWidth={true} 
                        size='large' 
                        variant='contained'
                        color='primary'
                    >
                        <NavLink to='phoneFindId'>
                            휴대전화로 찾기
                        </NavLink>
                    </CustomButton>
                    
                    
                    <CustomButton 
                        className={classes.buttonStyle}
                        fullWidth={true} 
                        size='large' 
                        variant='contained'
                        color='primary'
                    >
                        <NavLink to='emailFindId'>
                            이메일로 찾기
                        </NavLink>
                    </CustomButton>
                    
                </div>
                
                   
                

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
        display: "flex",
        justifyContent: "center",
        alignItems: "center",

    },
    container: {
        width: "60%",
        height: "40%",
        display: "flex",
        flexFlow: "column",
        alignItems: "center",
        justifyContent: "flex-start",
    },
    bottomBorder: {
        textAlign: "left",
        width: "100%",
        borderBottom: "3px solid black",
        marginBottom: 20
    },
    buttonForm: {
        width: "100%",
        height: "60%",
        display: "flex",
        flexFlow: "column",
        justifyContent: "space-around"
    },
    buttonStyle: {
        fontSize: 20,
        fontWeight: "bold",
        width: "100%",
        height: "40%",
       
    }
})

const CustomButton = withStyles(theme => ({
    root: {
        color: theme.palette.getContrastText(orange[700]),
        backgroundColor: orange[700],
        '&:hover': {
            backgroundColor: orange[900]
        }
    }
}))(Button)

export default FindIdPage;