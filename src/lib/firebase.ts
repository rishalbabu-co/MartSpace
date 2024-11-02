import { initializeApp } from 'firebase/app';
import { 
  getAuth, 
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  User
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAfZ2ElU3qwkzvVJcjk5yT7zwboqkArP7o",
  authDomain: "martspace-63449.firebaseapp.com",
  projectId: "martspace-63449",
  storageBucket: "martspace-63449.firebasestorage.app",
  messagingSenderId: "690773404524",
  appId: "1:690773404524:web:1e970876b58138da77e149",
  measurementId: "G-KD7J4ZN9JS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

interface RegisterData {
  email: string;
  password: string;
  name: string;
  accountType: 'business' | 'individual';
  companyName?: string;
}

export const registerUser = async (data: RegisterData): Promise<User> => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, data.email, data.password);
    
    // Update profile with display name
    await updateProfile(userCredential.user, {
      displayName: data.name
    });

    return userCredential.user;
  } catch (error: any) {
    throw new Error(getErrorMessage(error.code));
  }
};

export const loginUser = async (email: string, password: string): Promise<User> => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  } catch (error: any) {
    throw new Error(getErrorMessage(error.code));
  }
};

export const logoutUser = async (): Promise<void> => {
  try {
    await signOut(auth);
  } catch (error: any) {
    throw new Error(getErrorMessage(error.code));
  }
};

const getErrorMessage = (code: string): string => {
  switch (code) {
    case 'auth/email-already-in-use':
      return 'This email is already registered. Please login instead.';
    case 'auth/invalid-email':
      return 'Invalid email address.';
    case 'auth/operation-not-allowed':
      return 'Email/password accounts are not enabled. Please contact support.';
    case 'auth/weak-password':
      return 'Password should be at least 6 characters.';
    case 'auth/user-disabled':
      return 'This account has been disabled. Please contact support.';
    case 'auth/user-not-found':
    case 'auth/wrong-password':
      return 'Invalid email or password.';
    default:
      return 'An error occurred. Please try again.';
  }
};

export { auth };