import React from "react";
import { Container, Paper, Typography } from "@mui/material";
import data from "../data/pageData.json";   

const Page = () => {    
    return (
        <Container>
            <Typography variant="h4">{data.createdate}</Typography>
            <Typography variant="h4">{data.language}</Typography>
            {
                data.map((page,i) => {
                    return (
                        <Paper key={i}>
                            <Typography variant="h6">{page.expressions[i]}</Typography>
                            <Typography variant="body1">{page.translations[i]}</Typography>
                        </Paper>
                    );
                })
            }
        </Container>
    );
}   

export default Page;