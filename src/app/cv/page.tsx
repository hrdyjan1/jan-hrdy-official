// Add this at the top of your file to mark it as a client component
'use client';

import { useWindowWidth } from '@/hooks/useWindowWidth';
import React from 'react';

import { pdfjs, Document, Page } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url
).toString();

const file: React.ComponentProps<typeof Document>['file'] = { url: './cv.pdf' };

function CV() {
  const width = useWindowWidth();

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Document
        file={file}
        onLoadError={(e) => console.log('Error while loading document! ' + e.message)}
        onSourceError={(e) => console.log('Error while loading document! ' + e.message)}
      >
        <Page pageNumber={1} width={Math.min(width, 1200)} />
        <Page pageNumber={2} width={Math.min(width, 1200)} />
        <br />
      </Document>
    </div>
  );
}

export default CV;
