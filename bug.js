const unsubscribe = onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    const uid = user.uid;
    console.log('user is signed in:', uid);
    // ...
  } else {
    // User is signed out
    // ...
  }  
  // unsubscribe from the listener when no longer needed. It prevents memory leak.
  return () => unsubscribe();
});