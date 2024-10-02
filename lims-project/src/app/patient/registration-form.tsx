"use client";

import React, { useState, ChangeEvent } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

type PatientRegistrationFormData = {
  title: string;
  firstName: string;
  lastName: string;
  gender: string;
  dateOfBirth: string; // Changed from Date to string
  phoneNumber: string;
  emailAddress: string;
  doctorName: string;
};

// Dummy data for doctors
const dummyDoctors = [
  { id: 1, name: "Dr. John Smith" },
  { id: 2, name: "Dr. Sarah Johnson" },
  { id: 3, name: "Dr. Michael Lee" },
  { id: 4, name: "Dr. Emily Brown" },
  { id: 5, name: "Dr. David Wilson" },
];

const PatientRegistrationForm: React.FC = () => {
  const [formData, setFormData] = useState<PatientRegistrationFormData>({
    title: '',
    firstName: '',
    lastName: '',
    gender: '',
    dateOfBirth: '',
    phoneNumber: '',
    emailAddress: '',
    doctorName: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string) => (value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
    // TODO: Handle form submission
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Select onValueChange={handleSelectChange("title")} value={formData.title}>
        <SelectTrigger>
          <SelectValue placeholder="Select Title" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="Mr">Mr</SelectItem>
          <SelectItem value="Mrs">Mrs</SelectItem>
          <SelectItem value="Ms">Ms</SelectItem>
          <SelectItem value="Dr">Dr</SelectItem>
        </SelectContent>
      </Select>

      <Input
        name="firstName"
        value={formData.firstName}
        onChange={handleChange}
        placeholder="First Name"
        required
      />

      <Input
        name="lastName"
        value={formData.lastName}
        onChange={handleChange}
        placeholder="Last Name"
        required
      />

      <Select onValueChange={handleSelectChange("gender")} value={formData.gender}>
        <SelectTrigger>
          <SelectValue placeholder="Select Gender" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="male">Male</SelectItem>
          <SelectItem value="female">Female</SelectItem>
          <SelectItem value="other">Other</SelectItem>
        </SelectContent>
      </Select>

      <Input
        name="dateOfBirth"
        value={formData.dateOfBirth}
        onChange={handleChange}
        placeholder="Date of Birth"
        type="date"
        required
      />

      <Input
        name="phoneNumber"
        value={formData.phoneNumber}
        onChange={handleChange}
        placeholder="Phone Number"
        required
      />

      <Input
        name="emailAddress"
        value={formData.emailAddress}
        onChange={handleChange}
        placeholder="Email Address"
        type="email"
        required
      />

      <Select onValueChange={handleSelectChange("doctorName")} value={formData.doctorName}>
        <SelectTrigger>
          <SelectValue placeholder="Select Doctor" />
        </SelectTrigger>
        <SelectContent>
          {dummyDoctors.map(doctor => (
            <SelectItem key={doctor.id} value={doctor.name}>
              {doctor.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Button type="submit">Register Patient</Button>
    </form>
  );
};

export default PatientRegistrationForm;