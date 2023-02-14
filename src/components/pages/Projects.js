import React from 'react'
import '../../App.css';
import {Link} from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
function Projects() {
  return (
    <>
      <h1>PROJECTS</h1>
      <br />
      <ol>
        <li>
          اتصال بارکدخوان به نرم افزار در بخش انبار
          <HashLink smooth to='/R&D/#section-two'>بارکدخوان</HashLink>
         </li>
      </ol>
    </>
  )
}

export default Projects
