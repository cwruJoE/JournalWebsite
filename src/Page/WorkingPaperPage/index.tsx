import React from 'react';
import GenericHeading from "../../Component/GenericHeading";
import CurrentIssueComponent from "../../Component/CurrentIssueComponent ";
import PDFViewer from "./PDFViewer";



const WorkingPapersPage = () => {
    return (
        <div>
            <GenericHeading text="working paper 1" />
            <CurrentIssueComponent/>
            <a href="/pdf-viewer-test-file">Click here to open the document in a new tab</a>
            <PDFViewer filePath="/pdf-viewer-test-file"/>
        </div>
      );
};

export default WorkingPapersPage;