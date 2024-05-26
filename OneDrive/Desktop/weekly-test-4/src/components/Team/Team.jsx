import { useContext, useState } from "react";
import { TeamContext } from "../../App";

const Team = () => {
  const teams = useContext(TeamContext);
  const [sortedTeam, setSortedTeam] = useState([]);
  const [sortByAge, setSortByAge] = useState(false);
  const handleSortByAge = () => {
    const updatedData = teams.teamList.sort((a, b) => a.age - b.age);
    setSortByAge((prev) => !prev);
    setSortedTeam([...updatedData]);
  };
  let sum = 0;
  teams.teamList.forEach((item) => {
    sum = sum + item.age;
  });
  let avg = 0;
  avg = Math.floor(sum / teams.teamList.length);

  const handleRemoveEmployee = (id) => {
    console.log(id);
  };

  return (
    <div className="dark:bg-gray-900 dark:text-white min-h-screen p-4 w-[45%] relative">
      <div className="flex justify-between flex-col items-center mb-12 relative">
        <h1 className="text-2xl font-bold">Team</h1>
        <button
          onClick={handleSortByAge}
          className="absolute right-0 top-8 bg-blue-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          Sort by Age
        </button>
        <div className="bg-[#3f4f64] absolute left-0 top-8 py-2 px-4 rounded-lg">
          <h3 className="text-lg font-medium text-white">
            Average age : <span className="text-red-500">{avg ? avg : 0}</span>
          </h3>
        </div>
      </div>
      <div className="overflow-y-scroll h-screen hide-scrollbar">
        {sortByAge ? (
          sortedTeam.length === 0 ? (
            <p className="text-red-500 text-xl text-center mt-12">
              Add Employee to make team...
            </p>
          ) : (
            sortedTeam.map((item) => {
              return (
                <div
                  key={item.id}
                  className="bg-gray-800 p-3 rounded-lg shadow-md mb-4 w-full"
                >
                  <div className=" flex items-center justify-between space-x-4">
                    <p className="text-gray-300 mr-10">
                      {item.first_name + item.last_name}
                    </p>
                    <div className="flex space-x-4 items-center">
                      <p className="text-gray-300 px-8">{item.age}</p>
                      <button
                        onClick={() => handleRemoveEmployee("item.id")}
                        className="bg-red-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400"
                      >
                        Remove Employee
                      </button>
                    </div>
                  </div>
                </div>
              );
            })
          )
        ) : teams.teamList.length === 0 ? (
          <p className="text-red-500 text-xl text-center mt-12">
            Add Employee to make team...
          </p>
        ) : (
          teams.teamList.map((item) => {
            return (
              <div
                key={item.id}
                className="bg-gray-800 p-3 rounded-lg shadow-md mb-4 w-full"
              >
                <div className=" flex items-center justify-between space-x-4">
                  <p className="text-gray-300 mr-10">
                    {item.first_name + item.last_name}
                  </p>
                  <div className="flex space-x-4 items-center">
                    <p className="text-gray-300 px-8">{item.age}</p>
                    <button
                      onClick={handleRemoveEmployee}
                      className="bg-red-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400"
                    >
                      Remove Employee
                    </button>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Team;
