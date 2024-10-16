import React from 'react';
import CurrentIssueComponent from '../../Component/CurrentIssueComponent ';
import Layout from "./PageLayout";
import GraphImg from "../../assets/images/GraphImg.png";
import KeywordButtonList from "./PageLayout/Componets/KeywordButtonList";
import Header from "./PageLayout/Componets/Header";

const GraphPage = () => {
    return (
        <Layout>
            {/* Main Content Section */}
            <Layout.MainSection>
                <div className="mx-auto mt-10">
                    <Header>
                        <h1 className="text-7xl font-marcellus mb-2">Economic Indexes</h1>
                    </Header>

                    <Header>
                        <h2 className="text-5xl font-marcellus mb-4 text-start">
                            Index Title #1
                        </h2>
                        <KeywordButtonList indexes={['index #1', 'index #2', 'index #3', 'index #4', 'index #5']}/>
                    </Header>
                    {/* Chart Image */}
                    <div className="flex justify-center w-full mb-8">
                        <img
                            src={GraphImg}
                            alt="GDP Trends Chart"
                            className="w-full md:w-2/3 h-auto border-2 border-gray-400"
                        />
                    </div>
                    {/* Recent Article Title */}
                    <Header>
                        <h3 className="text-2xl font-marcellus mb-4">
                            Title of Most Recent Article about Index Formulation
                        </h3>
                        <KeywordButtonList indexes={['keyword #1', 'keyword #2', 'keyword #3']}/>
                    </Header>
                </div>
            </Layout.MainSection>
            {/* Side Section for Current Issue */}
            <Layout.SideSection>
                <div className="mx-auto mt-8">
                    <CurrentIssueComponent />
                </div>
            </Layout.SideSection>
        </Layout>
    );
};

export default GraphPage;