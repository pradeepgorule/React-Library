import React, { Component } from 'react'
class Button extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
    }
    SubmitForm = (props) => {
        var inele = document.getElementsByTagName('input');
        console.log("length", inele.length)
        // LOOP THROUGH VALIDATION IN EACH ELEMENT.
        for (let i = 0; i < inele.length; i++) {
            if (inele[i].type == "radio") {
                if (inele[i].checked == false) {
                    alert("please select radio")
                    return false
                }
            }
            if (inele[i].value == '') {
                alert("All fields are mandatory")
                return false
            }
        }
        this.props.onSubmit();
    }
    render() {
        return (
            <button type="button" className={`btn ${this.props.className}`} onClick={this.SubmitForm} >{this.props.label}</button>
        )
    }
}
export default Button