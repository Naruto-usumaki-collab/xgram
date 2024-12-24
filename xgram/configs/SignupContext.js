import React, { createContext, useState, useContext } from "react";

// Create the context
const SignupContext = createContext();

// Context provider to wrap the app or specific screens
export function SignupProvider({ children }) {
  const [signupData, setSignupData] = useState({
    username: "",
    password: "",
    dob: new Date(), // Initialize dob as a Date object
    age: 0,
    phoneOrEmail: "",
    profilePicture: null,
  });

  return (
    <SignupContext.Provider value={{ signupData, setSignupData }}>
      {children}
    </SignupContext.Provider>
  );
}

// Hook to use the context in screens
export function useSignup() {
  const context = useContext(SignupContext);
  if (!context) {
    throw new Error("useSignup must be used within a SignupProvider");
  }
  return context;
}
