import React from "react";

function NovelReview() {
  const handleSubmitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };
  return (
    <div className=" flex flex-col flex-wrap items-center justify-center">
      <div className="my-2">
        <h2 className=" text-xl font-bold">WRITE A REVIEW</h2>
      </div>
      <form
        className="flex w-3/5 flex-col items-center justify-center gap-3 border border-gray-600 p-3 dark:bg-gray-800"
        onSubmit={(event) => handleSubmitForm(event)}
      >
        <div className="form-control w-full max-w-lg">
          <label className="label">
            <span className="label-text text-base font-medium">
              Title Review
            </span>
          </label>
          <input
            id="title-review"
            type="text"
            placeholder="Title review"
            className="input-bordered input-info input w-full max-w-lg"
          />
        </div>
        <div className="form-control w-full max-w-lg">
          <label className="label">
            <span className="label-text">What is your name?</span>
          </label>
          <input
            type="text"
            placeholder="Type here"
            className="input-bordered input w-full max-w-lg"
          />
        </div>

        <div className="w-full max-w-lg gap-2 sm:flex ">
          <div className="">
            <h3 className=" text-base font-medium">Overall Rating:</h3>
          </div>
          <div className="rating rating-md ">
            <input
              type="radio"
              name="rating-7"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-7"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-7"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-7"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-7"
              className="mask mask-star-2 bg-orange-400"
            />
          </div>
        </div>
        <div className="form-control w-full max-w-lg">
          <label className="label">
            <span className="label-text">Review content</span>
          </label>
          <textarea
            placeholder="Review"
            className="textarea-bordered textarea textarea-lg w-full max-w-lg"
          ></textarea>
        </div>
        <div>
          <button type="submit" className="btn-outline btn-primary btn">
            Send Review
          </button>
        </div>
      </form>
    </div>
  );
}

export default NovelReview;
