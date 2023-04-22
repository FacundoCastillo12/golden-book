import React from "react";

function NovelListReview() {
  return (
    <div>
      <div>
        <div>
          <div
            tabIndex={0}
            className="collapse-arrow rounded-box collapse border border-base-300 bg-base-100"
          >
            <div className="collapse-title text-xl font-medium">
              Focus me to see content
            </div>
            <div className="collapse-content">
              <p>
                tabIndex={0} attribute is necessary to make the div focusable
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NovelListReview;
