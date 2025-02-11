# Firebase onAuthStateChanged Unsubscribe Issue

This repository demonstrates a common issue with Firebase's `onAuthStateChanged` listener: improper unsubscription leading to memory leaks.  The original code failed to correctly unsubscribe, causing listeners to persist even after they were no longer needed.

The `bug.js` file showcases the problematic code. The solution, provided in `bugSolution.js`, addresses this by correctly managing the unsubscribe function.