import React from "react";
import { Container , Box, Card, Divider, Typography } from "@mui/material";
import Note from "./Note";
import notes from "../data/noteData.json";
import {Language} from "../model/note";

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
                    notes.map((note,i) => {
                         // note.language를 Language enum의 멤버로 변환
            const language = Language[note.language as keyof typeof Language];

            // 변환된 language를 사용하여 새로운 note 객체를 생성
            const newNote = {
           ...note,
           language: language,
            };
                        
                        return (
                            <Note key={i} data={newNote}/>
                        );
                    })
                }
            </Box>

        </Container>
    );
}

export default Shelf;