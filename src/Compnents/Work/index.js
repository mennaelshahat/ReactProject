import React, { Component } from 'react';
import axios from 'axios';
import {WorkSection , WorkIcon ,WorkSpan ,WorkTitle,Part,PartDesc,PartTitle,Line} from './Style.js';
class Work extends Component{
  //state
  state = {
    works:[]
  } 
//ComponentDidMountFunction
  componentDidMount (){
   axios.get('js/data.json').then( res => {this.setState({works: res.data.works})})
  }

  render()
  {
    const {works} = this.state;
    const worksList = works.map( (workItem)   => {
      return (
        <Part first={workItem.id} key={workItem.id}>
        <WorkIcon className={workItem.icon_name}></WorkIcon>
         <PartTitle>{workItem.title}</PartTitle>
         <Line />
         <PartDesc>
          {workItem.body}
         </PartDesc>
     </Part>

      )

    });
    return (
      <WorkSection>
          <div className="container">
              <WorkTitle><WorkSpan>My</WorkSpan> Work</WorkTitle>
              {worksList}
              
             
          </div>
      </WorkSection>
    );
  }

}

export default Work;
