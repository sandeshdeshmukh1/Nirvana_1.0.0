"use client";

import React, { useState, ChangeEvent } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

type TestBookingFormData = {
  referringDoctor: string;
  referralPriceList: string;
  companyPriceList: string;
  testName: string;
  testQuantity: number;
  testPrice: number;
  concession: number;
  additionalPrice: number;
  totalAmount: number;
  credit: number;
  balanceRemaining: number;
  patientDue: number;
};

// Dummy data for doctors and price lists
const dummyDoctors = ["Dr. John Smith", "Dr. Sarah Johnson", "Dr. Michael Lee"];
const dummyPriceLists = ["Standard", "Premium", "Corporate"];
const dummyTests = ["Blood Test", "Urine Test", "X-Ray", "MRI", "CT Scan"];

const TestBookingForm: React.FC = () => {
  const [formData, setFormData] = useState<TestBookingFormData>({
    referringDoctor: '',
    referralPriceList: '',
    companyPriceList: '',
    testName: '',
    testQuantity: 1,
    testPrice: 0,
    concession: 0,
    additionalPrice: 0,
    totalAmount: 0,
    credit: 0,
    balanceRemaining: 0,
    patientDue: 0,
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => {
      const updatedData = { ...prev, [name]: value };
      return calculateTotals(updatedData);
    });
  };

  const handleSelectChange = (name: string) => (value: string) => {
    setFormData(prev => {
      const updatedData = { ...prev, [name]: value };
      return calculateTotals(updatedData);
    });
  };

  const calculateTotals = (data: TestBookingFormData): TestBookingFormData => {
    const totalAmount = (data.testPrice * data.testQuantity) + data.additionalPrice - data.concession;
    const balanceRemaining = totalAmount - data.credit;
    const patientDue = Math.max(balanceRemaining, 0);

    return {
      ...data,
      totalAmount,
      balanceRemaining,
      patientDue,
    };
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
    // TODO: Handle form submission
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Select onValueChange={handleSelectChange("referringDoctor")} value={formData.referringDoctor}>
        <SelectTrigger>
          <SelectValue placeholder="Select Referring Doctor" />
        </SelectTrigger>
        <SelectContent>
          {dummyDoctors.map(doctor => (
            <SelectItem key={doctor} value={doctor}>{doctor}</SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Select onValueChange={handleSelectChange("referralPriceList")} value={formData.referralPriceList}>
        <SelectTrigger>
          <SelectValue placeholder="Select Referral Price List" />
        </SelectTrigger>
        <SelectContent>
          {dummyPriceLists.map(list => (
            <SelectItem key={list} value={list}>{list}</SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Select onValueChange={handleSelectChange("companyPriceList")} value={formData.companyPriceList}>
        <SelectTrigger>
          <SelectValue placeholder="Select Company Price List" />
        </SelectTrigger>
        <SelectContent>
          {dummyPriceLists.map(list => (
            <SelectItem key={list} value={list}>{list}</SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Select onValueChange={handleSelectChange("testName")} value={formData.testName}>
        <SelectTrigger>
          <SelectValue placeholder="Select Test Name" />
        </SelectTrigger>
        <SelectContent>
          {dummyTests.map(test => (
            <SelectItem key={test} value={test}>{test}</SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Input
        name="testQuantity"
        value={formData.testQuantity}
        onChange={handleChange}
        placeholder="Test Quantity"
        type="number"
        min="1"
        required
      />

      <Input
        name="testPrice"
        value={formData.testPrice}
        onChange={handleChange}
        placeholder="Test Price"
        type="number"
        min="0"
        step="0.01"
        required
      />

      <Input
        name="concession"
        value={formData.concession}
        onChange={handleChange}
        placeholder="Concession"
        type="number"
        min="0"
        step="0.01"
      />

      <Input
        name="additionalPrice"
        value={formData.additionalPrice}
        onChange={handleChange}
        placeholder="Additional Price"
        type="number"
        min="0"
        step="0.01"
      />

      <Input
        name="credit"
        value={formData.credit}
        onChange={handleChange}
        placeholder="Credit"
        type="number"
        min="0"
        step="0.01"
      />

      <div>
        <p>Total Amount: {formData.totalAmount.toFixed(2)}</p>
        <p>Balance Remaining: {formData.balanceRemaining.toFixed(2)}</p>
        <p>Patient Due: {formData.patientDue.toFixed(2)}</p>
      </div>

      <Button type="submit">Book Test</Button>
    </form>
  );
};

export default TestBookingForm;