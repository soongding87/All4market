import React from 'react';
import landingImg from '../image/guitar.jpg'

const Landing = () => {

  return (
<div className="container center" >

  <h2 className="header center blue-text text-lighten-2 ">Buskers</h2>
  <h5 className="center col s12 light "> For people who loves music and instruments</h5>
  <img className="z-depth-3" src={landingImg} alt="no img" />

</div>
  )
}

export default Landing;
