import Employees from "./components/Employees/Employees";
import Team from "./components/Team/Team";
import { createContext, useState } from "react";
import data from "./data";
export const TeamContext = createContext();
const App = () => {
  const [teamList, setTeamList] = useState([]);
  const [employeeList, setEmployeeList] = useState(data);
  return (
    <TeamContext.Provider
      value={{ teamList, setTeamList, employeeList, setEmployeeList }}
    >
      <div className=" bg-[#1F2937] text-white h-screen w-full overflow-hidden">
        <div className="max-w-7xl mx-auto flex justify-around ">
          <Employees />
          <Team />
        </div>
      </div>
    </TeamContext.Provider>
  );
};

export default App;
