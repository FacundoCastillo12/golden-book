import React from "react";

function NovelListChapter() {
  // Aqui cargara data. Osea rodear return en un data. Si hay data, la cargara, si no loading o error
  return (
    <div className="relative mx-auto flex h-full max-w-[1240px] flex-col items-center justify-center bg-blue-50 p-4 text-base-content dark:bg-base-200">
      <div className=" flex flex-col gap-1 p-2 sm:flex-row">
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th>#</th>
                <th>Chapter</th>
                <th>Release Date</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>1</th>
                <td>Cy Ganderton</td>
                <td>Quality Control Specialist</td>
              </tr>

              <tr>
                <th>2</th>
                <td>Hart Hagerty</td>
                <td>Desktop Support Technician</td>
              </tr>

              <tr>
                <th>3</th>
                <td>Brice Swyre</td>
                <td>Tax Accountant</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default NovelListChapter;
