import React from 'react';

const ApplicationDetailsPage = ({ location }) => {
  const { applicationData } = location.state;

  return (
    <div className="container">
      <h1>Application Details</h1>
      <p>Application ID: {applicationData.applicationId}</p>
      {/* Display other relevant data received from backend */}
    </div>
  );
};

export default ApplicationDetailsPage;
