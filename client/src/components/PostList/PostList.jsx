import React,{useEffect,useState} from 'react';
import Post from '../Post/post';
import {useSelector} from 'react-redux'

const PostList = () => {
    const posts = useSelector(state => state.posts);
    
    
    const user = useSelector(state => state.user);

    return ( 
        
       <div className="mt-4 flex flex-col lg:flex-row lg:justify-center w-full md:w-9/12 xl:w-6/12 mx-auto z-0">
        <div className=""> 
            <div className=" ">
            {posts.map(post => <Post post={post} key={post._id} />)}
            </div>
    
        </div>
        
        <div className="hidden h-0 w-0 lg:block lg:w-4/12 lg:sticky lg:top-14 lg:flex-1 lg:self-start">
            <div className="flex">
            <img className="w-16 h-16 mt-4 rounded-full border border-gray-300 border-opacity-50 shadow-sm object-cover my-auto ml-6 ring ring-white" src={user.authData.result.profilepic} />
            <div className="flex-col justify-around mt-6 ml-3">
                <div className="font-medium">
                    {user.authData.result.username}
                </div>
                <div className="text-sm text-gray-500 text-opacity-75">
                    {user.authData.result.fullname}
                </div>
            </div>
            </div>
        </div>
        
     </div>
     );
}
 
export default PostList;