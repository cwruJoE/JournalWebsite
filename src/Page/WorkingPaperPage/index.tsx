import React from 'react';
import PDFViewer from './PageLayout/Components/PDFViewer';
import CurrentIssueComponent from '../../Component/CurrentIssueComponent'
import Link from '../../Component/Link';
import Layout from './PageLayout';
import Header from '../../Component/Header';



const WorkingPaperPage = () => {
    return (
        <Layout>
            {/* Main Content Section */}
            <Layout.MainSection>
                <div className="container mt-10">
                    <Header>
                        <h1 className="text-5xl font-marcellus mb-2">Working paper 1</h1>
                    </Header>
                    <div className="h-full">
                        <Link url="/pdf-viewer-test-file.pdf" label="Click here to open the document in a new tab" newTab={true} />
                        <PDFViewer filePath="/pdf-viewer-test-file.pdf" />

                    </div>
                </div>

            </Layout.MainSection>
            {/* Side Section for Current Issue */}
            <Layout.SideSection>
                <div className="mx-auto mt-8">
                    <CurrentIssueComponent/>
                </div>
            </Layout.SideSection>
        </Layout>
    );
};


export default WorkingPaperPage;