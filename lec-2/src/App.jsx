import React, { useState } from 'react';

// Main App Component
export const App = () => {
  return (
    <div>
      <Counter />
      <div>
        <img src="img1.png" alt="Image 1" />
      </div>
      <h1>halo my name is haroon nadir</h1>
      
      {/* Render the Greeting and Counter components here */}
      <Greeting />
      <Counter />
      <Counter />
      <Counter />
      <Counter />
    </div>
  );
};

// Greeting Component
function Greeting() {
  return <h1>Hello, welcome to React!</h1>;
}

// Counter Component
function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

export default App;
