

<img width="500" height="142" alt="1-removebg-preview" src="https://github.com/user-attachments/assets/803ca524-68d6-4d1f-8da5-45e9a4a0d9e3" />

<img width="1542" height="1542" alt="Sabka-favicon" src="https://github.com/user-attachments/assets/d48c725f-2ff5-42e3-b2a6-bb768e8746a7" />

<img width="500" height="144" alt="3-removebg-preview" src="https://github.com/user-attachments/assets/839b894e-7140-44e8-9ecd-981668214578" />


# 📦 Sabka Pro Backend

A fully functional **MERN stack backend** for a job consultancy, training, and CRM platform.  
Features include authentication, OTP email verification, leads management, candidates, employers, job postings, proposals, courses, payments (Stripe), and ATS.

---

## 🚀 Features

- JWT-based Authentication & Authorization
- Role-based Access Control
- Email OTP Verification (Nodemailer)
- File Uploads using Multer (Resumes, Videos, Images)
- Stripe Payment Gateway
- MongoDB + Mongoose ODM
- CRUD for Leads, Candidates, Employers, Jobs, Proposals, Courses, ATS
- Error Handling & Logging
- Postman Collection for API Testing

---

## 📂 Folder Structure

```plaintext
backend/
├── config/           # DB connection & app config
├── controllers/      # API logic
├── middlewares/      # Auth, uploads, errors
├── models/           # Mongoose schemas
├── routes/           # API endpoints
├── services/         # Email, payment, etc.
├── uploads/          # Uploaded files
├── utils/            # Helpers (logger, token, OTP)
├── .env              # Environment variables
├── .gitignore
├── package.json
├── server.js         # Main entry point
└── README.md
```

---

## ⚙️ Environment Variables

Create a `.env` file in the root:

```env
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/sabka_pro
JWT_SECRET=your_secret
JWT_EXPIRES_IN=30d
EMAIL_HOST=smtp.your-email.com
EMAIL_PORT=587
EMAIL_USER=you@example.com
EMAIL_PASS=your_email_password
STRIPE_SECRET_KEY=sk_test_your_stripe_secret
STRIPE_PUBLISHABLE_KEY=pk_test_your_stripe_publishable
```

---

## 🛠 Installation

### 1️⃣ Clone the repo

```bash
git clone https://github.com/yourusername/sabka-pro-backend.git
cd sabka-pro-backend
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Run in development

```bash
npm run dev
```

---

## 📬 API Endpoints

### Authentication

| Method | Endpoint | Description | Auth |
|--------|----------|-------------|------|
| POST | `/api/auth/register` | Register new user | ❌ |
| POST | `/api/auth/login` | Login user | ❌ |
| POST | `/api/auth/send-otp` | Send OTP to email | ❌ |
| POST | `/api/auth/verify-otp` | Verify OTP | ❌ |
| GET | `/api/auth/me` | Get current logged-in user | ✅ |

### Leads

| Method | Endpoint | Description | Auth |
|--------|----------|-------------|------|
| GET | `/api/leads` | Get all leads | ✅ |
| POST | `/api/leads` | Create lead | ✅ |
| GET | `/api/leads/:id` | Get lead by ID | ✅ |
| PUT | `/api/leads/:id` | Update lead | ✅ |
| DELETE | `/api/leads/:id` | Delete lead | ✅ |

### Candidates

| Method | Endpoint | Description | Auth |
|--------|----------|-------------|------|
| GET | `/api/candidates` | Get all candidates | ✅ |
| POST | `/api/candidates` | Create candidate | ✅ |
| GET | `/api/candidates/:id` | Get candidate by ID | ✅ |
| PUT | `/api/candidates/:id` | Update candidate | ✅ |
| DELETE | `/api/candidates/:id` | Delete candidate | ✅ |

### Employers

| Method | Endpoint | Description | Auth |
|--------|----------|-------------|------|
| GET | `/api/employers` | Get all employers | ✅ |
| POST | `/api/employers` | Create employer | ✅ |
| GET | `/api/employers/:id` | Get employer by ID | ✅ |
| PUT | `/api/employers/:id` | Update employer | ✅ |
| DELETE | `/api/employers/:id` | Delete employer | ✅ |

### Jobs

| Method | Endpoint | Description | Auth |
|--------|----------|-------------|------|
| GET | `/api/jobs` | Get all jobs | ✅ |
| POST | `/api/jobs` | Create job | ✅ |
| GET | `/api/jobs/:id` | Get job by ID | ✅ |
| PUT | `/api/jobs/:id` | Update job | ✅ |
| DELETE | `/api/jobs/:id` | Delete job | ✅ |

### Proposals

| Method | Endpoint | Description | Auth |
|--------|----------|-------------|------|
| GET | `/api/proposals` | Get all proposals | ✅ |
| POST | `/api/proposals` | Create proposal | ✅ |
| GET | `/api/proposals/:id` | Get proposal by ID | ✅ |
| PUT | `/api/proposals/:id` | Update proposal | ✅ |
| DELETE | `/api/proposals/:id` | Delete proposal | ✅ |

### Courses

| Method | Endpoint | Description | Auth |
|--------|----------|-------------|------|
| GET | `/api/courses` | Get all courses | ✅ |
| POST | `/api/courses` | Create course | ✅ |
| GET | `/api/courses/:id` | Get course by ID | ✅ |
| PUT | `/api/courses/:id` | Update course | ✅ |
| DELETE | `/api/courses/:id` | Delete course | ✅ |

### ATS (Applicant Tracking System)

| Method | Endpoint | Description | Auth |
|--------|----------|-------------|------|
| GET | `/api/ats` | Get all ATS entries | ✅ |
| POST | `/api/ats` | Create ATS entry | ✅ |
| GET | `/api/ats/:id` | Get ATS entry by ID | ✅ |
| PUT | `/api/ats/:id` | Update ATS entry | ✅ |
| DELETE | `/api/ats/:id` | Delete ATS entry | ✅ |

### Users

| Method | Endpoint | Description | Auth |
|--------|----------|-------------|------|
| GET | `/api/users` | Get all users | ✅ (Admin) |
| GET | `/api/users/:id` | Get user by ID | ✅ |
| PUT | `/api/users/:id` | Update user | ✅ |
| DELETE | `/api/users/:id` | Delete user | ✅ (Admin) |

---

## 📤 File Uploads

### Supported Upload Types

- **Resumes** → `/api/candidates` (form-data: key=`resume`)
- **Course Videos** → `/api/courses` (form-data: key=`videos`)
- **Profile Images** → Various endpoints (form-data: key=`image`)

### Upload Example

```javascript
// Using FormData for file upload
const formData = new FormData();
formData.append('resume', fileInput.files[0]);
formData.append('name', 'John Doe');
formData.append('email', 'john@example.com');

