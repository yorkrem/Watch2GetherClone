"use client"
import React, { useState } from 'react';

interface LinkPasteProps {
    youtubelink: (link: string) => void;
}

const LinkPaste: React.FC<LinkPasteProps> = ({ youtubelink }) => {
    const [input, setInput] = useState<string>('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
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
                    onChange={e => setInput(e.target.value)}
                />
                <button className="border-2 border-white" type="submit">Submit</button>
            </form>
        </>
    );
};

export default LinkPaste;
