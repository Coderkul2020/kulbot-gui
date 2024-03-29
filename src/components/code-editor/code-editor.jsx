import React from 'react';
import PropTypes from 'prop-types';

import MonacoEditor from 'react-monaco-editor';

import Box from '../box/box.jsx';

import styles from './code-editor.css';

const CodeEditorComponent = props => {
    const {
        containerRef,
        language,
        value,
        options,
        width,
        height,
        onChange,
        editorDidMount,
        theme,
        ...componentProps
    } = props;
    return (
        <Box
            className={styles.codeEditor}
            componentRef={containerRef}
        >
            <button style={{height: "25px", width: "100px",float: "right", zIndex: "1", position: "relative", top: "5px"}} 
                    onClick={() => {navigator.clipboard.writeText(value)}}>
                    Copy code
            </button>
            <MonacoEditor
                language={language}
                value={value}
                options={options}
                width={width}
                height={height}
                onChange={onChange}
                editorDidMount={editorDidMount}
                theme={theme}
                {...componentProps}
            />
            
            
        </Box>
    );
};

CodeEditorComponent.propTypes = {
    containerRef: PropTypes.func,
    language: PropTypes.string,
    value: PropTypes.string,
    options: PropTypes.shape({
        highlightActiveIndentGuide: PropTypes.bool,
        cursorSmoothCaretAnimation: PropTypes.bool,
        readOnly: PropTypes.bool,
        contextmenu: PropTypes.bool,
        minimap: PropTypes.shape({
            enabled: PropTypes.bool
        })
    }),
    height: PropTypes.number,
    width: PropTypes.number.isRequired,
    onChange: PropTypes.func,
    editorDidMount: PropTypes.func,
    theme: PropTypes.string
};

CodeEditorComponent.defaultProps = {
    language: 'cpp',
    theme: 'vs-light',
    options: {
        highlightActiveIndentGuide: false,
        cursorSmoothCaretAnimation: true,
        readOnly: true,
        contextmenu: false,
        minimap: {
            enabled: false
        }
    }
};

export default CodeEditorComponent;
