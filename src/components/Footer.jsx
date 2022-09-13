const Footer = () => {
    var currentDate = new Date();
    return ( 
        <footer className="container">
            <div className="row justify-content-center mt-2 mb-3">
                <div className="col-8">
                    <h5>Team Allocation Application@{currentDate.getFullYear()} </h5>
                </div>   
            </div>
            
        </footer>
     );
}
 
export default Footer;