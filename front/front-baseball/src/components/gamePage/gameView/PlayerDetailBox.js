import React from 'react';
import styled from 'styled-components';

const PlayerDetailContainer = styled.div`
width:100%;
height: 75%;
`;
const PlayerTitle = styled.div`
font-size: 2em;
font-weight:700;
color: #c4e4ea;
display:flex;
flex-direction:column-reverse;
`;
const PlayerCard = styled.div`
padding: 20px;

`;
const DetailUl = styled.ul`
display:flex;
flex-direction:column-reverse;
`;
const PlayerDetailBox = ({batterHistory, ballHistory, allHistory}) => {
    // console.log('올', allHistory);
    // console.log("sjsjsjs",ballHistory);
    const detail = ballHistory.map((ballCount) => <li key={ballCount.id}>{ballCount.value} S{ballCount.strike} B{ballCount.ball}</li>)
    const homeList = batterHistory.map((todo) => 
    <div>
        <div key={todo.id}>
        {todo.cnt+1}번 타자 {todo.value}
        </div>
            <DetailUl>{detail}</DetailUl>
    </div>)
    return (
        <PlayerDetailContainer>
            <PlayerCard>
            <PlayerTitle>
                {homeList}
            </PlayerTitle>
            

            </PlayerCard>

        </PlayerDetailContainer>
    );
}

export default PlayerDetailBox;