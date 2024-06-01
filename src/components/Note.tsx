import React from "react";
import { Link } from "react-router-dom";
import { Card, Typography } from "@mui/material";
import data from "../data/noteData.json";
import { Note as NoteType} from "../model/note";

//Shelf에서 Note를 불러와서 Note를 렌더링하는 컴포넌트
//Note에 대한 정보를 보여준다 (노트의 겉표지)
//클릭하면 노트의 속페이지로 넘어간다.

//Note 컴포넌트가 받아들일 props 데이터에 대한 타입 설정
interface NoteProps {
    data: NoteType;
}

const Note = ( {data} : NoteProps) => {
    //열면 오늘 날짜의 페이지가 새로 생성된다.
    //차라리 인덱스면...항상 0번째 인덱스? 최신순..

    const today = new Date().toISOString().split('T')[0];

    return (
        <Link to={`/${data.noteId}/${today}`}>
                <Card>
                    <Typography variant="h6">{data.language}</Typography>
                    <Typography variant="body1">{data.noteDate}</Typography>
                </Card>
                </Link>
        );
}

export default Note;