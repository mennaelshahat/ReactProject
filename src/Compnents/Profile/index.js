import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {ParentSpan,ProfileDiv,ProfileItem,ProfileList,ProfileSection,ProfileSkills,ProfileSpan,ProfileTitle,BarParent,BarSpan,BarTitle,SkillsBar,SkillsDesc,Span} from './Style.js'
const Profile = () => {
  const [ profiles , setProfile ] =useState([])

  useEffect( ()=> {
   axios.get('js/data.json').then(res => {setProfile(res.data.profile)})
  } , [])

  const ProfileDetails =profiles.map((profileItem)=>{
return(
              <SkillsBar  key={profileItem.id}>
                    <BarTitle>{profileItem.title}</BarTitle>
                    <BarSpan>{profileItem.Percntage}</BarSpan>
                    <BarParent>
                        <ParentSpan item={profileItem.id}></ParentSpan>
                    </BarParent>
                </SkillsBar>
)

  });

  return (
    <ProfileSection>
        <div className="container">
            <ProfileDiv>
                <ProfileTitle><Span>My </Span>Profile</ProfileTitle>
                <ProfileList>
                    <ProfileItem>
                        <ProfileSpan>Name</ProfileSpan>
                        Menna Elshahat
                    </ProfileItem>
                    <ProfileItem>
                        <ProfileSpan>Birthday</ProfileSpan>
                        21/1/1996
                    </ProfileItem>
                    <ProfileItem>
                        <ProfileSpan>Address</ProfileSpan>
                        Ain shams
                    </ProfileItem>
                    <ProfileItem>
                        <ProfileSpan>Phone</ProfileSpan>
                        4444 5555 6666
                    </ProfileItem>
                    <ProfileItem>
                        <ProfileSpan>Email</ProfileSpan>
                        Menna@hamza.com
                    </ProfileItem>
                    <ProfileItem>
                        <ProfileSpan>Website</ProfileSpan>
                        <ProfileSpan web> www.google.com</ProfileSpan>
                    </ProfileItem>
                </ProfileList>
            </ProfileDiv>
            
            <ProfileSkills>
                <ProfileTitle>Some <Span>skills</Span></ProfileTitle>
                <SkillsDesc>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos praesentium blanditiis esse cupiditate, omnis similique.
                </SkillsDesc>
                {ProfileDetails}
            </ProfileSkills>
            
        </div>
    </ProfileSection>
  );
}

export default Profile;
