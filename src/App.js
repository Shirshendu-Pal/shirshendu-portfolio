import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import toast, { Toaster } from 'react-hot-toast';

function App() {
  return (
    <>
    <Routes>
      <Route path="*" element={<Home />} />
    </Routes>
     <Toaster
     position="top-center"
     reverseOrder={false}
     //  gutter={3}
     toastOptions={{
       // Define default options
       className: "",
       duration: 5000,
     }}
   />
   </>
  );
}

export default App;
