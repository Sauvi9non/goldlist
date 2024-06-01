import React, {useState} from "react";
import { Container, Paper, Typography } from "@mui/material";
import { Page as PageType, Expression as ExpType } from "../model/page";
import data from "../data/noteData.json";

//여기서 노트의 속페이지
// /:noteId/:pageDate

//처음 열면, 오늘 날짜의 페이지가 디폴트.
//페이지를 넘기면, 그 페이지로 이동.

// 데이터값이 계속해서 바뀌는 건...인덱스

const Page = () => {
    //오늘 날짜의 페이지를 만들어서 배열에 추가하고 보여준다.
    //페이지를 넘기면, 그 페이지로 이동한다.
    //어차피 이미 데이터는 다 가지고 있으니까, 그냥 데이터에서 불러오면 되는 거 아닌가?
    //어 아니다. 어차피 오늘 것만 보여줄거니까 상관없나.
//어 이거 폼 아니야...?
//인풋이면서 보이는 것도 동시에...
    return (
        <Container>
            {

            }
        </Container>
    );
}   

export default Page;