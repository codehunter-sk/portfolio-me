import React, {useEffect, useState} from "react";

const fonts = ['Arial', 'Verdana', 'Courier New', 'Georgia', 'Times New Roman', 'Comic Sans MS', 'Impact'];

function Name() {
    const [fontIndexes, setFontIndexes] = useState(Array(6).fill(0));

    useEffect(() => {
        const interval = setInterval(() => {
            setFontIndexes(prevIndexes => 
                prevIndexes.map(() => Math.floor(Math.random() * fonts.length))
            );
        }, 250);
        return () => clearInterval(interval);
    }, []);

    const name = 'SURIYA'.split('');

    return (
        <div class='name'>
            {name.map((letter, ind) => (
                <span key={ind} class='letter' style={{fontFamily: fonts[fontIndexes[ind]]}}>
                    {letter}
                </span>
            ))}
        </div>
    );
}

export default Name;