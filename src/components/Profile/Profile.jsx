import profStyle from './Profile.module.css'
import Posts from "./Posts/Posts";
import Description from "./Description/Description";

function Profile() {
    return (
        <div>
            <div className={profStyle.image}>
                <img src="https://f3.upet.com/5_369emyzfpo_p.jpg"></img>
            </div>
            <Description />
            <Posts />
        </div>
    );
}

export default Profile;


