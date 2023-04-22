import React from "react";
import Image from "next/image";

function LostPassword() {
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
          <div className="flex h-[22rem] flex-col rounded-xl bg-base-100 p-4 text-center text-base-content dark:bg-base-200 xs:w-[20rem] sm:w-[30rem]">
            <form className="flex flex-col items-center justify-center">
              <div className="flex h-[3rem] items-center justify-center text-center">
                <h2 className=" text-2xl font-bold">Golden Book</h2>
              </div>
              <div className="w-full text-left">
                <h3 className=" text-lg font-semibold">
                  Forgot your password?
                </h3>
                <p className="">
                  Please enter your account&apos;s registered email address and
                  we&apos;ll send you a recovery email.
                </p>
              </div>
              <div className=" form-control w-full max-w-xs py-2">
                <label htmlFor="email" className="label">
                  <span className="label-text font-semibold">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  className="input-bordered input w-full max-w-xs"
                />
              </div>

              <div className="form-control w-full max-w-xs py-2">
                <button type="button" className="btn-info btn">
                  Reset Password
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LostPassword;
