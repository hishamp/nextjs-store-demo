"use client";

import { useSignIn, useSession } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

const AdminLogin = () => {
  const { signIn, setActive } = useSignIn();
  const router = useRouter();
  //   const {session} = useSession(),
  const handleDemoLogin = async () => {
    try {
      const signInResult = await signIn?.create({
        identifier: "adminhisham@yopmail.com",
        password: "admintest321",
      });
      if (signInResult?.createdSessionId && setActive) {
        console.log("here");
        await setActive({ session: signInResult.createdSessionId });
        router.replace("/");
      }
    } catch (err) {
      console.error("Demo login failed", err);
    }
  };
  return (
    <button onClick={handleDemoLogin} className="w-full text-left">
      Login as Admin
    </button>
  );
};
export default AdminLogin;
