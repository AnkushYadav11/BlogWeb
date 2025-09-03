import React, { useState } from 'react';

function Admin() {
  const [topics, setTopics] = useState([
  ]);
  const [newHeading, setNewHeading] = useState('');
  const [newContent, setNewContent] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [editHeading, setEditHeading] = useState('');
  const [editContent, setEditContent] = useState('');

  // Add a new topic
  const addTopic = () => {
    if (newHeading.trim() === '' || newContent.trim() === '') return;
    setTopics([
      ...topics,
      { id: Date.now(), heading: newHeading, content: newContent }
    ]);
    setNewHeading('');
    setNewContent('');
  };

  // Delete a topic by id
  const deleteTopic = (id) => {
    setTopics(topics.filter(topic => topic.id !== id));
  };

  // Start editing a topic
  const startEdit = (topic) => {
    setEditingId(topic.id);
    setEditHeading(topic.heading);
    setEditContent(topic.content);
  };

  // Save the edited topic
  const saveEdit = () => {
    setTopics(topics.map(topic => (
      topic.id === editingId 
        ? { ...topic, heading: editHeading, content: editContent }
        : topic
    )));
    setEditingId(null);
    setEditHeading('');
    setEditContent('');
  };

  // Cancel editing
  const cancelEdit = () => {
    setEditingId(null);
    setEditHeading('');
    setEditContent('');
  };

  return (
    <div style={{ padding: '2em', fontFamily: 'Arial, sans-serif' }}>
      <h1>Admin Page</h1>

      {/* Add new topic */}
      <div>
        <h2>Add New Topic</h2>
        <input
          type="text"
          placeholder="Heading"
          value={newHeading}
          onChange={e => setNewHeading(e.target.value)}
          style={{ marginRight: '1em' }}
        />
        <input
          type="text"
          placeholder="Content"
          value={newContent}
          onChange={e => setNewContent(e.target.value)}
          style={{ marginRight: '1em' }}
        />
        <button onClick={addTopic}>Add Topic</button>
      </div>

      {/* List of topics */}
      <div style={{ marginTop: '2em' }}>
        <h2>Existing Topics</h2>
        {topics.length === 0 && <p>No topics available.</p>}
        {topics.map(topic => (
          <div key={topic.id} style={{ marginBottom: '1em' }}>
            {editingId === topic.id ? (
              <>
                <input
                  type="text"
                  value={editHeading}
                  onChange={e => setEditHeading(e.target.value)}
                  style={{ marginRight: '1em' }}
                />
                <input
                  type="text"
                  value={editContent}
                  onChange={e => setEditContent(e.target.value)}
                  style={{ marginRight: '1em' }}
                />
                <button onClick={saveEdit} style={{ marginRight: '0.5em' }}>Save</button>
                <button onClick={cancelEdit}>Cancel</button>
              </>
            ) : (
              <>
                <strong>{topic.heading}</strong>: {topic.content}
                <button onClick={() => startEdit(topic)} style={{ marginLeft: '1em' }}>Edit</button>
                <button onClick={() => deleteTopic(topic.id)} style={{ marginLeft: '0.5em' }}>Delete</button>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Admin;
