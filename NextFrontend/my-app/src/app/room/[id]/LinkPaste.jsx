import React, { useState } from 'react';

const LinkPaste = ({ youtubelink }) => {
    const [input, setInput] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        youtubelink(input);
        setInput('');
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="youtubelink">Youtube Link:</label>
                <input className="text-black border-2 border-black"
                    type="text"
                    id="youtubelink"
                    name="youtubeurl"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <button className="border-2 border-white" type="submit">Submit</button>
            </form>
        </>
    );
};

export default LinkPaste;

