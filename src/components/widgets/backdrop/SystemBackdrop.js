import React from "react";
import {Backdrop, CircularProgress} from "@material-ui/core";

export default function SystemBackdrop(props) {
    const {open} = props;

    return (
        <div>
            <Backdrop
                style={{color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1}}
                open={open}
            >
                <CircularProgress color="inherit"/>
            </Backdrop>
        </div>
    );
}
