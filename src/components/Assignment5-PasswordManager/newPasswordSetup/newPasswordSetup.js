import { Component } from "react";
import './newPasswordSetup.css';

class SetNewPassword extends Component{
    // state = ({currWebsite: document.getElementById("website").value, currUsername: document.getElementById("username").value,currPassword: document.getElementById("password").value});
    addNewPassword = ()=>{
        var re=/^((https?|ftp|smtp):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/;
        if(document.getElementById("website").value===""  || document.getElementById("username").value==="" || document.getElementById("password").value===""){
            alert("Enter all fields");
        }
        else if(!re.test(document.getElementById('website').value)){
            alert("Enter valid website");
        }
        else{
            const newData = {
                website: document.getElementById("website").value,
                username: document.getElementById("username").value,
                password: document.getElementById("password").value,
            }
            document.getElementById("website").value = "";
            document.getElementById("username").value="";
            document.getElementById("password").value="";
            return this.props.renderNewlyAddedPassword(newData);
        }
    }

    addValue = ()=>{
        document.getElementById("website").value = this.props.setValues.website;
        document.getElementById("username").value=  this.props.setValues.username;
        document.getElementById("password").value= this.props.setValues.password;

    }

    changeValues =(currValue)=>{
        return this.props.editDone(currValue);
    }

    render(){
        if(this.props.setValues.website!==""){
            document.getElementById("website").value = this.props.setValues.website;
            document.getElementById("username").value=  this.props.setValues.username;
            document.getElementById("password").value= this.props.setValues.password;
            this.changeValues(this.props.setValues);
        }
        return (
            <div className="password-setup">
                <div className="password-form">
                    <h2>Add new Password</h2>
                    <div className="password-search-bar">
                        <img src = "https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png" alt="website" className="password-search-img"/>
                        <input type="text" placeholder="Enter Website" id="website" className="password-input" />
                    </div>
                    <div className="password-search-bar">
                        <img src = "https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png" alt = "username" className="password-search-img"/>
                        <input type="text" placeholder="Enter Username" id="username" className="password-input"/>
                    </div>
                    <div className="password-search-bar">
                        <img src = "https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png" alt = "password" className="password-search-img"/>
                        <input type="password" placeholder="Enter Password" id="password" className="password-input"/>
                    </div>
                    <button className="add-btn" onClick={this.addNewPassword}>Add</button>
                </div>
                <img src="https://assets.ccbp.in/frontend/react-js/password-manager-sm-img.png" alt="password manager" className="password-manager" />
            </div>
        )
    }
}

export default SetNewPassword;