import { useContext } from 'react';
import DataContext from '../context/DataContext';

const Header = () => {

    const { employees, selectedTeam } = useContext(DataContext);
    const teamMemberCount = employees.filter((employee) => employee.teamName === selectedTeam).length; 

    return(
        <header className="container ">
            <div className="row justify-content-center mt-2 mb-3">
                <div className="col-8">
                    <h2 >Team Members Allocation</h2>
                    <h5>{selectedTeam} has {teamMemberCount} {teamMemberCount === 1 ? "member" : "members"}</h5>
                </div>
            </div>
        </header>
    )
}

export default Header;