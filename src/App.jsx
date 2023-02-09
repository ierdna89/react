import "./index.css";
import Employee from "./components/Employee";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [role, setRole] = useState("dev");
  const [emlpoyees, setEmployees] = useState([
    {
      name: "Caleb",
      role: "Developer",
      img: "https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg",
    },
    {
      name: "Mariah",
      role: "Manager",
      img: "https://images.pexels.com/photos/3586798/pexels-photo-3586798.jpeg",
    },
    {
      name: "Joanah",
      role: "Product Manager",
      img: "https://images.pexels.com/photos/3310695/pexels-photo-3310695.jpeg",
    },
    {
      name: "Ghea Vasile",
      role: "Paznic",
      img: "https://images.pexels.com/photos/1933873/pexels-photo-1933873.jpeg",
    },
    {
      name: "Jacob",
      role: "CTO",
      img: "https://images.pexels.com/photos/3748221/pexels-photo-3748221.jpeg",
    },
    {
      name: "Abdul",
      role: "CEO",
      img: "https://images.pexels.com/photos/4556737/pexels-photo-4556737.jpeg",
    },
  ]);
  const showEmployees = true;
  return (
    <div className="App">
      {showEmployees ? (
        <>
          <input
            className="block  w-full rounded-md my-6 border-gray-300 pl-7 pr-12 h-7 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm bg-slate-300"
            type="text"
            onChange={(e) => {
              console.log(e.target.value);
              setRole(e.target.value);
            }}
          />
          <div className="flex flex-wrap justify-center">
            {emlpoyees.map((emlpoyee) => {
              return (
                <Employee
                  key={uuidv4()}
                  name={emlpoyee.name}
                  role={emlpoyee.role}
                  img={emlpoyee.img}
                />
              );
            })}
          </div>
        </>
      ) : (
        <p>You cannot see the emlpoyees.</p>
      )}
    </div>
  );
}

export default App;
