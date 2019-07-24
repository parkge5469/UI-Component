import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Button,TextField,Radio,RadioGroup } from '@material-ui/core';
import { makeStyles,withStyles } from '@material-ui/styles';
import {} from '@material-ui/core/colors';

interface Props extends RouteComponentProps<void>{}

const ChoiceFindPW = (props:Props) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div>
                
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

    }
})

export default ChoiceFindPW;
