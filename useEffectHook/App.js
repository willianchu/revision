import React, { useState, useEffect } from 'react';

export default function App() {
  const [resourceType, setResourceType] = useState('posts');

  useEffect(() => {
    console.log('resource changed');
  }, [resourceType]);
  

  return (
    <>
      <div>
        <button onClick={() => setResourceType('posts')}>Posts</button>
        <button onClick={() => setResourceType('users')}>Users</button>
        <button onClick={() => setResourceType('comments')}>Comments</button>
      </div>
      <h1>{resourceType}</h1>
    </>
  );
}
