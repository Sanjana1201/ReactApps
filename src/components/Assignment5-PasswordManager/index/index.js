import { Component } from "react";
import NewPassword from "../newPasswordSetup/newPasswordSetup.js"; 
import NewPasswordList from '../passwordList/passwordList.js';
import "./index.css";

class ManagePassword extends Component{
    state = {currObj : [],filterValue: [],inputBoxValue :{website: "",username:"",password:""}};
    addNewPassword =(dataObj)=>{
        this.setState((prevState)=>{
            const repeated = prevState.currObj.find(element => {
                if(element.website===dataObj.website){
                    return true;
                }
                return false;
            });
            console.log(repeated);
            if(repeated!==undefined){
                // console.log("return called");
                alert("Credentials for this website are already present");
                return ({currObj: prevState.currObj,filterValue: prevState.currObj,inputBoxValue :{website: "",username:"",password:""}});
            }
            const newArray = [...prevState.currObj,dataObj];
            return ({currObj: newArray,filterValue: newArray,inputBoxValue :{website: "",username:"",password:""}});
        });
    }

    newResult = (filterValue) =>{
        this.setState((prevState)=>{
            const newArray = prevState.currObj.filter((eachObject)=>{
                if(eachObject.website.includes(filterValue)){
                    return true;
                }
                if(eachObject.username.includes(filterValue)){
                    return true;
                }
                return false;
            });
            return({currObj: prevState.currObj,filterValue:newArray,inputBoxValue :{website: "",username:"",password:""}});
        });
    }

    makePassowrdVisible = (status)=>{
        this.setState((prevState)=>{
            return ({currObj: prevState.currObj,filterValue:prevState.filterValue,inputBoxValue :{website: "",username:"",password:""}});
        });
    }

    updatePasswordList = (deleteUserName)=>{
        this.setState((prevState)=>{
            const newList = prevState.currObj.filter((eachValue)=>{
                if(eachValue.website===deleteUserName){
                    return false;
                }
                return true;
            });
            return ({currObj: newList,filterValue: newList,inputBoxValue :{website: "",username:"",password:""}});
        })
    }

    editFields = (currItem) =>{
        const repeated = this.state.currObj.find(element => {
            if(element.website===currItem){
                return true;
            }
            return false;
        });
        this.setState((prevState) =>{
            return ({currObj: prevState.currObj,filterValue:prevState.filterValue,inputBoxValue :{website: repeated.website,username:repeated.username,password:repeated.password}});
        })
    }

    handleEditDone = (editiedObj)=>{
        this.setState((prevState)=>{
            const newList = prevState.currObj.filter((eachValue)=>{
                if(eachValue.website===editiedObj.website){
                    return false;
                }
                return true;
            });
            return ({currObj: newList,filterValue: newList,inputBoxValue :{website: "",username:"",password:""}});
        })
    }

    render(){
        return(
            <div className="password-main-container">
                <div className="password-content-container">
                    <img src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png" alt="app-logo" className="password-app-logo"/>
                    <NewPassword  renderNewlyAddedPassword = {this.addNewPassword} setValues = {this.state.inputBoxValue} editDone={this.handleEditDone}/>
                    <NewPasswordList passwordNewList = {this.state.filterValue} updateResults={this.newResult} updatePassword={this.makePassowrdVisible} updateData={this.updatePasswordList} updateExistingData={this.editFields}/>
                </div>
            </div>
        )
    }
};


export default ManagePassword;