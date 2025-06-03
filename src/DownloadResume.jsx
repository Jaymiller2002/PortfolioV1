import React from 'react';
import Resume from './assets/Resume.pdf';

function DownloadResume() {
  return (
    <a href={Resume} download> Download Resume</a>
  );
}

export default DownloadResume;