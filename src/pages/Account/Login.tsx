import Image from "next/image";
import Link from "next/link";
import React from "react";
import LoginAccount from "@/components/account/LoginAccount";
import SocialLoginButtons from "@/components/account/SocialLoginButtons";

function Login() {
  return (
    <section>
      <div className="relative mx-auto flex min-h-screen items-center justify-center">
        <Image
          className="absolute h-full w-full object-cover"
          src="/images/background.webp"
          width={1920}
          height={1080}
          alt="background"
          priority
        />
        <div className="absolute inset-0 bg-gray-900 bg-opacity-30" />
        <div className="relative flex justify-center py-4">
          <div className="flex h-[40rem] flex-col rounded-xl bg-base-100 p-4 text-center text-base-content dark:bg-base-200 xs:w-[20rem] sm:w-[30rem]">
            <div className="flex h-[3rem] items-center justify-center text-center">
              <h2 className=" text-2xl font-bold">Golden Book</h2>
            </div>
            <LoginAccount />
            <div className="flex justify-center gap-2">
              <p className=" font-medium">Don&apos;t have an account?</p>
              <Link
                href="/Account/Register"
                className="border-b border-transparent font-semibold hover:border-gray-300 hover:text-blue-700 dark:hover:text-yellow-300"
              >
                Sign up
              </Link>
            </div>
            <div className="divider">OR</div>
            <SocialLoginButtons />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
