import { Component } from "react";
import './PasswordCard.css';



class makePasswordCards extends Component{
    state = ({currPasswordChecked : false});
    deleteItem = ()=>{
        this.props.deleteInformation(this.props.website);
    }

    editItem = () =>{
        this.props.editInformation(this.props.website);
    }

    showPasswordItem = () =>{
        this.setState((prevState)=>{
            return ({currPasswordChecked: !prevState.currPasswordChecked});
        })
        this.props.showInformation(this.props.website);
    }

    render(){
        const {website,username,password,showPassword} = this.props;
        return (
            <div className="password-card-container">
                <div className="initials-div">
                    {username[0]}
                </div>
                <div>
                    <p className="password-details">{website}<br/>{username}<br/>{showPassword || this.state.currPasswordChecked? <div>{password}</div>:<img src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png" alt="password" className="password-pattern" />}</p>
                </div>
                <div style={{display: "flex",flexDirection:"column"}}>
                    <button onClick={this.editItem} className="delete-btn"><i class="fa-solid fa-pen"></i></button>
                    <button onClick={this.showPasswordItem} className="delete-btn">{showPassword || this.state.currPasswordChecked? <i class="fa-solid fa-eye-slash"></i>:<i class="fa-solid fa-eye"></i> }</button>
                    <button onClick={this.deleteItem} className="delete-btn"><img src='https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png' alt="delete" className="delete-icon"/></button>
                </div>
            </div>
        )
    }
};


export default makePasswordCards;