import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './index.css';


// useEffect

// function Example() {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//       const interval = setTimeout(() => { 
//           setCount(count => count + 1); 
//       }, 2000);

//       return () => clearTimeout(interval); // Cleanup
//   }, [count]);

//   return (
//       <div className="counter">
//           <h1>Website counting detail {count} times</h1>
//       </div>
//   )
// }

function Demo() {
  const [users, setUser] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
      fetch('https://api.github.com/users')
          .then(response => response.json())
          .then(data => {
              setUser(data);
              setLoading(false);
          })
          .catch(error => {
              console.error("Error loading data");
              setLoading(false);
          });
  }, []);

  if (loading) {
      return <p className="loading">Loading...</p>;
  }

  return (
      <div className="container">
          <h1>List of GitHub Users</h1>
          <ul className="user-list">
              {users.map(user => (<li key={user.id}>{user.login}</li>))}
          </ul>
      </div>
  )
}

function Final() {
  return (
      <div>
          {/* <Example /> */}
          <Demo />
      </div>
  )
}

ReactDOM.render(<Final />, document.getElementById('root'));
