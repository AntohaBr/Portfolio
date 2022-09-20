import React from 'react';
import style from './InputBox.css';
/*import styleContainer from "../common/styles/Container.module.css";*/


function InputBox() {
    return (
        <div className={style.inputBlock}>
                <div >
                    <form>
                        <div >
                            <input/>
                        </div>
                        <div>
                            <input/>
                        </div>
                        <div>
                            <textarea/>
                        </div>
                    </form>
                 </div>
        </div>
    );
}

export default InputBox;