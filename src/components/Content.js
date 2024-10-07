import React from 'react';

// Defining the Content component to display some content including the current time
const Content = () => {
  return (
    <div className="text-center text-primary">
      {/* Displaying a simple "Hello World!" message */}
      <h1>Hello World!</h1>
      {/* Displaying the current time, updated each time the component refreshes */}
      <h2>It is {new Date().toLocaleTimeString()}</h2>
    </div>
  );
}

export default Content; // Exporting the Content component for use in other components
