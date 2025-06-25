const { initializeApp } = require('firebase/app');
const { getFirestore, collection, addDoc } = require('firebase/firestore');

// Manually enter your Firebase config here for the script
const firebaseConfig = {
  apiKey: "AIzaSyA4J8yXDRuUnJK7ZogfLhp63owYgFDldK4",
  authDomain: "alienfx-9b0fb.firebaseapp.com",
  projectId: "alienfx-9b0fb",
  storageBucket: "alienfx-9b0fb.firebasestorage.app",
  messagingSenderId: "63853172554",
  appId: "1:63853172554:web:248385ea3ebd10e07513b3",
  measurementId: "G-K1FHE9KSH9"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const services = [
  { title: 'Mentorship', price: '$150', desc: '1-on-1 coaching, lifetime access, daily Q&A.' },
  { title: 'Signals', price: '$50/mo', desc: 'High-accuracy forex signals, risk management.' },
  { title: 'Challenges', price: '$100', desc: 'FTMO/MyForexFunds challenge passing service.' },
  { title: 'Account Management', price: '20% profit share', desc: 'We trade your account, you keep 80%.' },
];

const uploadServices = async () => {
  const servicesCollection = collection(db, 'services');
  for (const service of services) {
    await addDoc(servicesCollection, service);
    console.log(`Uploaded: ${service.title}`);
  }
  console.log('All services uploaded!');
  process.exit(0);
};

uploadServices();