import LogoutButton from "components/logout-button";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Insupagram",
  description: "Instagram clone project using Supabase",
};

export default function Home() {
  return (
    <main className="w-full h-screen flex flex-col items-center justify-center">
      <h1 className="">Welcome {"Username!"}!</h1>
      <LogoutButton/>
    </main>
  );
}
