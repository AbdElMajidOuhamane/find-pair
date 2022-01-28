import React from 'react';
import {UnknowCard,CardFlip,ImageF,Card} from "../components/styles/Container.style";

const SingleCard = ({card}) => {
  return (
       <Card>
      
        <CardFlip>
        <UnknowCard>?</UnknowCard>
      </CardFlip>
      </Card>
  
  )
};

export default SingleCard;
