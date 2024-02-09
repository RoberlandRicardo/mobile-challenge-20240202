import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
apiKey: "AIzaSyCpAPMCQFOMHdP4RhNhHCIy5LB4OT_ugVo",
authDomain: "mobile-challenge-8aab3.firebaseapp.com",
projectId: "mobile-challenge-8aab3",
storageBucket: "mobile-challenge-8aab3.appspot.com",
messagingSenderId: "473329605979",
appId: "1:473329605979:web:22da81bac76fc406da4e7e"
};
 
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db };