import React from 'react';

interface PDFViewerProps {
    filePath: string;
}

function PDFViewer(props: PDFViewerProps) {
  return (
    <iframe className="w-full md:h-300 hidden md:block select-none bg-gray-100 overflow-auto border-2" src={props.filePath} title=""/>
  );
}

export default PDFViewer;
