# Firebase onAuthStateChanged Unsubscribe Issue

This repository demonstrates a common issue encountered when using Firebase's `onAuthStateChanged` function: improper unsubscription, leading to memory leaks.

The `authBug.js` file contains the buggy code, where the unsubscribe function is not correctly used.  The solution is provided in `authBugSolution.js`.

## Problem
The `onAuthStateChanged` listener needs to be unsubscribed from when it's no longer needed, especially in components that unmount.  Failing to do so can result in memory leaks and unexpected behavior.

## Solution
The solution involves ensuring that the unsubscribe function returned by `onAuthStateChanged` is called when the component or process that uses it is finished, typically within a cleanup or unmount function.  This prevents the listener from continuing to run after it's no longer needed.