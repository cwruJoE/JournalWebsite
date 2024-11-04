import React from 'react';

// Make sure to import the image you uploaded correctly
import JournalImage from '../../assets/images/JournalCoverPage.png'; // Update this path

const CurrentJournalIssue = () => {
    return (
<div className="container mx-auto mt-8">
      {/* Title */}
      <h1 className="text-4xl font-marcellus text-center mb-8">Current Journal Issue</h1>

      {/* Journal Cover */}
      <div className="flex justify-center items-center">
        <div className="w-full md:w-1/2">
          <img
            src={JournalImage}
            alt="CWRU Journal of Economics"
            className="w-full h-auto border-2 border-gray-400"
          />
        </div>
      </div>
    </div>
    )
};

export default CurrentJournalIssue;