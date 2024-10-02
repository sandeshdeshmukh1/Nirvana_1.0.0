import React from 'react';
import dynamic from 'next/dynamic';

const PatientPage = dynamic(() => import('./patient/page'), { ssr: false });

export default function Home() {
  return (
    <div className="min-h-screen">
      <PatientPage />
    </div>
  );
}
