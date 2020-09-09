import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';

function Navbar({ match }) {
  const appLink = match.path === '/' ? '/innerApp2' : match.path;

  return (
    <>
      <nav>
        <div style={{display: 'flex', flexDirection: 'column'}}>
          <Link to="/">Home</Link>
          <Link to={`${appLink}/innerRoute1`}>inner app 2- inner route 1</Link>
        </div>
        <hr />
      </nav>
    </>
  );
}

export default withRouter(Navbar);
