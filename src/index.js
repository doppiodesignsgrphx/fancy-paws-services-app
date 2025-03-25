import React from 'react';
import ReactDOM from 'react-dom/client'; // Note the '/client'
import Services from './Services';

function App() {
  return <Services />;
}

// Mount the App component using the element with id 'root'
const container = document.getElementById('root');
if (container) {
  const root = ReactDOM.createRoot(container);
  root.render(<App />);
}

export default App;
