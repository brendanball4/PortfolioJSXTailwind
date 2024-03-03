import React from 'react';

const App = () => {
  const discordUsername = 'YourUsername#1234'; // Replace with your actual Discord username and tag

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(
      () => {
        alert('Discord username copied to clipboard!');
        // Or use a more subtle notification like a tooltip or a small popup
      },
      (err) => {
        console.error('Failed to copy: ', err);
      }
    );
  };

  return (
    <div>
      <button
        onClick={() => copyToClipboard(discordUsername)}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition duration-300"
      >
        Copy Discord Username
      </button>
    </div>
  );
};

export default App;
