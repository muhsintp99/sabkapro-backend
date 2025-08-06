# sabkapro-backend

<img width="550" height="550" alt="Sabka-favicon" src="https://github.com/user-attachments/assets/22cbda17-eaef-4b41-b154-b014cffa169d" />


[Logo - Sabka.pdf](https://github.com/user-attachments/files/21612672/Logo.-.Sabka.pdf)


# 🎯 TalentConnect Ecosystem

## Overview

TalentConnect is a complete platform that connects **candidates** and
**employers** through:

-   A **Public Website** for lead generation and onboarding
-   A **CRM Admin Panel** for internal staff to manage the ecosystem
-   A **PWA App for Candidates** to apply for jobs and learn
-   A **PWA App for Employers** to post jobs and hire talent

------------------------------------------------------------------------

## 🔗 Components & Workflow

### 1. Website / Landing Page

-   **Goal**: Capture leads and onboard users.
-   **Workflow**:
    1.  Homepage → Register as Candidate/Employer
    2.  Fill Lead Form (Name, Email, WhatsApp, etc.)
    3.  Upload CV (candidate) / Hiring Details (employer)
    4.  Auto-send credentials via Email & WhatsApp
    5.  Redirect to PWA App (Student/Employer)
    6.  Payment gateway for Pro users

### 2. CRM Admin Panel

-   **Goal**: Internal management of leads, users, payments, courses,
    and analytics.
-   **Key Features**:
    -   Lead & Proposal Management
    -   Candidate & Employer Management
    -   Course Upload via Vimeo API
    -   Payment Tracking
    -   Roles (Admin/Staff)
    -   Analytics & Reports Export

### 3. Student PWA App

-   **Goal**: Job applications and access to video learning.
-   **Features**:
    -   OTP Login (Email/WhatsApp)
    -   Profile Setup
    -   Video Learning (Progress Tracking)
    -   Job Listings + Interview Scheduler
    -   Subscription Upgrade (Pro)

### 4. Employer PWA App

-   **Goal**: Recruiter job posting and hiring workflow.
-   **Features**:
    -   OTP Login + Admin Verification
    -   Job Posting
    -   Candidate Filtering & Resume Parsing
    -   Communication (Email/SMS)
    -   ATS (Application Tracking System)

------------------------------------------------------------------------

## 🗂 Backend Folder Structure

    backend/
    │
    ├── config/                    # Configurations (DB, Env, APIs)
    │
    ├── controllers/               # Route logic (auth, leads, jobs, etc.)
    │
    ├── models/                    # MongoDB Schemas (User, Job, Lead, etc.)
    │
    ├── routes/                    # Express Routes (API endpoints)
    │
    ├── middlewares/               # Auth, Role, Error Handling, Uploads
    │
    ├── utils/                     # Helpers (Email, WhatsApp, Invoices, Logging)
    │
    ├── services/                  # External APIs (Payment, Vimeo, Calendar)
    │
    ├── validations/               # Joi/Yup Validation Schemas
    │
    ├── public/                    # Uploaded files (CVs, Video Resumes)
    │
    ├── .env                       # Environment Variables
    ├── app.js                     # Express App Setup
    ├── server.js                  # Server Entry Point
    ├── package.json               # Dependencies
    └── README.md                  # Project Docs

------------------------------------------------------------------------

## ⚙️ Installation

### 1. Clone the Repository

``` bash
git clone https://github.com/your-username/talentconnect.git
cd talentconnect/backend
```

### 2. Install Dependencies

``` bash
npm install
```

### 3. Setup Environment Variables

Create a `.env` file:

    PORT=5000
    MONGO_URI=your_mongodb_uri
    JWT_SECRET=your_secret_key
    EMAIL_API_KEY=your_email_api_key
    WHATSAPP_API_KEY=your_whatsapp_api_key
    VIMEO_CLIENT_ID=your_vimeo_client_id
    STRIPE_SECRET_KEY=your_stripe_key

### 4. Run the Server

``` bash
npm start
```

Server runs on `http://localhost:5000`

------------------------------------------------------------------------

## 🛠️ Features

  Module           Key Features
  ---------------- --------------------------------------------
  **Auth**         JWT Auth, OTP Login
  **Leads**        Capture, Assign, Track
  **Candidates**   Profile, Resume, Subscription
  **Employers**    Jobs, Hiring, Filtering
  **Payments**     Invoice, Payment Gateway (Razorpay/Stripe)
  **Courses**      Upload via Vimeo, Access Control
  **Interviews**   Scheduling, Calendar Integration
  **Reports**      Revenue, Placements, Course Progress

------------------------------------------------------------------------

## 🧩 Tech Stack

  Tech              Description
  ----------------- ------------------------------
  Node.js           Backend Server
  Express.js        Routing Framework
  MongoDB           Database (via Mongoose)
  JWT               Authentication
  Vimeo API         Video Uploads/Access Control
  Stripe/Razorpay   Payments Integration
  Twilio/MSG91      WhatsApp/SMS Notifications
  Nodemailer        Email Notifications

------------------------------------------------------------------------

## 📈 Roadmap

-   ✅ Basic Lead/Candidate/Employer Management
-   ✅ Vimeo & Stripe Integration
-   ⏳ ATS Enhancements
-   ⏳ Analytics Dashboards
-   ⏳ Team Collaboration for Employers
-   ⏳ Multi-language Support

------------------------------------------------------------------------

## 📄 License

MIT License - © 2025 TalentConnect

------------------------------------------------------------------------

## 📂 Full Backend Folder Structure

    backend/
    │
    ├── config/                    
    │   ├── db.js                  # MongoDB connection setup
    │   ├── env.js                 # Load environment variables
    │   ├── paymentConfig.js       # Stripe/Razorpay config
    │   └── vimeoConfig.js         # Vimeo API credentials
    │
    ├── controllers/               
    │   ├── authController.js
    │   ├── leadController.js
    │   ├── candidateController.js
    │   ├── employerController.js
    │   ├── jobController.js
    │   ├── paymentController.js
    │   ├── courseController.js
    │   ├── proposalController.js
    │   ├── interviewController.js
    │   └── reportController.js
    │
    ├── models/                    
    │   ├── User.js
    │   ├── Lead.js
    │   ├── Candidate.js
    │   ├── Employer.js
    │   ├── Job.js
    │   ├── Proposal.js
    │   ├── Payment.js
    │   ├── Course.js
    │   ├── Video.js
    │   ├── Interview.js
    │   └── Notification.js
    │
    ├── routes/                    
    │   ├── authRoutes.js
    │   ├── leadRoutes.js
    │   ├── candidateRoutes.js
    │   ├── employerRoutes.js
    │   ├── jobRoutes.js
    │   ├── paymentRoutes.js
    │   ├── courseRoutes.js
    │   ├── proposalRoutes.js
    │   ├── interviewRoutes.js
    │   └── reportRoutes.js
    │
    ├── middlewares/               
    │   ├── authMiddleware.js      # JWT verification
    │   ├── roleMiddleware.js      # Role-based access control
    │   ├── errorHandler.js        # Global error handler
    │   └── uploadMiddleware.js    # File upload setup (Multer)
    │
    ├── utils/                     
    │   ├── sendEmail.js           # Email via Nodemailer/SendGrid
    │   ├── sendWhatsApp.js        # WhatsApp messaging via Twilio/MSG91
    │   ├── generateInvoice.js     # PDF invoice generator
    │   ├── videoHelper.js         # Vimeo helper functions
    │   └── logger.js              # Logging with Winston
    │
    ├── services/                  
    │   ├── paymentService.js      # Stripe/Razorpay payment logic
    │   ├── vimeoService.js        # Video upload, DRM, etc.
    │   ├── smsService.js          # SMS integration
    │   └── calendarService.js     # Google Calendar for interview scheduling
    │
    ├── validations/               
    │   ├── authValidation.js
    │   ├── candidateValidation.js
    │   ├── employerValidation.js
    │   ├── jobValidation.js
    │   └── leadValidation.js
    │
    ├── public/                    
    │   ├── uploads/               # CVs, video resumes
    │   │    └── sample.pdf
    │   └── thumbnails/            # Video thumbnails
    │
    ├── .env                       # Environment variables
    ├── app.js                     # Express app setup
    ├── server.js                  # Server entry point
    ├── package.json               # Project dependencies
    └── README.md                  # Project documentation

------------------------------------------------------------------------

## 📄 License

MIT License - © 2025 TalentConnect
