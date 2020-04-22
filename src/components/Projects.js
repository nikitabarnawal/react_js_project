import React from 'react';
import PROJECTS from '../data/projects';

const ProjectCom = props => {

  const { title,image,description,link } = props.data;

  return(
    <div style={{ display: 'inline-block', width:300, margin:10}}>
      <h3>{title}</h3>
      <img src={image} alt='profile' style={{ width: 200, height:120 }}/>
      <p>{description}</p>
      <a href={link}>{link}</a>
    </div>
  )
}

const Projects = () => (
  <div>
    <h2>Highlighted Projects</h2>
    <div>
      {
        PROJECTS.map(x => (
          <ProjectCom key={x.id} data={x} />
        ))
      }
    </div>
  </div>
)



export default Projects;
