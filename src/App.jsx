import React from 'react'
import "./index.css"
import { Link } from 'react-router-dom';
import { IconContext } from 'react-icons'
import { FaGithub } from 'react-icons/fa';
import { AiOutlineBell } from 'react-icons/ai';
// import { FaPlus } from 'react-icons/fa';
import { CgProfile } from 'react-icons/cg';
import {BiSearch} from 'react-icons/bi';
import {GoPlusSmall} from 'react-icons/go';



const App = () => {
  return (
    <IconContext.Provider value={{ size: "1.5em" }}>

      <div className="container">
        <div className="left_navbar">
          <Link to='/GitHub'>
            <div className="react_icons">
              <FaGithub size={"2em"}  />

            </div>
          </Link>


          <div className="box">
            <input type="checkbox" id="check"/>
              <div className="search-box">
                <input type="text" placeholder="Type here..."/>
                  <label for="check" className="icon">
                   <BiSearch/>
                  </label>
              </div>
          </div>
          <div className="btn">
            <Link to='/PullRequest'>
              <div className='btn_inner'>
                Pull Requests
              </div>
            </Link>
            <Link to='/Issues'>
              <div className='btn_inner'>
                Issues
              </div>
            </Link>
            <Link to='/Marketplace'>
              <div className='btn_inner'>
                Marketplace
              </div>
            </Link>
            <Link to='/Explore'>
              <div className='btn_inner'>
                Explore
              </div>
            </Link>

          </div>

        </div>

        <div className="right_navbar">
          <Link to='/Bell'>
            <div className="react_icons">
              <AiOutlineBell />
            </div>
          </Link>
          <Link to='/Plus'>
            <div className="react_icons">
              <GoPlusSmall />
            </div>
          </Link>
          <Link to='Profil'>
            <div className="react_icons">
              <CgProfile />
            </div>
          </Link>


        </div>

      </div>
    </IconContext.Provider>



  )
}

export default App