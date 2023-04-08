import Link from "next/link";
import React from "react";

function RegisterUser() {
  return (
    <form className="flex flex-col items-center justify-center">
      <div className=" form-control w-full max-w-xs py-2">
        <label htmlFor="username" className="label">
          <span className="label-text font-semibold">Username</span>
        </label>
        <input
          type="username"
          name="username"
          id="username"
          placeholder="Username"
          className="input-bordered input w-full max-w-xs"
        />
      </div>
      <div className="form-control w-full max-w-xs py-2">
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
        <label htmlFor="confirm-password" className="label">
          <span className="label-text font-semibold">Confirm password</span>
        </label>
        <input
          type="password"
          name="confirm-password"
          id="confirm-password"
          placeholder="Confirm password"
          className="input-bordered input w-full max-w-xs"
        />
      </div>
      <div className="form-control">
        <label className="label cursor-pointer">
          <input
            type="checkbox"
            className="checkbox checkbox-xs mr-2 rounded-sm"
          />
          <span className="label-text text-left">
            I agree to the
            <Link
              href="/#"
              className=" border-b border-transparent font-semibold hover:border-gray-300 hover:text-blue-700  dark:hover:text-yellow-300"
            >
              {" "}
              Terms & Conditions
            </Link>
          </span>
        </label>
      </div>
      <div className="form-control w-full max-w-xs py-2">
        <button type="button" className="btn-info btn">
          Register
        </button>
      </div>
    </form>
  );
}

export default RegisterUser;
