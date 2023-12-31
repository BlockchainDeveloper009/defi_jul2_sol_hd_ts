// components/CSVDownloadButton.tsx

import React from 'react';
import Papa from 'papaparse'
import { Button } from '@mantine/core';

interface CSVDownloadButtonProps {
  data: Array<any>;
  filename: string;
}

const CSVDownloadButton: React.FC<CSVDownloadButtonProps> = ({ data, filename }) => {
  const downloadCSV = () => {
    const csv = Papa.unparse(data);
    const blob = new Blob([csv], { type: 'text/csv' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `${filename}.csv`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Button onClick={downloadCSV}>
      Download CSV
    </Button>
  );
};

export default CSVDownloadButton;
