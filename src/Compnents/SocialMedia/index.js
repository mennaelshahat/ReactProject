import React ,{useState ,useEffect}from 'react';
import { SocialMediaSection, Social, SocialIcon, SocialPrag, SocialSpan, SpanInfo } from './Style.js';
import axios from 'axios';
const SocialMedia = () => {
  const [socialmedia , setSocialMedia] = useState([]);
  useEffect (()=>{
    axios.get('js/data.json').then(res => {setSocialMedia(res.data.social)});
  } ,[])
  const SocialMediaList = socialmedia.map((socialItem)=>{
    return(
      <Social item={socialItem.id} key={socialItem.id}>
      <SocialIcon className={socialItem.icon}></SocialIcon>
      <SocialPrag>
        <SocialSpan>{socialItem.title}</SocialSpan>
        <SpanInfo>{socialItem.body}</SpanInfo>
      </SocialPrag>
    </Social>

    )
  })
  return (
    <SocialMediaSection>
    
    {SocialMediaList}
    </SocialMediaSection>
  );
}

export default SocialMedia;
