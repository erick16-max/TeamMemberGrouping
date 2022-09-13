import {createContext, useState, useEffect} from 'react';

const DataContext = createContext({});

export const DataProvider = ({children}) => {

    const [selectedTeam, setSelectedTeam] = useState(JSON.parse(localStorage.getItem('selectedTeam')) || 'teamA');
    const [employees, setEmployees] = useState(JSON.parse(localStorage.getItem('employeeList')) || [
        {
            id: 1,
            fullName: "Erick Gege",
            designation: "JavaScript Developer",
            gender: "male",
            teamName: "teamA"
        },
        {
            id: 2,
            fullName: "Konzi Biuki",
            designation: "Django Developer",
            gender: "male",
            teamName: "teamB"
        },
        {
            id: 3,
            fullName: "Maxwell Maragi",
            designation: "Java Developer",
            gender: "male",
            teamName: "teamC"
        },
        {
            id: 4,
            fullName: "Nancy Zawadi",
            designation: "Python Developer",
            gender: "female",
            teamName: "teamA"
        },
        {
            id: 5,
            fullName: "Emily Kwekwe",
            designation: "Golang Developer",
            gender: "female",
            teamName: "teamB"
        },
        {
            id: 6,
            fullName: "John Johari",
            designation: "Node Developer",
            gender: "male",
            teamName: "teamC"
        },
    ]);

     
  

  //storing employee list to local storage when changes occurs
  useEffect(() =>{
    localStorage.setItem('employeeList', JSON.stringify(employees));
  }, [employees]);

  //storing selected team to local storage when changes occurs
  useEffect(() =>{
    localStorage.setItem('selectedTeam', JSON.stringify(selectedTeam));
  }, [selectedTeam]);

  //select team
  function handleTeamSelected (e) {
      setSelectedTeam(e.target.value)
  }

  //when card clicked
  function handleCardClicked(e) {
      const transformedEmployee = employees.map(employee => employee.id === parseInt(e.currentTarget.id)
                                  ?(employee.teamName === selectedTeam) 
                                  ? {...employee, teamName: ''} 
                                  :  {...employee, teamName: selectedTeam}  
                                  : employee                
                              );
      setEmployees(transformedEmployee);
  }


    return (  
        <DataContext.Provider value={{employees, selectedTeam, handleCardClicked, handleTeamSelected, setSelectedTeam}}>
            {children}
        </DataContext.Provider>
    );
}
 
export default DataContext;