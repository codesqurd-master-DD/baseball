import React, {useState} from 'react';
import styled from 'styled-components';
const PlayCotainer = styled.div`
width: 100%;
height: 75%;
/* position:relative; */
`;
const PitchBtn = styled.button`
    position:absolute;
    top: 30%;
    left: 39%;
    font-size:30px;
    margin-right: 20px;
    color:white;
    font-size:40px;
    background-color:black;
    border: 5px solid white;
    padding: 0 20px;
    border-radius: 5px;
    z-index:1;
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
const BasemanCotainer = styled.div`
position: absolute;
/* display:flex;
flex-direction:column-reverse;
position:relative; */
`;
const GroundCotainer = styled.div`
width: 800px;
height: 800px;
/* border: 3px solid white; */
position: relative;
margin: auto;
`;
const Ground = styled.div`
position:absolute;
/* margin: auto; */
/* background:red; */
    top:10%;
    left:25%;
    width:400px;
    height:400px;
    transform: rotate(45deg);
    border: 5px solid #7d7d7d;
/* background: #7d7d7d; */

`;
const BaseManOne = styled.div`
    position: absolute;
    top:-3%;
    left: 44%;
    background:white;
    width:80px;
    height:80px;
    transform: rotate(45deg);
`;
const BaseManTwo = styled.div`
position: absolute;
    top:30%;
    left: 10%;
    background:white;
    width:80px;
    height:80px;
    transform: rotate(45deg);
`;
const BaseManThree = styled.div`
position: absolute;
    top:64%;
    left: 44%;
    background:white;
    width:80px;
    height:80px;
    transform: rotate(45deg);
`;
const Bar = styled.div`
position: absolute;
top:85%;
left:42%;
width:111px;
height: 120px;
background: white;
`;
const BaseManFour = styled.div`
position: absolute;
    top:30%;
    left: 80%;
    background:white;
    width:80px;
    height:80px;
    transform: rotate(45deg);
`;

const BaseMainBox = styled.div`
width: 70px;
height: 70px;
border-radius:50%;
border: 3px solid blue;
background: grey;
color: black;
font-weight: 800;
font-size: 40px;
padding-top: 15px;
vertical-align:middle;
text-align:center;
/* position: absolute; */
z-index: 2;
margin-left: 180px;
/* &:nth-child(1) {
    left:33.6%;
    top:35.5%;
}
&:nth-child(2) {
    left:12%;
    top:61%;
}
&:nth-child(3) {
    left:33.5%;
    top:87.5%;
}
&:nth-child(4) {
    left:56.5%;
    top:61%;
} */
`;
const BasemanEach = styled.div`
padding: 16px;
`;
const BasemanBox = styled.div`
display:felx;
`;
const BasemanTitle = styled.div`
position: absolute;
font-size:40px;
/* padding: 20px; */
margin-left:20px;
`;

const GroundBox = ({awayBasemanState, checkScoreCount, isDefense, decidePlaySequence, pitchState, ConvertPosition, playerData, createPitchResult, strikeCnt, ballCnt, outCnt, isTop, roundCount}) => {
    /* console.log('체크', awayBasemanState); */

    const base = awayBasemanState.map((e, idx)=> (<BaseMainBox key={idx} active={idx}>{e}</BaseMainBox>));
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
            <button onClick={ConvertPosition}>공수전환</button>
            <BasemanBox>
            <BasemanTitle>
            <BasemanEach>1루수</BasemanEach>
            <BasemanEach>2루수</BasemanEach>
            <BasemanEach>3루수</BasemanEach>
            <BasemanEach>홈인</BasemanEach>
            </BasemanTitle>
            <BasemanCotainer>{base}</BasemanCotainer>
            </BasemanBox>
            <RoundView>
            {roundInfo}
            </RoundView>
            <GroundCotainer>
            {pitchState && <PitchBtn onClick={createPitchResult}>PITCH</PitchBtn> }
            <Ground></Ground>
            <BaseManOne>ddd</BaseManOne>
            <BaseManTwo></BaseManTwo>
            <BaseManThree></BaseManThree>
            <Bar></Bar>
            <BaseManFour></BaseManFour>

            </GroundCotainer>
        </PlayCotainer>
    );
}

export default GroundBox;