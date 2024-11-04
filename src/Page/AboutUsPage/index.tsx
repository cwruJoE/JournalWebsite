import React from 'react';
import CurrentIssueComponent from '../../Component/CurrentIssueComponent'
import Layout from './PageLayout';
import Header from '../../Component/Header';
import Section from './PageLayout/Components/Section';



const AboutUsPage = () => {
    return (
        <Layout>
            {/* Main Content Section */}
            <Layout.MainSection>
                <div className="container mt-10">
                    <Header>
                        <h1 className="text-5xl font-marcellus mb-2">About Us</h1>
                    </Header>

                </div>
                <Section label="Who We Are:" body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque quis nisi ex. Duis accumsan tincidunt erat, a mollis nisi viverra a. Suspendisse quis nulla dapibus, elementum enim sit amet, pretium justo. Quisque nibh dui, viverra eget elit ac, malesuada blandit ligula. Fusce turpis elit, facilisis sed felis quis, interdum tempus orci. Pellentesque eros risus, feugiat a blandit in, suscipit in libero. Etiam vel molestie dui. "/>

                <Section label="What We Do:" body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque quis nisi ex. Duis accumsan tincidunt erat, a mollis nisi viverra a. Suspendisse quis nulla dapibus, elementum enim sit amet, pretium justo. Quisque nibh dui, viverra eget elit ac, malesuada blandit ligula. Fusce turpis elit, facilisis sed felis quis, interdum tempus orci. Pellentesque eros risus, feugiat a blandit in, suscipit in libero. Etiam vel molestie dui. "/>

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


export default AboutUsPage;