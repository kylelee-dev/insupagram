import { Button, Input } from "@material-tailwind/react";
import { useState } from "react";

export default function SignIn({ setView }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-2 pt-10 pb-6 px-10 w-full items-center justify-center max-w-lg border border-gray-400 bg-white">
        {/* Put Text instead of logo image */}
        <p className="w-60 mb-6 font-serif italic text-center text-5xl">Insupagram</p>
        <Input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          label="email"
          type="email"
          className="w-full rounded-sm"
        />{" "}
        <Input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          label="password"
          type="password"
          className="w-full rounded-sm"
        />
        <Button
          className="w-full text-md py-1"
          onClick={() => {
            console.log("signup");
          }}
          color="light-blue"
        >
          SIGN IN
        </Button>
      </div>
      <div className="py-4 w-full text-center max-w-lg border border-gray-400 bg-white">
        Don't have an account yet?
        <button
          className="text-light-blue-600 font-bold"
          onClick={() => setView("SIGNUP")}
        >
          SIGN UP
        </button>
      </div>
    </div>
  );
}
