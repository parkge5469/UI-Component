import * as React from 'react';
import { RouteComponentProps,NavLink } from 'react-router-dom';
import {} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import {} from '@material-ui/core/colors';

interface Props extends RouteComponentProps<void>{}

const SignUp = (props:Props) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            
        </div>
    );
}

const useStyles = makeStyles({
    root: {

    }
})

export default SignUp;