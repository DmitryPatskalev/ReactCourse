import React from "react";
import './style.css'

const StarValue = (props: any) => {
    if (props.value === 1) {
        return <div>
            <Star selected={true}/>
            <Star selected={false}/>
            <Star selected={false}/>
            <Star selected={false}/>
            <Star selected={false}/>
        </div>
    }
    if (props.value === 2) {
        return <div>
            <Star selected={true}/>
            <Star selected={true}/>
            <Star selected={false}/>
            <Star selected={false}/>
            <Star selected={false}/>
        </div>
    }
    if (props.value === 3) {
        return <div>
            <Star selected={true}/>
            <Star selected={true}/>
            <Star selected={true}/>
            <Star selected={false}/>
            <Star selected={false}/>
        </div>
    }
    if (props.value === 4) {
        return <div>
            <Star selected={true}/>
            <Star selected={true}/>
            <Star selected={true}/>
            <Star selected={true}/>
            <Star selected={false}/>
        </div>
    }
    if (props.value === 4) {
        return <div>
            <Star selected={true}/>
            <Star selected={true}/>
            <Star selected={true}/>
            <Star selected={true}/>
            <Star selected={false}/>
        </div>
    }
    if (props.value === 5) {
        return <div>
            <Star selected={true}/>
            <Star selected={true}/>
            <Star selected={true}/>
            <Star selected={true}/>
            <Star selected={true}/>
        </div>
    } else {
        return <div>
            <Star selected={false}/>
            <Star selected={false}/>
            <Star selected={false}/>
            <Star selected={false}/>
            <Star selected={false}/>
        </div>
    }
}
export default StarValue


const Star = (props: any) => {
    if (props.selected === true) {
        return <span><button className='button1'></button></span>
    } else {
        return <span><button className='button2'></button></span>
    }
}