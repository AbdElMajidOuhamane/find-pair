import {Container,
  CardFlip,
  Score,
  UnknowCard,
  SecInfo,
  Title,ScoreBar,
  TitleScore,
  Paragraph,
  OptionScore,
  Size,
  ButtonRestart,
  TotalScore,
Span,Line,DropDown,OptionPair,Pt,OptionSize} from "./components/styles/Container.style";
import {useState} from "react"

function App() {


  return (
    <div className="App">
    <Title>Find Pair</Title>
    <Container>
      <SecInfo>
      <CardFlip>
        <UnknowCard>
          ?
        </UnknowCard>
   
      </CardFlip>
      <CardFlip>
        <UnknowCard>
          ?
        </UnknowCard>
   
      </CardFlip>
      <CardFlip>
        <UnknowCard>
          ?
        </UnknowCard>
   
      </CardFlip>
      <CardFlip>
        <UnknowCard>
          ?
        </UnknowCard>
   
      </CardFlip>
      <CardFlip>
        <UnknowCard>
          ?
        </UnknowCard>
   
      </CardFlip>
      <CardFlip>
        <UnknowCard>
          ?
        </UnknowCard>
   
      </CardFlip>
      <CardFlip>
        <UnknowCard>
          ?
        </UnknowCard>
   
      </CardFlip>
      <CardFlip>
        <UnknowCard>
          ?
        </UnknowCard>
   
      </CardFlip>
      <CardFlip>
        <UnknowCard>
          ?
        </UnknowCard>
   
      </CardFlip>
      <CardFlip>
        <UnknowCard>
          ?
        </UnknowCard>
   
      </CardFlip>
      <CardFlip>
        <UnknowCard>
          ?
        </UnknowCard>
   
      </CardFlip>
      <CardFlip>
        <UnknowCard>
          ?
        </UnknowCard>
   
      </CardFlip>
      <CardFlip>
        <UnknowCard>
          ?
        </UnknowCard>
   
      </CardFlip>
      <CardFlip>
        <UnknowCard>
          ?
        </UnknowCard>
   
      </CardFlip>
      <CardFlip>
        <UnknowCard>
          ?
        </UnknowCard>
   
      </CardFlip>
      <CardFlip>
        <UnknowCard>
          ?
        </UnknowCard>
   
      </CardFlip>
   
    </SecInfo>
    <Score>
      <ScoreBar>
        <TitleScore>Score</TitleScore>
        <TotalScore><Span color="#1890FF">2</Span> / 10</TotalScore>
        <Paragraph>Tries: 5</Paragraph>
      </ScoreBar>

      <Line />

      <OptionScore>
        <TitleScore>Options</TitleScore>
           <OptionSize>
            <Size>Size</Size>
            <DropDown>
              <OptionPair>10 pairs</OptionPair>
              <OptionPair>15 pairs</OptionPair>
              </DropDown>
              </OptionSize>
              <ButtonRestart>
                <Pt>Restart</Pt>
              </ButtonRestart>
      </OptionScore>
    </Score>
    </Container>

   
    </div>
  );
}

export default App;
