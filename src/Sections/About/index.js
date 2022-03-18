import styled, { keyframes } from "styled-components";
import wave from "../../assets/waves.svg";
import rocket from "../../assets/rocket image.png";
import human from "../../assets/human.svg";
import hand from "../../assets/hand.svg";
import talk from "../../assets/speech-bubble.png";


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
  

  
`;
const CTA = styled.button`
  background-color: var(--purple);
  color: #ffff;
  padding: 1rem 3rem;
  margin-top: 1rem;
  border-radius: 1px;
  cursor: pointer;
  font-size: calc(0.8rem + 0.8vw);
  font-weight: 800;
  display: flex;
  align-items: center;
  transition: transform 0.2s;

  img {
    width: 1.5rem;
  }
  @media only screen and (max-width: 48em) {
    padding: 0.2rem 1rem;
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
               <img src={talk} alt="cta" width="1" height="1" />

               </CTA>
               PL  Award&nbsp;
              </div>
              <div>
               <CTA>
               <img src={talk} alt="cta" width="1" height="1" />

               </CTA>
               Redot Agency&nbsp;
              </div>
              <div>
               <CTA>
               <img src={talk} alt="cta" width="1" height="1" />

               </CTA>
               The Campus Digest&nbsp;
              </div>
              <div>
               <CTA>
               <img src={talk} alt="cta" width="1" height="1" />

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
