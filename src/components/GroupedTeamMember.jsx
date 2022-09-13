import { useState, useContext, useEffect} from "react";
import DataContext from "../context/DataContext";

function GroupedTeamMember() {
    const {employees, selectedTeam, setSelectedTeam} = useContext(DataContext);
    const [groupedEmployees, setGroupedEmployees] = useState(groupedEmployeesMember());
    function groupedEmployeesMember(){
        var teams = [];
        
        var teamAMembers = employees.filter(employee => employee.teamName === "teamA");
        var teamA = {team:"teamA", members:teamAMembers, collapse: selectedTeam.teamName === "teamA" ? false : true}
        teams.push(teamA);

        var teamBMembers = employees.filter(employee => employee.teamName === "teamB");
        var teamB = {team:"teamB", members:teamBMembers, collapse: selectedTeam.teamName === "teamB" ? false : true}
        teams.push(teamB);

        var teamCMembers = employees.filter(employee => employee.teamName === "teamC");
        var teamC = {team:"teamC", members:teamCMembers, collapse: selectedTeam.teamName === "teamC" ? false : true}
        teams.push(teamC);

        var teamDMembers = employees.filter(employee => employee.teamName === "teamD");
        var teamD = {team:"teamD", members:teamDMembers, collapse: selectedTeam.teamName === "teamD" ? false : true}
        teams.push(teamD);

        return teams;
    }


    function handleTeamClicked(event) {
        var newGroupedData = groupedEmployees.map((groupedData) => groupedData.team === event.currentTarget.id ? { ...groupedData, collapse: !groupedData.collapse } : groupedData);
        setGroupedEmployees(newGroupedData);
        setSelectedTeam(event.currentTarget.id)
    }
   
    return ( 
        <main className="container">
            {
                groupedEmployees.map(item => {
                    return (
                        <div className="card mt-2" key={item.team} style={{cursor:'pointer'}} >
                            <h4 id={item.team} className="card-header text-secondary bg-white" onClick={handleTeamClicked}>
                                Team Name: {item.team}
                            </h4>
                            <div id={"collapse_"+ item.team} className={item.collapse === true ? 'collapse' : ''}>
                                <hr />
                                {
                                    item.members.map(member => {
                                        return (
                                            <div className="mt-2">
                                                <h5 className="card-title mt-2">
                                                    <span className="text-dark">Full Name: {member.fullName}</span>
                                                </h5>
                                                <p > Designation:{member.designation}</p>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        
                    )
                })
            }
        </main>
     );
}
 
export default GroupedTeamMember;