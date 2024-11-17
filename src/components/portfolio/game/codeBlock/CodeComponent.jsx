import {  CopyBlock, dracula  } from 'react-code-blocks';
import PropTypes from "prop-types";

function CodeComponent(props) {
    return (
        <CopyBlock
            text={props.code}
            language={props.language}
            showLineNumbers={props.showLineNumbers}
            theme={dracula}
            wrapLines
        />
    );
}

CodeComponent.propTypes = {
    code: PropTypes.string.isRequired,
    language: PropTypes.string.isRequired,
    showLineNumbers: PropTypes.bool.isRequired,
};

export default CodeComponent;