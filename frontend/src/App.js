import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import WordGroup from './components/WordGroup';
import './App.css';

function App() {
    const [wordGroups, setWordGroups] = useState([]);

    useEffect(() => {
        fetch('/api/word-groups')
            .then(response => response.json())
            .then(data => setWordGroups(data));
    }, []);

    const handleWordClick = (groupId, word, currentStatus) => {
        const newStatus = currentStatus === 'default' ? 'green' : currentStatus === 'green' ? 'red' : 'default';
        fetch('/api/update-word', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ groupId, word, status: newStatus })
        });
        setWordGroups(prevGroups => 
            prevGroups.map(group => 
                group.id === groupId 
                    ? { ...group, words: group.words.map(w => w.word === word ? { ...w, status: newStatus } : w) } 
                    : group
            )
        );
    };

    return (
        <div className="App">
            <Header />
            <div className="container mx-auto p-4">
                <div className="grid grid-cols-6 gap-4 mt-4">
                    {wordGroups.map((group, index) => (
                        <WordGroup key={index} group={group} onWordClick={handleWordClick} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default App;
