import React from "react";
import { Container , Box, Card, Divider, Typography } from "@mui/material";
import Note from "./Note";

import data from "../data/noteData.json";

//노트 모음
//노트 생성, 삭제, 수정

const Shelf = () => {
    return (
        <Container>
            <Box>
                <Typography variant="h4">책장</Typography>
            </Box>

            <Divider />

            <Box>
                {
                    data.map((data,i) => {
                        return (
                            <Note key={i} data={data}/>
                        );
                    })
                }
            </Box>

        </Container>
    );
}

export default Shelf;