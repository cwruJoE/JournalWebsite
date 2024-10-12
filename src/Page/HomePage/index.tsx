import React from 'react';
import CurrentIssueComponent from "../../Component/CurrentIssueComponent ";

const HomePage = () => {
    return (
        <div>
            <h1>Welcome to CWRU Journal of Economics</h1>
            <CurrentIssueComponent/>
            <p>This is the homepage.</p>
        </div>
    );
};

export default HomePage;