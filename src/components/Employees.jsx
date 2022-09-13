import femaleProfile from "../img/femaleProfile.jpg";
import maleProfile from "../img/maleProfile.jpg";
import { useContext } from 'react';
import DataContext from '../context/DataContext';

const Employees = () => {
  
    const {employees, selectedTeam, handleCardClicked, handleTeamSelected} = useContext(DataContext);

    return (
       <main>
        <div className="container">
            <div className="row justify-content-center mt-3 mb-3">
                <div className="col-6">
                    <select name="" id="" className="form-select form-select-lg" value={selectedTeam} onChange={handleTeamSelected}>
                        <option value="teamA">Team A</option>
                        <option value="teamB">Team B</option>
                        <option value="teamC">Team C</option>
                        <option value="teamD">Team D</option>
                    </select>
                </div>
            </div>
            <div className="row justify-content-center mt-3 mb-3">
                <div className="col-8">
                    <div className="card-collection">
                        {
                            employees.map(employee => (
                                <div className={(employee.teamName === selectedTeam ? 'card m-2 standout' : 'card m-2')} 
                                    id={employee.id}  key={employee.id} style={{cursor:"pointer"}} onClick={handleCardClicked}>

                                    {(employee.gender === 'female')?<img src={femaleProfile} alt="" className="card-img-top" />:<img src={maleProfile} alt="" className="card-img-top" />}
                                    <div className="card-body">
                                        <h6 className="card-title"><b>Full Name:</b> {employee.fullName}</h6>
                                        <p className="card-text"><b>Designation:</b> {employee.designation}</p>

                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
       </main>
    )
}

export default Employees