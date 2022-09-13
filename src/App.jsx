import Header from "./components/Header";
import Employees from "./components/Employees";
import Footer from "./components/Footer";
import GroupedTeamMember from "./components/GroupedTeamMember";
import Navbar from "./components/Navbar";
import NotFound from "./components/NotFound";
import './app.css'
import { DataProvider } from "./context/DataContext";

import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'


function App() {

  return (
    
      <DataProvider>
        <Router>
          
          <Navbar/>
          <Header/>

          <Routes>
            <Route path="/"
                  element= {<Employees/>}>
            </Route>
            <Route path="/GroupedTeamMember" element={<GroupedTeamMember/>}>
            </Route>
            <Route path="/*" element={<NotFound/>}>
            </Route>
          
          </Routes>

          <Footer/>
        </Router>
      </DataProvider>
    
  );
}

export default App;
