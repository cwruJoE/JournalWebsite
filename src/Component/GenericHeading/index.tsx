import React from 'react';

interface GenericComponentProps {
    text: String;
}

function App(props: GenericComponentProps) {
  return (
    <div>
        <h1 className="text-4xl font-marcellus mb-2">{props.text}</h1>
        <hr className="border-black"/>
    </div>
  );
}

export default App;
