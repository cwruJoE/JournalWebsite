import React from 'react';

// Make sure to import the image you uploaded correctly
import JournalImage from '../../assets/images/JournalCoverPage.png'; // Update this path

const CurrentJournalIssue = () => {
    return (
        <div className="mx-auto mt-8">
            {/* Title */}
            <h1 className="text-4xl font-marcellus mb-8 border-b text-start border-black">Current Journal Issue</h1>

            {/* Journal Cover */}
            <div className="w-full">
                <img
                    src={JournalImage}
                    alt="CWRU Journal of Economics"
                    className="w-full h-auto border-2 border-gray-400"
                />
            </div>
        </div>
    )
};

export default CurrentJournalIssue;