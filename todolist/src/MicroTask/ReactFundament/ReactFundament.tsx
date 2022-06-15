import React, {useState} from "react";

import './style.css'
import PostItem from "./PostItem";
import Button from "./Button";



const ReactFundament = () => {

    return <div className='App'>
        <form>
            <input type="text" placeholder='Название поста'/>
            <input type="text" placeholder='Описание поста'/>
            <Button/>
        </form>
        <PostItem/>

    </div>
}
export default ReactFundament