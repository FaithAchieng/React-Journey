import profilePic from './assets/profile.jpg';
function Card(){
    return(
        <div className="card">
            <img className="card-image" src={profilePic} alt="profile picture"></img>
            <h2 className="card-title">Faith Achieng</h2>
            <p className="card-text">Computer Science Student, Currently doing my attachment.

            </p>

        </div>
    );
}
export default Card