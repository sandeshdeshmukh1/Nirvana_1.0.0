'use client';

import React, { useState } from 'react';
import PatientRegistrationForm from './registration-form';
import TestBookingForm from './test-booking';
import LabModule from './lab-module';

export default function PatientPage() {
  const [activeTab, setActiveTab] = useState('registration');

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-blue-600 text-white p-4 shadow-md">
        <div className="container mx-auto flex items-center">
          <div className="flex items-center">
            {/* Dummy LIMS logo */}
            <div className="w-10 h-10 bg-white rounded-full mr-3 flex items-center justify-center">
              <span className="text-blue-600 font-bold text-lg">LIMS</span>
            </div>
            <h1 className="text-2xl font-bold">Laboratory Information Management System</h1>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-grow container mx-auto p-4 mt-8">
        <h2 className="text-2xl font-bold mb-6">Patient Management</h2>
        <div className="mb-6">
          <button
            className={`mr-2 px-4 py-2 rounded ${activeTab === 'registration' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
            onClick={() => setActiveTab('registration')}
          >
            Registration
          </button>
          <button
            className={`mr-2 px-4 py-2 rounded ${activeTab === 'testBooking' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
            onClick={() => setActiveTab('testBooking')}
          >
            Test Booking
          </button>
          <button
            className={`px-4 py-2 rounded ${activeTab === 'labModule' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
            onClick={() => setActiveTab('labModule')}
          >
            Lab Module
          </button>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6">
          {activeTab === 'registration' && <PatientRegistrationForm />}
          {activeTab === 'testBooking' && <TestBookingForm />}
          {activeTab === 'labModule' && <LabModule />}
        </div>
      </main>
    </div>
  );
}