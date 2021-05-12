import React from 'react';
import styled from 'styled-components';

const PlayerDetailContainer = styled.div`
width:100%;
height: 75%;
/* background-color: red; */
/* outline: 2px solid black; */
`;
const PlayerCard = styled.div``;
const PlayerDetailBox = ({batterHistory}) => {
    console.log(batterHistory)
    const homeList = batterHistory.map((todo) => <div key={todo.id}>{todo.cnt+1}번 타자 {todo.value}</div>)
    return (
        <PlayerDetailContainer>
            <PlayerCard>
            <div>
                {homeList}
            </div>
            <ul><li></li></ul>
            </PlayerCard>

        </PlayerDetailContainer>
    );
}

export default PlayerDetailBox;