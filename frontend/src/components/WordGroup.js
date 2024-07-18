import React from 'react';

function WordGroup({ group, onWordClick }) {
    return (
        <div className="bg-white p-4 rounded shadow">
            <h2 className="text-xl mb-2">Group {group.id}</h2>
            <ul>
                {group.words.map((wordItem, i) => (
                    <li
                        key={i}
                        className={`border-b py-1 ${wordItem.status === 'default' ? '' : wordItem.status === 'green' ? 'bg-green-200' : 'bg-red-200'}`}
                        onClick={() => onWordClick(group.id, wordItem.word, wordItem.status)}
                    >
                        {wordItem.word}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default WordGroup;
