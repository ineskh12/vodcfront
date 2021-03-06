import React, { Component } from 'react';
import "./cars.css";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
class NavBar extends Component {
  constructor(props) {
    super(props);
    // React Ref is created here
    this.navRef = React.createRef();
  }
  /* This func handles the scrolling by incrementing or decrementing
   the scrollLeft property */
  handleNav = (direction) => {
      
    if (direction === 'left') {
      return this.navRef ? (this.navRef.current.scrollLeft -= 200) : null;
    } else {
        return this.navRef ? (this.navRef.current.scrollLeft += 200) : null;
    }

  }
  /*In the render, we access nav-items via its ref attribute and controls
  it with the 'Prev' and 'Next' buttons using the func defined above */
  render() {
    return (
      <div className='menu-container'>
        <div>
          <button onClick={() => this.handleNav('left')}><ArrowBackIosIcon/></button>
        </div>
        <div className='nav-items' ref={this.navRef}>
          <a href='#home'>Home</a>
          <a href='#News'>News</a>
          <a href='#contact'>Contact</a>
          <a href='#About'>About</a>
          <a href='#Support'>Support</a>
          <a href='#Blog'>Blog</a>
          <a href='#Tools'>Tools</a>
          <a href='#Base'>Base</a>
          <a href='#Custom'>Custom</a>
          <a href='#More'>More</a>
          <a href='#Careers'>Careers</a>
          <a href='#Friends'>Friends</a>
          <a href='#Partners'>Partners</a>
          <a href='#People'>People</a>
          <a href='#Work'>Work</a>
        </div>
        <div>
          <button onClick={() => this.handleNav('right')}><ArrowForwardIosIcon/></button>
        </div>
      </div>
    );
  }
}

export default NavBar;