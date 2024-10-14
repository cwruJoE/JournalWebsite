import React from 'react';
import GenericHeading from "../../components/GenericHeading";
import './App.css';
import PDFViewer from './PDFViewer';

function WorkingPaper() {
  return (
    <div>
        <GenericHeading text="working paper 1" />
        <PDFViewer filePath="/pdf-viewer-test-file"/>
    </div>
  );
}

export default WorkingPaper;
