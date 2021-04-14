import postStyle from './Post.module.css'

function Post(props) {
    return (
        <div className={postStyle.newPost}>
            <div className={postStyle.newPostAva}>
                <img src="https://www.publicdomainpictures.net/pictures/310000/velka/yellow-circle.png"></img>
            </div>
            <div className={postStyle.newPostContent}>{props.text}</div>
        </div>
    );
}

export default Post;


