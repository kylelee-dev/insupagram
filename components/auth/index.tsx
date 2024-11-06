"use client";

import { useState } from "react";
import SignUp from "./signup";
import SignIn from "./signin";

export default function Auth() {
  const [view, setView] = useState("SIGNUP");

  return (
    <main className="w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 to-light-blue-50">
      {view === "SIGNUP" ? (
        <SignUp setView={setView} />
      ) : (
        <SignIn setView={setView} />
      )}
    </main>
  );
}
