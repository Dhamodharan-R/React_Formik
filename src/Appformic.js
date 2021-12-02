
import React from 'react';
import {Formik} from "formik"

function Appformic() {
    return (
        <Formik
        initialValues= {{
            fullname: "",
            email : ""
        }

        }
        validate = {(values)=>{
            const errors ={}
            if(values.fullname.length <=5){
                errors.fullname ="Fullname should be 6 characters minimum"
            }
            else if(values.email.length <=6){
                errors.email = "email should be atleast 6 characters"
            }
            return errors;
        }}
        onSubmit={(values)=>{
            console.log("form submitted");
            console.log(values)
        }}
        >
            {({values,errors,handleChange,handleSubmit})=>{

                return(
                    <>
                        <h1>Form validation using Formic</h1>
                        <form onSubmit={handleSubmit}>
                            <div>
                                <label>Fullname :</label>
                                <input name="fullname" type="text" value={values.fullname} onChange={handleChange}/>
                                <span>{errors.fullname}</span>
                            </div>
                            <br/>
                            <div>
                                <label>email :</label>
                                <input name="email" type="text" value={values.email} onChange={handleChange}/>
                                <span>{errors.email}</span>
                            </div>
                            <br/>
                            <div>
                                <button type="submit">Submit</button>
                            </div>

                        </form>
                    </>
                )
            }}
            
        </Formik>
       
        
            
        
    )
}

export default Appformic;
