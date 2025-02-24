import profilePic from './assets/profile.jpg';
function Card(){
    return(
        <div className="card">
            <img src={profilePic} alt="profile picture"></img>
            <h2>Faith Achieng</h2>
            <p>Computer Science Student</p>

        </div>
    );
}
export default Card