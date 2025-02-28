
function UserGreeting(props){
    // if(props.isLoggedIn){
    //     return <h2>Welcome {props.username}</h2>
    // }else{
    //   return <h2>Please log in to continue</h2>  
    // }
    return(props.isLoggedIn ? <h2 className="welcome-message">Welcome{props.username}</h2> : 
    <h2 className="login-prompt">Please log in to continue</h2>);
}
export default UserGreeting
