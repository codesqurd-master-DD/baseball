import React, {useState} from 'react';
import styled from 'styled-components';
const PlayCotainer = styled.div`
width: 100%;
height: 75%;
`;
const PitchBtn = styled.button`
    position:absolute;
    top: 60%;
    left: 35%;
    font-size:30px;
    margin-right: 20px;
    color:white;
    font-size:40px;
    background-color:black;
    border: 5px solid white;
    padding: 0 20px;
    border-radius: 5px;
`;
const SBOState = styled.div`
width: 30%;
display:inline-block`;
const HorizonList = styled.ul`
list-style: none;
display:felx;
border: 1px solid red;
align-items: center;

`;
const StrikeView = styled(HorizonList)`
`;
const BallView = styled(HorizonList)``;
const OutView = styled(HorizonList)``;
const SBOList = styled.li`
font-size: 40px;
font-weight: 600;
`;
const StrikeList = styled(SBOList)`
`;
const BallList = styled(SBOList)`
`;
const OutList = styled(SBOList)`
font-size: 40px;
`;
const StrikeCircle = styled.div`
width:40px;
height:40px;
border-radius:50%;
background-color:yellow;
margin-left:10px;
`;
const BallCircle = styled.div`
width:40px;
height:40px;
border-radius:50%;
background-color:green;
margin-left:10px;
`;
const OutCircle = styled.div`
width:40px;
height:40px;
border-radius:50%;
background-color:red;
margin-left:10px;
`;
const RoundView = styled.div`
float: right;
font-size: 2em;
padding: 20px;
`;

const GroundBox = ({isDefense, decidePlaySequence, pitchState, ConvertPosition, playerData, createPitchResult, strikeCnt, ballCnt, outCnt, isTop, roundCount}) => {



    const strikeCount = strikeCnt.map(item => (<li key={item.id}><StrikeCircle></StrikeCircle></li>))
    const ballCount = ballCnt.map(item => (<li key={item.id}><BallCircle></BallCircle></li>))
    const outCount = outCnt.map(item => (<li key={item.id}><OutCircle></OutCircle></li>));
    const roundInfo = `${roundCount}회${isTop === true ? `초`:`말`} ${isDefense === true ? '수비': '공격'}`;
    return (
        <PlayCotainer>
            <SBOState>
                <StrikeView>
                    <StrikeList>S</StrikeList>
                    {strikeCount}
                </StrikeView>
                <BallView>
                    <BallList>B</BallList>
                    {ballCount}
                </BallView>
                <OutView>
                    <OutList>O</OutList>
                    {outCount}
                </OutView>
            </SBOState>
            {pitchState && <PitchBtn onClick={createPitchResult}>PITCH</PitchBtn> }
            <button onClick={ConvertPosition}>공수전환</button>
            <RoundView>
            {roundInfo}
            </RoundView>
        </PlayCotainer>
    );
}

export default GroundBox;