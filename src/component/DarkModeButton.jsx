import React, { useState } from 'react';

const DarkModeButton = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const handleDarkModeToggle = () => {
        const root = document.documentElement;
        if (isDarkMode) {
            root.classList.remove('dark');
        } else {
            root.classList.add('dark');
        }
        setIsDarkMode(!isDarkMode);
    };

    return (
        <button
            className={`bg-${isDarkMode ? 'gray' : 'white'} text-${isDarkMode ? 'white' : 'black'} px-4 py-2 rounded-md`}
            onClick={handleDarkModeToggle}
        >
            {isDarkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
    );
};

export default DarkModeButton;
