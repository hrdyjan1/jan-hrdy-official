import React from 'react';
import { Document, Page } from 'react-pdf';

const cv = () => {
  return (
    <div style={{display: 'flex', justifyContent: 'center'}}>
      <Document
        file={{
          url: '/pdfs/CV.pdf',
        }}
        onLoadError={(e) => console.log('Error while loading document! ' + e.message)}
        onSourceError={(e) => console.log('Error while loading document! ' + e.message)}
      >
        <Page size='A4' pageNumber={1} style='pdfStyle' />
        <br/>
        <Page size='A4' pageNumber={2} style='pdfStyle' />
      </Document>
    </div>
  );
};

export default cv;
