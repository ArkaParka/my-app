import postsStyle from './Posts.module.css'
import profStyle from './../Profile.module.css'
import Post from './Post/Post'

function Posts() {
    return (
        <div>
            <div className={postsStyle.myPosts}>
                <div className={`${postsStyle.myPostsTitle} ${profStyle.title}`}>My posts</div>
                <div className={postsStyle.myPostsInput}><textarea placeholder=" your news..."></textarea></div>
                <div className={postsStyle.myPostsBtn}><button>Send</button></div>
            </div>
            <Post text={'It\'s our new program! Hey!'} />
            <Post text={'Hello, Guys'} />
        </div>
    );
}

export default Posts;


