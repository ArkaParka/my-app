import descrStyle from './Description.module.css'
import profStyle from './../Profile.module.css'

function Description() {
    return (
        <div className={descrStyle.description}>
            <div className={descrStyle.descriptionAva}>
                <img src="https://sun9-10.userapi.com/sAoIOjoDIml_l2M-gPKnTeYNWHMmYPNIm5h7HQ/nJefGV2eaYM.jpg"></img>
            </div>
            <div className={descrStyle.descriptionInfo}>
                <span className={`${descrStyle.descriptionInfo} ${profStyle.title}`}>Dmitry K.</span><br/><br/>
                <span>Date of Birth: 2 january</span><br/>
                <span>City: Minsk</span><br/>
                <span>Education: BSU'11</span><br/>
                <span>Web Site: https://it-mops.com</span><br/>
            </div>
        </div>
    );
}

export default Description;


