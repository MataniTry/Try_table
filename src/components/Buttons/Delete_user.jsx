import React from "react";
import btn from './Buttons.module.css'


const Del_button = () =>{
    return (
        <div>
            <button className={btn.btn} name="del_btn" value="clicked" type="button">Удалить ученика</button>
        </div>

    )
}

export default Del_button;