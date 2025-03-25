import React, { Fragment } from "react";
import Login from "./components/Login";
import Register from "./components/Register";
import { Routes, Route, Link} from "react-router-dom";


// 1 MASALA

// function ChildComponent({ data }) {
//   return (
//     <div className="p-4 bg-gray-100 rounded-lg shadow-lg">
//       <h2 className="text-xl font-bold mb-2">Child Component</h2>
//       <ul className="list-disc pl-5">
//         {data.map((item, index) => (
//           <li key={index} className="text-gray-700">
//             {item}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// function ParentComponent() {
//   const info = ["Apple", "Banana", "Cherry", "Grapes", "Mango"]; 

//   return (
//     <div className="p-6">
//       <h1 className="text-2xl font-bold mb-4">Parent Component</h1>
//       <ChildComponent data={info} />
//     </div>
//   );
// }

// export default ParentComponent;


// 2 MASALA

// function ChildComponent({ users }) {
//   return (
//     <div className="p-4 bg-gray-100 rounded-lg shadow-lg">
//       <h2 className="text-xl font-bold mb-2">User List</h2>
//       <ul className="list-disc pl-5">
//         {users.map((user, index) => (
//           <li key={index} className="text-gray-700">
//             <strong>Name:</strong> {user.name}, <strong>Age:</strong> {user.age}, <strong>Email:</strong> {user.email}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// function ParentComponent() {
//   const users = [    
//     { name: "samir", age: 28, email: "samir@001.com" },
//     { name: "Munir", age: 24, email: "munir@002.com" },
//     { name: "firdavs", age: 32, email: "firdavs@003.com" },
//     { name: "mehroj", age: 27, email: "mehroj@004.com" },
//     { name: "javoxir", age: 30, email: "javoxir@005.com" },
//   ];

//   return (
//     <div className="p-6">
//       <h1 className="text-2xl font-bold mb-4">Parent Component</h1>
//       <ChildComponent users={users} />
//     </div>
//   );
// }

// export default ParentComponent;



// 3 MASALA

function App() {
    return (
        <Fragment>
            <Link to= "/register page"></Link>
            <Link to= "/login page"></Link>

            <Routes>
                <Route element={<Login/>} path="/login"/>
                <Route element={<Register/>} path="/register"/>
            </Routes>
        </Fragment>
    )
}

export default App;


