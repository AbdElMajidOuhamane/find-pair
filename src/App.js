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
import SingleCard from "./components/SingleCard";
import {useState} from "react"

const cardImages=[
  {"src":"/img/Rectangle-1.png",matched:false},
  {"src":"/img/Rectangle-2.png",matched:false},
  {"src":"/img/Rectangle-3.png",matched:false},
  {"src":"/img/Rectangle-4.png",matched:false},
  {"src":"/img/Rectangle-5.png",matched:false},
  {"src":"/img/Rectangle-6.png",matched:false},
  {"src":"/img/Rectangle-7.png",matched:false},
  {"src":"/img/Rectangle-8.png",matched:false},
  {"src":"/img/Rectangle-9.png",matched:false},
  {"src":"/img/Rectangle-10.png",matched:false}
 
]

function App() {


  const [cards,setCards]=useState([])
  const [turns,setTurns] =useState(0)
 
 
  const shuffeldCards=()=>{
    const shuffeldCards =[...cardImages,...cardImages]
        .sort(()=>Math.random() - 0.5)
        .map((card)=>({...card, id:Math.random()}))
        setCards(shuffeldCards)
        setTurns(0)
      }
    

  return (
    <div className="App">
    <Title>Find the pairs</Title>
    <Container>
      <SecInfo>
      {cards.map(card=>(
         <SingleCard key={card.id}
          card={card}
           />
        ))}
     
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
              <ButtonRestart  onClick={shuffeldCards}>
                <Pt>Restart</Pt>
              </ButtonRestart>
      </OptionScore>
    </Score>
    </Container>

   
    </div>
  );
}

export default App;
