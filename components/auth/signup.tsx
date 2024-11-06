import { Button, Input } from "@material-tailwind/react";
import { useState } from "react";

export default function SignUp({ setView }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-2 pt-10 pb-6 px-10 w-full items-center justify-center max-w-lg border border-gray-400 bg-white">
        {/* Put Text instead of logo image */}
        <h1 className="w-60 mb-6 text-5xl text-center font-serif italic">Insupagram</h1>
        <Input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          label="email"
          type="email"
          className="w-full rounded-md"
        />{" "}
        <Input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          label="password"
          type="password"
          className="w-full rounded-md"
        />
        <Button
          className="w-full text-md py-1"
          onClick={() => {
            console.log("signup");
          }}
          color="light-blue"
        >
          SIGN UP
        </Button>
      </div>
      <div className="py-4 w-full text-center max-w-lg border border-gray-400 bg-white">
        Already have an account?
        <button
          className="text-light-blue-600 font-bold"
          onClick={() => setView("SIGNIN")}
        >
          SIGN IN
        </button>
      </div>
    </div>
  );
}
