import React from "react";
import { Link } from "react-router-dom";
import { Card, Typography } from "@mui/material";

const Note = ({data}) => {

    return (
        <Link to={`/page/${data.id}`}>
                <Card>
                    <Typography variant="h6">{data.language}</Typography>
                    <Typography variant="body1">{data.createdate}</Typography>
                </Card>
                </Link>
        );
}

export default Note;