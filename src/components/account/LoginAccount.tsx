import Link from "next/link";
import React from "react";

function LoginAccount() {
  return (
    <form className="flex flex-col items-center justify-center">
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
        <label htmlFor="password" className="label">
          <span className="label-text font-semibold">Password</span>
          <Link
            href="/Account/LostPassword"
            className="label-text-alt border-b border-transparent font-medium hover:border-gray-300 hover:text-blue-700 dark:hover:text-yellow-300"
          >
            Forgot password?
          </Link>
        </label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          className="input-bordered input w-full max-w-xs"
        />
      </div>
      <div className="form-control w-full max-w-xs py-2">
        <button type="button" className="btn-info btn">
          Login
        </button>
      </div>
    </form>
  );
}

export default LoginAccount;
