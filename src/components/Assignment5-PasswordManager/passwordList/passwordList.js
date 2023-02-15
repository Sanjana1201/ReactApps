import { Component } from "react";
import PasswordCard from './PasswordCard/PasswordCard.js';
import './passwordList.css';


class RenderPasswords extends Component{
    state = ({isChecked: false});
    searchPassword = (e)=>{
        console.log(e.target.value);
        return this.props.updateResults(e.target.value);
    }

    handleChange = (e)=>{
        this.setState((prevState) =>({isChecked : e.target.checked}));
        return this.props.updatePassword(e.target.checked);
    }

    handleDelete = (currUsername)=>{
        return this.props.updateData(currUsername);
    }

    handleEdit = (currWebsite)=>{
        return this.props.updateExistingData(currWebsite);
    }
    
    handleEyeIcon = (currPassword) =>{
        this.setState((prevState)=>{
            return ({isChecked: prevState.isChecked});
        })
    }

    render(){
        const AllPasswordComponents = this.props.passwordNewList.map((eachPassword)=>{
            const {website,username,password} = eachPassword;
            return <PasswordCard website = {website} username = {username}  password = {password} showPassword={this.state.isChecked} deleteInformation={this.handleDelete} editInformation={this.handleEdit} showInformation={this.handleEyeIcon}/>
        });
        const numberOfPasswords = AllPasswordComponents.length;
        return (
            <div className="password-list">
                <div className="password-list-navbar">
                    <div className="your-password">
                        <h2>Your password</h2>
                        <div className="display-number">{numberOfPasswords}</div>
                    </div>
                    <div className="search-bar" id="searchBar">
                        <img src = "https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png" alt="website" className="search-img"/>
                        <input type="text" placeholder="Search" onChange={this.searchPassword}/>
                    </div>
                </div>
                <div className="password-background">
                    <div className="password-checkbox">
                        <input type="checkbox" id="password1" name="password1" value="Password" className="show-password-checkbox" onChange={this.handleChange}/>
                        <label htmlFor="password1">Show Passwords</label>
                    </div>
                    {numberOfPasswords===0? 
                    <div style={{display: "flex" ,flexDirection: "column",alignItems: "center"}}>
                        <img src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png" alt="no-passwords" className="no-password-img"/>
                        <p className="no-password"><b>No Passwords</b></p>
                    </div>
                    :<div className="card-container">{AllPasswordComponents}</div>}
                </div>
            </div>
        )
    }
}

export default RenderPasswords;