import { useContext } from "react";
import { TeamContext } from "../../App";

const Employees = () => {
  const { employeeList, setEmployeeList, teamList, setTeamList } =
    useContext(TeamContext);
  //   const handleAddEmployee = (id) => {
  //     const filteredData = data.filter((item) => {
  //       return item.id === id;
  //     });

  //     teams.setTeamList([...teams.teamList, ...filteredData]);
  //   };

  const handleAddEmployee = (id) => {
    const filteredData = employeeList.filter((item) => {
      if (item.id === id) {
        let teamData = employeeList.pop();
        setTeamList([...teamList, teamData]);
      }
      return item.id !== id;
    });

    setEmployeeList([...filteredData]);
  };

  console.log(teamList);

  return (
    <div className="dark:bg-gray-900 dark:text-white min-h-screen p-4 w-[45%]">
      <div className="text-2xl font-bold relative mb-10 text-center ">
        Employees
        <span className=" absolute left-0 top-9 w-full flex space-x-14 px-8">
          <p className="text-gray-300 text-lg font-medium"> Name</p>
          <p className="text-gray-300 text-lg font-medium pl-28"> Age</p>
        </span>
      </div>
      <div className="overflow-y-scroll h-screen hide-scrollbar">
        {employeeList.map((employee) => {
          return (
            <div
              key={employee.id}
              className="bg-gray-800 p-4 rounded-lg shadow-md mb-4 w-full"
            >
              <div className=" flex items-center justify-between space-x-4">
                <p className="text-gray-300 mr-10">
                  {employee.first_name + employee.last_name}
                </p>
                <div className="flex space-x-4 items-center">
                  <p className="text-gray-300 px-8">{employee.age}</p>
                  <button
                    onClick={() => handleAddEmployee(employee.id)}
                    className="bg-blue-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  >
                    Add Employee
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Employees;
