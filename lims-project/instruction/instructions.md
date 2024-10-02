# Product Requirement Document (PRD)

## Introduction
We are developing a **Laboratory Information Management System (LIMS)** using **Next.js 14**, **ShadCN**, **Tailwind CSS**, and **Lucid Icons**. The system will manage patient data from registration to report generation, including automated WhatsApp report delivery.

---

## Test Booking Module
The system simplifies front-desk operations from registration to sample collection. It offers configurable forms, automated communication, and online payment integration for B2B partners and patients.

### Features:
1. **Configurable Patient Registration Form**:
   - **Fields**:
     - Title (Dropdown)
     - First Name (Text Input)
     - Last Name (Text Input)
     - Gender (Dropdown)
     - Age (Date Picker)
     - Phone Number (Text Input)
     - Email Address (Text Input)
     - Doctor Name (Dropdown with Fetch from Predefined List)
     - Option to add a doctor manually if not listed

2. **Lab Test Booking Section**:
   - This will be available as another tab after patient registration.
   - **Fields**:
     - Referring Doctor (Dropdown)
     - Referral Price List (Dropdown, Optional)
     - Company Price List (Dropdown, Optional)
     - Test Name (Text Input with Dropdown suggestions)
     - Test Quantity (Number Input)
     - Test Price (Auto-calculated)
     - Concession (Dropdown, Numeric Input)
     - Additional Price (if any) (Numeric Input)
     - Total Amount (Auto-calculated)
     - Credit (Numeric Input)
     - Balance Remaining (Auto-calculated)
     - Patient Due (Auto-calculated)

---

## Lab Test Module
- **Configurable Test Price List**:
  - Two-column table layout displaying the **test name** and **price**.
  - The lab admin can view and edit test prices directly from this interface.

---

## File Structure for the Project

Below is the minimalistic and well-organized file structure to ensure scalability and maintainability of the project.

```bash
.
├── README.md
├── next-env.d.ts
├── next.config.mjs
├── package-lock.json
├── package.json
├── postcss.config.mjs
├── tailwind.config.ts
├── tsconfig.json
├── public
│   ├── favicon.ico
│   └── assets
│       └── pdfs
├── src
│   ├── app
│   │   ├── favicon.ico
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── patient
│   │   │   ├── test-booking.tsx
│   │   │   └── lab-tests.tsx
│   │   └── components
│   │       ├── FormFields.tsx
│   │       ├── Summary.tsx
│   │       └── Layout.tsx
│   ├── lib
│   │   ├── api.ts
│   │   └── utils.ts
│   ├── hooks
│   │   └── use-toast.ts
│   ├── services
│   │   ├── patientService.ts
│   │   └── labTestService.ts
│   └── styles
│       └── tailwind.css
