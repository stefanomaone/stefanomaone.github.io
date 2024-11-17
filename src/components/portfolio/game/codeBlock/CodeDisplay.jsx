// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import MyCodeComponent from './CodeComponent.jsx';
import PropTypes from "prop-types";

function CodeFileDisplay({ filePath, language, showLineNumbers }) {
    const [codeContent, setCodeContent] = useState('');

    useEffect(() => {
        if (filePath) {
            fetch(filePath)
                .then((response) => response.text())
                .then((data) => setCodeContent(data))
                .catch((error) => console.error('Error fetching the file:', error));
        }
    }, [filePath]); // re-fetch if the filePath changes

    return (
        <MyCodeComponent
            code={codeContent}
            language={language}
            showLineNumbers={showLineNumbers}
        />
    );
}

CodeFileDisplay.propTypes = {
    filePath: PropTypes.string.isRequired,
    language: PropTypes.string.isRequired,
    showLineNumbers: PropTypes.bool.isRequired,
};

export default CodeFileDisplay;
