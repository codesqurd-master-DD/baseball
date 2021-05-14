import React from 'react';
import styled from 'styled-components';
const PlayerDetailContainer = styled.div`
width:100%;
height: 75%;
`;
const PlayerTitle = styled.div`
font-size: 1.5em;
font-weight:700;
color: #c4e4ea;
display:flex;
justify-content: space-between;
align-items:center;
overflow: hidden;
`;
const PlayerCard = styled.div`
padding: 20px;
`;
const DetailUl = styled.ul`
display:flex;
flex-direction:column-reverse;
`;
const HistoryBox = styled.div`
display:flex;
flex-direction:column-reverse;
`;
const PlayList = styled.div`
&:nth-last-child(1) {
    color: red;
}
`;
const PlayerDetailBox = ({batterHistory, ballHistory, allHistory}) => {
    const detail = ballHistory.map((ballCount) => <li key={ballCount.id}>{ballCount.value} S{ballCount.strike} B{ballCount.ball}</li>)
    const homeList = batterHistory.map((todo, idx) => 
        <PlayList key={todo.id}>
        {todo.cnt+1}번 타자 {todo.value}
        </PlayList>)
    return (
        <PlayerDetailContainer>
            <PlayerCard>
            <PlayerTitle>
            <HistoryBox>
                {homeList}
            </HistoryBox>
                <DetailUl>{detail}</DetailUl>
            </PlayerTitle>
            
            </PlayerCard>
        </PlayerDetailContainer>
    );
}
export default PlayerDetailBox;