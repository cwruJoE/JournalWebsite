import React from 'react';
import GenericHeading from "../../Component/GenericHeading";
import CurrentIssueComponent from "../../Component/CurrentIssueComponent";
import Container from "../../Component/Container";
import PDFViewer from './PDFViewer';



const WorkingPapersPage = () => {
    return (
        <div className="flex flex-row align-top">
            {/* Define row for content and CurrentIssueComponent */}
            <div className="w-3/4">
                <Container>
                    <GenericHeading text="working paper 1" />
                    <div className="h-full my-5">
                        <a className="text-lg" href="/pdf-viewer-test-file.pdf">Click here to open the document in a new tab</a>
                        <PDFViewer filePath="/pdf-viewer-test-file.pdf" />

                    </div>
                </Container>
            </div>
            <div className="w-1/4 mr-5">
                <CurrentIssueComponent />

            </div>
        </div>
    );
};

export default WorkingPapersPage;