import React, { useState, useEffect } from 'react';

export default function App() {
  const [resourceType, setResourceType] = useState('posts');
  const [items, setItems] = useState([]);

  useEffect(() => {
    window.addEventListener('mousemove', e => {
      console.log(e);
    });

    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then(response => response.json())
      .then(json => setItems(json));

    return () => {
      window.removeEventListener('mousemove', e => {
        console.log(e);
      });
    }; // cleanup function
    
  }, [resourceType]);


  return (
    <>
      <div>
        <button onClick={() => setResourceType('posts')}>Posts</button>
        <button onClick={() => setResourceType('users')}>Users</button>
        <button onClick={() => setResourceType('comments')}>Comments</button>
      </div>
      <h1>{resourceType}</h1>
      {items.map(item => {
        return <pre>{JSON.stringify(item)}</pre>;
      }
    </>
  );
}
