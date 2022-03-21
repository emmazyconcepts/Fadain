import styled, { keyframes } from "styled-components";
import wave from "../../assets/CD.png";
import rocket from "../../assets/B.png";
import human from "../../assets/RA.png";
import hand from "../../assets/PLO.png";
import talk from "../../assets/FO.png";


const move = keyframes`
0% { transform: translateY(-5px)         }
    50% { transform: translateY(10px) translateX(10px)        }
    100% { transform: translateY(-5px)         }
`;

const AboutSection = styled.section`
  width: 100vw;
  position: relative;
  height:300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Waves = styled.img`
  width: 100%;
  height: auto;
  position: absolute;
  top: -1rem;
`;
const Hand = styled.div`
  position: absolute;
  bottom: -1rem;
  right: 0;

  @media only Screen and (max-width: 40em) {
    display: none;
  }
`;
const Bd = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: flex-start;
padding: 75.976px 0px;

position: static;
width: 1539.64px;
height: 434.27px;
left: 0px;
top: 531.83px;

/* White */

background: #FFFFFF;

/* Inside auto layout */

flex: none;
order: 1;
align-self: stretch;
flex-grow: 0;
margin: 0px 0px;

`
const Main = styled.div`
  margin: 0 15rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;


  @media only Screen and (max-width: 64em) {
    margin: 0 calc(5rem + 5vw);
    margin-top: 10rem;
  }
  @media only Screen and (max-width: 40em) {
    align-items: center;
    margin: 3rem calc(3rem + 3vw);
  }
`;

const Title = styled.h1`
  font-size: 2rem;
  
  display: inline-block;
`;

const CurvedLine = styled.div`
  width: 7rem;
  height: 2rem;
  border: solid 5px var(--purple);
  border-color: var(--purple) transparent transparent transparent;
  border-radius: 150%/60px 70px 0 0;
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media only Screen and (max-width: 40em) {
    flex-direction: column;
  }
`;

const Rocket = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  width: 40%;
  padding-bottom: 5rem;
  animation: ${move} 2.5s ease infinite;
  @media only Screen and (max-width: 40em) {
    width: 50vw;
    padding-bottom: 0;
  }
`;

const Human = styled.div`
  width: 50%;
  position: absolute;
  right: 0;
  bottom: 100%;

  @media only Screen and (max-width: 40em) {
    display: none;
  }
`;
const Text = styled.h4`
  font-size: calc(0.5rem + 1vw);
  line-height: 1.5;
  color: var(--nav2);
`;
const Circle = styled.span`
  display: inline-block;
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  background-color: black;
  margin-right: 0.1rem;
  margin-top: 1rem;


  
`;
const AboutText = styled.div`
  width: 50%;
  position: relative;
  @media only Screen and (max-width: 40em) {
    width: 100%;
  }
`;

const CTB = styled.button`

 
  display: flex;
  
  @media only Screen and (max-width: 40em) {
    display: inline-block;
    margin-buttom

  }
  
`;
const CTA = styled.button`
 display:flex;
 padding:10px;
 width:100px;
 margin-left:50px;


  img {
    width: 3.5rem;
  }
  @media only screen and (max-width: 48em) {
    width:40px;

  }
  &:hover {
    transform: scale(1.1);
  }
  &:active {
    transform: scale(0.9);
  }
`;


const About = () => {
  return (
    <AboutSection id="about">
      <Main>
        <div>
          <Title>Join our growing list of client</Title>
        </div>
        <Content>
        
          <AboutText>
          
            <CTB>
             <div>
               <CTA>
               <img src={talk} alt="cta" width="1" height="1" />

               </CTA>
               Fresh Organics&nbsp;
              </div>
              <div>
               <CTA>
               <img src={hand} alt="cta" width="1" height="1" />

               </CTA>
               PL  Award&nbsp;
              </div>
              <div>
               <CTA>
               <img src={human} alt="cta" width="1" height="1" />

               </CTA>
               Redot Agency&nbsp;
              </div>
              <div>
               <CTA>
               <img src={wave} alt="cta" width="1" height="1" />

               </CTA>
               The Campus Digest&nbsp;
              </div>
              <div>
               <CTA>
               <img src={rocket} alt="cta" width="1" height="1" />

               </CTA>
               Beelashes&nbsp;
              </div>
          

              </CTB>
         
         
          </AboutText>
        </Content>
      </Main>
    </AboutSection>
  );
};

export default About;
