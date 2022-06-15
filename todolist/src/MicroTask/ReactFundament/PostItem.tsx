import React, {useState} from "react";
import './style.css'


const PostItem = () => {
    const [post, setPost] = useState ([
        {id:1, title:'Java Script', body:'description'},
        {id:2, title:'React', body:'description'},
        {id:3, title:'Type Script', body:'description'}
    ])
    const listTask = post.map((post, key)=>{
        return <div key={key}>
            <div className='post'>
                <div className='post_container'></div>
                <strong>{post.id} - {post.title}</strong>
                <div>
                    {post.body}
                </div>
                <div className='post_button'>
                    <button>Remove</button>
                </div>
            </div>
        </div>
    })
    return <div>
        <h1 style={{textAlign:'center'}}>Список Постов</h1>
        {listTask}
    </div>

}
export default PostItem