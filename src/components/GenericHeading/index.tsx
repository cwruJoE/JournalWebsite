import React from 'react';
import './App.css';

interface GenericComponentProps {
    text: String;
}

function App(props: GenericComponentProps) {
  return (
    <div>
        <h3>props.text</h3>
        <hr />
    </div>
  );
}

export default App;
