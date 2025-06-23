import { Route, Routes } from "react-router-dom";
import Landing from "../Landing";






export const App_Router = () => {
    return (
        <Routes>
          <Route path="/*" element={<Landing/>} />
        </Routes>
    );
};