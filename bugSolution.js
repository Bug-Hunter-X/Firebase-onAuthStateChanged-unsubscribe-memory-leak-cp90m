const unsubscribe = onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in...
  } else {
    // User is signed out...
  }
});

// ... later, when you no longer need the listener...
unsubscribe();