fetch('/api/candidates', {
  method: 'POST',
  headers: {
    'Authorization': `Bearer ${token}`
  },
  body: formData
});
```

---

## 💳 Payments

### Create Payment Intent (Stripe)

```http
POST /api/payments/create-payment-intent
Authorization: Bearer YOUR_TOKEN
Content-Type: application/json

{
  "amount": 100,
  "currency": "usd",
  "metadata": { 
    "orderId": "12345",
    "courseId": "course_123"
  }
}
```

### Response

```json
{
  "success": true,
  "clientSecret": "pi_1234567890_secret_abcdef",
  "paymentIntentId": "pi_1234567890"
}
```

---

## 🧪 Testing with Postman

1. Import the provided Postman Collection (if available)
2. Start the server with `npm run dev`
3. Test endpoints with `http://localhost:5000`
4. Set up environment variables in Postman:
   - `baseUrl`: `http://localhost:5000`
   - `token`: Your JWT token after login

### Sample Request Flow

1. **Register User**: `POST /api/auth/register`
2. **Send OTP**: `POST /api/auth/send-otp`
3. **Verify OTP**: `POST /api/auth/verify-otp`
4. **Login**: `POST /api/auth/login` (get token)
5. **Use Token**: Add `Authorization: Bearer <token>` to protected routes

---

## 🛡 Security Features

- **Password Security**: Passwords hashed with bcrypt
- **JWT Authentication**: Secure token-based authentication
- **Role-based Access**: Different access levels for users
- **File Upload Validation**: Type and size restrictions
- **Input Validation**: Mongoose schema validation
- **Error Handling**: Centralized error management
- **CORS**: Configured for cross-origin requests

---

## 📝 Dependencies

### Production Dependencies

```json
{
  "express": "^4.18.2",
  "mongoose": "^8.0.0",
  "bcryptjs": "^2.4.3",
  "jsonwebtoken": "^9.0.2",
  "multer": "^1.4.5",
  "nodemailer": "^6.9.7",
  "stripe": "^14.9.0",
  "cors": "^2.8.5",
  "dotenv": "^16.3.1",
  "express-validator": "^7.0.1"
}
```

### Development Dependencies

```json
{
  "nodemon": "^3.0.2"
}
```

---

## 🚀 Deployment

### Using PM2 (Recommended)

```bash
npm install -g pm2
pm2 start server.js --name "sabka-pro-backend"
pm2 startup
pm2 save
```

### Using Docker

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
EXPOSE 5000
CMD ["node", "server.js"]
```

---

## 📊 Database Schema Overview

### User Schema
- Authentication fields (email, password, role)
- Profile information
- Email verification status
- Timestamps

### Lead Schema
- Contact information
- Source tracking
- Status management
- Assignment to users

### Candidate Schema
- Personal details
- Resume upload
- Skills and experience
- Job preferences

### Job Schema
- Job details and requirements
- Employer information
- Application tracking
- Status management

---

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📜 License

MIT License © 2025 Sabka Pro Backend

---

## 📞 Support

For support and questions:
- Create an issue on GitHub
- Email: support@sabkapro.com
- Documentation: [API Docs](https://api.sabkapro.com/docs)

---

**Made with ❤️ by MUHSIN**
