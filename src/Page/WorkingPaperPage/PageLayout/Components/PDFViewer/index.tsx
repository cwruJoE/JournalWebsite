import React from 'react';

interface PDFViewerProps {
    filePath: string;
}

function PDFViewer(props: PDFViewerProps) {

  return (
    <iframe className="w-full md:block select-none h-screen bg-gray-100 border-2" src={props.filePath} title="PDF Viewer"/>
  );
}

export default PDFViewer;
