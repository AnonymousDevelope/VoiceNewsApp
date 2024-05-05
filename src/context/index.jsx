/* eslint-disable react/prop-types */
// import necessary dependencies
import React, { createContext, useState } from "react";

// create context
export const VoiceNewsContext = createContext();

// create Provider
export const VoiceNewsProvider = ({ children }) => {
    // Your state or any other necessary logic
    const [searchNote, setSearchNote] = useState('Uzbekistan News');
    const [loading,setLoading] = useState(false)
    const [newsList,setNewsList] = useState(null);
    // Your context value
    const contextValue = {
        // Provide any values or functions you want to make available to consumers
        state: searchNote,
        setState: setSearchNote,
        loading,
        setLoading,
        newsList,
        setNewsList
        // add other values/functions as needed
    };

    return (
        <VoiceNewsContext.Provider value={contextValue}>
            {children}
        </VoiceNewsContext.Provider>
    );
};
