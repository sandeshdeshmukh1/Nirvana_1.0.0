"use client";

import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

type TestPrice = {
  id: number;
  testName: string;
  price: number;
};

const dummyTestPrices: TestPrice[] = [
  { id: 1, testName: "Complete Blood Count", price: 50 },
  { id: 2, testName: "Lipid Profile", price: 75 },
  { id: 3, testName: "Thyroid Function Test", price: 100 },
  { id: 4, testName: "Liver Function Test", price: 80 },
  { id: 5, testName: "Kidney Function Test", price: 90 },
];

const LabModule: React.FC = () => {
  const [testPrices, setTestPrices] = useState<TestPrice[]>(dummyTestPrices);

  const handlePriceChange = (id: number, newPrice: string) => {
    setTestPrices(prevPrices =>
      prevPrices.map(test =>
        test.id === id ? { ...test, price: parseFloat(newPrice) || 0 } : test
      )
    );
  };

  const handleSave = () => {
    console.log("Saving updated test prices:", testPrices);
    // TODO: Implement actual save functionality
  };

  return (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold">Configurable Test Price List</h3>
      <div className="grid grid-cols-3 gap-4 font-semibold">
        <div>Test Name</div>
        <div>Price ($)</div>
        <div></div>
      </div>
      {testPrices.map(test => (
        <div key={test.id} className="grid grid-cols-3 gap-4 items-center">
          <div>{test.testName}</div>
          <Input
            type="number"
            value={test.price}
            onChange={(e) => handlePriceChange(test.id, e.target.value)}
            className="w-full"
          />
          <div></div>
        </div>
      ))}
      <Button onClick={handleSave} className="mt-4">Save Changes</Button>
    </div>
  );
};

export default LabModule;