# ALIEN FOREX TRADING

A modern, dark-themed, fintech-inspired React web app for forex mentorship, signals, challenges, and account management.

---

## 🚀 Project Summary

- **Responsive React.js app** with a black + neon green hacker aesthetic
- Dynamic content powered by **Firebase Firestore**
- **Admin dashboard** for uploading testimonials (with image upload via ImgBB)
- Animated glowing cards, pricing tables, and interactive contact methods
- Mobile-first, fully responsive with Bootstrap 5

---

## 🧪 Tech Stack

- **Frontend:** React.js, react-router-dom, Bootstrap 5, Framer Motion, Font Awesome/Bootstrap Icons
- **Backend:** Firebase (Firestore, Auth, Hosting ready)
- **Image Uploads:** ImgBB API

---

## 📦 Folder Structure

```
alienforex/
  src/
    components/      # Navbar, Footer, shared UI
    pages/           # All main pages (Home, About, Services, etc.)
    firebase/        # Firebase config and ImgBB upload util
    styles/          # Custom CSS (theme.css)
    assets/          # Images, logos, etc.
  public/
    ...
  package.json
  README.md
```

---

## 🛠️ Installation

1. **Clone the repo:**
   ```bash
   git clone <repo-url>
   cd alienforex
   npm install
   ```
2. **Set up Environment Variables:**
   - Create a file named `.env` in the root of the `alienforex` directory.
   - Add the following environment variables to the `.env` file, replacing the placeholder values with your actual credentials:
     ```
     REACT_APP_GEMINI_API_KEY=YOUR_GEMINI_API_KEY
     REACT_APP_FIREBASE_API_KEY=YOUR_FIREBASE_API_KEY
     REACT_APP_FIREBASE_AUTH_DOMAIN=YOUR_FIREBASE_AUTH_DOMAIN
     REACT_APP_FIREBASE_PROJECT_ID=YOUR_FIREBASE_PROJECT_ID
     REACT_APP_FIREBASE_STORAGE_BUCKET=YOUR_FIREBASE_STORAGE_BUCKET
     REACT_APP_FIREBASE_MESSAGING_SENDER_ID=YOUR_FIREBASE_MESSAGING_SENDER_ID
     REACT_APP_FIREBASE_APP_ID=YOUR_FIREBASE_APP_ID
     REACT_APP_FIREBASE_MEASUREMENT_ID=YOUR_FIREBASE_MEASUREMENT_ID
     REACT_APP_IMGBB_API_KEY=YOUR_IMGBB_API_KEY
     ```
3. **Upload Services to Firestore:**
   - After setting up your environment variables, run the following command to populate the Firestore database with the service data:
     ```bash
     npm run upload-services
     ```
4. **Deploy Firebase Rules:**
   - To secure your Firestore database, deploy the rules using the following command:
     ```bash
     npm run deploy-rules
     ```
5. **Run the app:**
   ```bash
   npm start
   ```

---

## 🔥 Firebase Setup Guide

- Enable Firestore (for testimonials, services, etc.)
- Enable Authentication (for admin dashboard access)
- Add your Firebase config to `src/firebase/firebaseConfig.js`

---

## 🖼️ ImgBB API Usage

- Used for uploading testimonial images in the admin dashboard
- API call is handled in `src/firebase/imgbb.js`
- Store the returned image URL in Firestore

---

## ✨ Future Features

- Payment gateway integration
- Full admin panel with authentication
- User dashboard for tracking mentorship progress
- More animated/interactive UI elements

---

## 📞 Contact

- WhatsApp/Call: +255613886635
- Email: thealienforex255@gmail.com
- Instagram/TikTok/Telegram/Twitter: @samprofx_255

---

© 2025 ALIEN FOREX TRADING. All Rights Reserved.
