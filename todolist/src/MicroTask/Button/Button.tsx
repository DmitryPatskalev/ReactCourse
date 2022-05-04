import React from "react";
import './style.css'


const ButtonName = (subscriber: string, age: number, city: string) => {
    console.log(subscriber, age, city)
}

const Button = () => {
    return <div className='body'>
        <Buttons name='BUTTON - 1' callback={() => ButtonName('I am Dima', 37, 'Minsk')}/>
        <Buttons name='BUTTON - 2' callback={() => ButtonName('I am Danik', 7, 'Minsk')}/>
    </div>

}
type ButtonType = {
    name: string
    callback: () => void
}

const Buttons: React.FC<ButtonType> = (props) => {
    const onClickHandler = () => {
        props.callback()
    }
    return <div className='button'>
        <button onClick={onClickHandler}>{props.name}</button>

    </div>
}

export default Button