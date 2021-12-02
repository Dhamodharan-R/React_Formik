
import React  from "react";


class App extends React.Component{
    constructor(props){
      super(props);
      this.state={
          fullname: "",
          email :"",
          role: "",
          coverletter: "",
          Tc : "true",
          errors:{
            fullname: "",
            email :"",
            coverletter: "",
            Tc : ""
          }
      }
  
    }

    handleSubmit =(event)=>{
        event.preventDefault();
        console.log(this.state);
    }


    handleChange = ({target:{value,name,type,checked}})=>{
        if(type === "checkbox") value = checked;
        
const errors = this.state.errors;

        switch (name) {
            case "fullname":{
                if(value.length <=5){
                    errors.fullname ="Name must be atleast 5 characters"
                }
                else{
                    errors.fullname = ""
                }
                
                break;
            }
            case "email":{
                if(value.length <=5){
                    errors.email ="emailId must be atleast 5 characters"
                }
                else{
                    errors.email= ""
                }
                
                break;
            }
            case "coverletter":{
                if(value.length <=10){
                    errors.coverletter ="coverletter must be atleast 10 characters"
                }
                else{
                    errors.coverletter= ""
                }
                
                break;
            }
            case "Tc":{
                if(!value){
                    errors.Tc ="Terms should be agreed"
                }
                else{
                    errors.Tc= ""
                }
                
                break;
            }
            
        }

        this.setState({[name]:value,errors})
       /*  console.log(errors); */
    }

    render(){
      
      return (
        <>
        <h1>React Forms</h1>
        <form onSubmit={this.handleSubmit}>
          <div>
          <label>Full Name</label>
            <input
            name ="fullname"
            type="text"
            value={this.state.fullname}
            onChange={this.handleChange}
            />
            <span>{this.state.errors.fullname}</span>
          </div>
          <br/>

          <div>
            <label>Email </label>
            <input 
            name ="email"
            type="email"
            value={this.state.email}
            onChange={this.handleChange}
            />
            <span>{this.state.errors.email}</span>
          </div>
          
          <br/>

          <div>
            <label>RoleApplied </label>
            <select
            name ="role"
            value={this.state.role}
            onChange={this.handleChange}
            >
              <option value="react">React developer</option>
              <option value="node">Node developer</option>
              <option value="mern">MERN developer</option>
            </select>
          </div>
          <br/>
          <div>
            <label>Cover letter </label>
            <textarea 
            name ="coverletter"
            value={this.state.coverletter}
            onChange={this.handleChange}
            ></textarea>
            <span>{this.state.errors.coverletter}</span>
          </div>
          <br/>
          <div>
          
            <input 
            name ="Tc"
            type="checkbox"
            checked={this.state.Tc}
            onChange={this.handleChange}
            />
            <label>Agree Terms and Conditions </label>
            <span>{this.state.errors.Tc}</span>
          </div>
          <br/>
          <div>
              <button type="submit"> Submit</button>
          </div>
  
  
  
        </form>
        </>
      )
  
    }
  }
  export default App;