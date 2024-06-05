//import React from 'react';
import '../App.css';

const QuizComponent = () => {
  return (
    <div className="quiz-container">
      <h2>Question</h2>
      <p>Which is the only mammal that can jump?</p>
      
      <div className="button-group">
        <button>Dog</button>
        <button>Goat</button>
        <button>Elephant</button>
        <button>Lion</button>
      </div>
      
      <div className="remaining-buttons">
        <button  style={{ backgroundColor: '#dc3545', color: '#fff' }}>Previous</button>
        <button style={{ backgroundColor: 'green', color: '#fff' }}>Next</button>
        <button style={{ backgroundColor: 'red', color: '#fff' }}>Quit</button>
      </div>
    </div>
  );
};

export default QuizComponent;
