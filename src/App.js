import React, { useState } from 'react';
import './App.css';

const divStyle = {
  fontSize: '2.5rem',
  fontStyle: 'italic',
  fontWeight: 'bold',
  paddingBottom: '10px'
};

function App() {
  const [isHover, setIsHover] = useState(false);

  const styles = {
    backgroundColor: !isHover ? '#dca160' : '#eac69f',
    color: !isHover ? '#28345e' : 'rgb(-64, 12, 54)',
    cursor: 'pointer'
  };
  const imgStyle = {
    cursor: 'pointer'
  };
  function toggleHover() {
    setIsHover(!isHover);
  }
  return (
    <div className='App'>
      <header className='App-header'>
        <p style={divStyle}> Journey To Handstand - Oren Magen </p>
        <img
          style={imgStyle}
          src='../profilePic.png'
          alt='logo'
          onClick={e => {
            e.preventDefault();
            window.location.href =
              'https://www.udemy.com/course/journey-to-handstand/';
          }}
        />
        <p>Now On Udemy! </p>
        <button
          className='App-link'
          style={styles}
          onMouseOver={toggleHover}
          onMouseOut={toggleHover}
          onClick={e => {
            e.preventDefault();
            window.location.href =
              'https://www.udemy.com/course/journey-to-handstand/';
          }}
        >
          Take me to the course
        </button>
      </header>
    </div>
  );
}

export default App;
