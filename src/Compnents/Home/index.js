import {React} from 'react';
import './style.js';
import {HomeSection , HomeInformation , HomeTitle , HomeInfo ,HomeDesc,HomeDescSpan ,HomeButton } from './style.js'
const Home = () => {
  return (
    <HomeSection>
        <div class="container">
            <HomeInformation>
                <HomeTitle>Menna Elshahat</HomeTitle>
                <HomeInfo>Creative Director</HomeInfo>
                <HomeDesc>
                    Iam a professional <HomeDescSpan>UX Designer</HomeDescSpan> and Front-End Developer creating modern and resposive designs to Web and Mobile. Let us work together. Thank you. 
                </HomeDesc>
                <HomeButton>Let's Begin</HomeButton>    
        </HomeInformation>
        </div>
    </HomeSection>
  );
}

export default Home;
