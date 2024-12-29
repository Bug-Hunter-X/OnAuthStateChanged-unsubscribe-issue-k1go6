import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebaseConfig'; // Adjust path as needed

function MyComponent() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  // ... rest of your component logic using the 'user' state
  return (
    // ... JSX ...
  );
}

export default MyComponent;