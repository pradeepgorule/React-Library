import React from 'react'
const isNumber = (evt) => {
    if (evt.which < 49 || evt.which > 57) {
        evt.preventDefault()
    }
}
const isAlphabet = (evt) => {
    if (evt.which < 97 || evt.which > 132) {
        return false
    }
}
const isPan = (evt) => {
    var regex = /([A-Z]){5}([0-9]){4}([A-Z]){1}$/;
    if (regex.test(evt.target.value)) {
        document.getElementById('pan_err').style.display = 'none'
        alert("ok")
    } else {
        document.getElementById('pan_err').style.display = 'block'
        return false;
    }
}
const showPass = (evt) => {
     
    var x = document.getElementById("in-password");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}
const input = (props) => {
    let inputElements = null;
    switch (props.inputtype) {
        case ('text'):
            inputElements = (<div className="form-group">
                <label >{props.label}</label>
                <input type="text" className={`form-control ${props.className}`} {...props} onKeyPress={isAlphabet} />
            </div>
            )
            break;
        case ('number'):
            inputElements = (<div className="form-group">
                <label>{props.label}</label>
                <input type="text" className={`form-control ${props.className}`}  {...props} onKeyPress={isNumber} />
            </div>
            )
            break;
        case ('radio'):
            inputElements = (<div className="form-group">
                <label>{props.label}</label>
                <input type="radio" name={props.name} className={props.className} {...props} value={props.value}></input>
            </div>
            )
            break;
        case ('checkbox'):
            inputElements = (
                <div className="form-group">
                    <label>{props.label}</label>
                    <input type="checkbox" name={props.field} className={props.className}  {...props} value={props.value}></input>
                </div>
            )
            break;
        case ('password'):
            inputElements = (
                <div className="form-group">
                    <label>{props.label}</label>
                    <input type="password" className={`form-control in-password ${props.className}`} id="in-password" {...props} />
                </div>
            )
            break;
        case ('pan'):
            inputElements = (
                <div className="form-group">
                    <label>{props.label}</label>
                    <input type="text" className={`form-control ${props.className}`}  {...props} onKeyPress={isPan} />
                    <span id="pan_err" >Invalid Pan Number</span>
                </div>
            )
            break;
        default:
            inputElements = <input {...props} />
            break;
    }
    return (
        <div>
            {inputElements}
        </div>
    )
};
export default input