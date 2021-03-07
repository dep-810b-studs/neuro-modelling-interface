import React from 'react';
import './Patterns.css';
import info from "./../const_data/info.json";

const patterns = info.patterns;

export const Patterns: React.FunctionComponent = () => (
    <ul className="patterns">
        {patterns
            .map(pattern => (
                <li>
                    {pattern}
                </li>
            ))}
    </ul>
);

export default Patterns;