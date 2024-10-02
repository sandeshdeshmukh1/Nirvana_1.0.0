# Product Requirement Document (PRD)

## Introduction
We are developing a Laboratory Information Management System (LIMS) to manage patient data from registration to report generation. The system will handle everything from patient identification to final report sharing, with automated WhatsApp report delivery.

## Test Booking Module
The system simplifies front-desk operations from registration to sample collection. It offers customizable forms, automated communication, and online payment integration for a smoother experience for B2B partners and patients.

### Features:
- Configurable forms for patients & lab tests
    Creat patient registraion form with following fields
    Title (Dropdown)
    First Name
    Last Name
    Gender (Dropdown)
    Age (in years) (Date Picker)
    Phone Number
    Email Address
    Doctor name (fetch through predefind list) next to that add doctor option 

    for booking lab test there should be other tab section after patient registration

    
        Here are the fields shown in the test booking interface:

        Referring Doctor (Dropdown)
        Referral Price List (Dropdown, optional)
        Company Price List (Dropdown, optional)
        Test Name (Text Input with Dropdown suggestion)
        Test Quantity (Number Input)
        Test Price (Numeric Display)
        Concession (Dropdown, Numeric Input)
        Additional Price (if any) (Numeric Input)
        Total Amount (Display)
        Credit (Numeric Input)
        Balance Remaining (Display)
        Patient Due (Display)

- Automated communication WhatsApp
    Send report to patient through whatsapp option s

## Lab Test Module 
- Multiple configurable rate lists for test pricing
- it's should be two columns  test name and price 
- lab admin can edit that test price 


## Report Module
Maximize test report entry efficiency with a user-friendly interface. The system collects necessary patient information and ensures accurate report generation, review, and customization.

### Features:
- Multiple test templates
    there should template section (ready made)
- Doctor approval workflow
    
- Customizable printing of final reports

## Finance Module
Efficiently manage payments and financial records with real-time tracking. The module supports both online and offline payments and offers financial data export, along with a comprehensive dashboard.

### Features:
- Online payment integration (Razorpay)
- Capture offline payments during test bookings
- Export financial data
- Income tracking dashboard
- Doctor commission management
