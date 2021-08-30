import React, { useState } from 'react'
import {
    BrowserRouter as

        Link
} from "react-router-dom"

const Registration = () => {
    let obj = {
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        confirm_password: "",
    }
    const [user, setUser] = useState(obj
    );
    let name, value;
    const getUserData = (e) => {
        name = e.target.name;
        value = e.target.value;
        setUser({ ... user, [name]: value });
    }

    const postData = async (e) => {
        e.preventDefault();
        const {
            first_name,
            last_name,
            email,
            password,
            confirm_password,
        } = user;

        if( first_name&&
            last_name&&
            email&&
            password&&
            confirm_password){
                const resp = await fetch('https://madfoodie-71d76-default-rtdb.firebaseio.com/madfoodie.json', {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(
                        {
                            first_name,
                            last_name,
                            email,
                            password,
                            confirm_password,
                        }
                    )
                });
                if (resp) {
                    setUser(
                        {
                            first_name: "",
                            last_name: "",
                            email: "",
                            password: "",
                            confirm_password: "",
        
                        }
                    )
        
                    alert("Data Successfully stored.")
                }

        }
        else{
            alert("Please fill all details\n");

        }

       




    }

    return (
        <div>
            <link href="//netdna.bootstrapcdn.com/bootstrap/3.1.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css" />
            <script src="//netdna.bootstrapcdn.com/bootstrap/3.1.0/js/bootstrap.min.js"></script>
            <script src="//code.jquery.com/jquery-1.11.1.min.js"></script>


            <div className="container">
                <div className="row centered-form" >
                    <div className="col-xs-12 col-sm-8 col-md-4 col-sm-offset-2 col-md-offset-4" Method="POST">
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                <h3 className="panel-title">Please sign up for Mad_Foodie </h3>
                            </div>
                            <div className="panel-body">
                                <form role="form">
                                    <div className="row">
                                        <div className="col-xs-6 col-sm-6 col-md-6">
                                            <div className="form-group">
                                                <input type="text" name="first_name" id="first_name" className="form-control input-sm" placeholder="First Name" value={user.first_name} onChange={getUserData} />
                                            </div>
                                        </div>
                                        <div className="col-xs-6 col-sm-6 col-md-6">
                                            <div className="form-group">
                                                <input type="text" name="last_name" id="last_name" className="form-control input-sm" placeholder="Last Name" value={user.last_name} onChange={getUserData} />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <input type="email" name="email" id="email" className="form-control input-sm" placeholder="Email Address" value={user.email} onChange={getUserData} />
                                    </div>

                                    <div className="row">
                                        <div className="col-xs-6 col-sm-6 col-md-6">
                                            <div className="form-group">
                                                <input type="password" name="password" id="password" className="form-control input-sm" placeholder="Password" value={user.password} onChange={getUserData} />
                                            </div>
                                        </div>
                                        <div className="col-xs-6 col-sm-6 col-md-6">
                                            <div className="form-group">
                                                <input type="password" name="password_confirmation" id="password_confirmation" className="form-control input-sm" placeholder="Confirm Password" value={user.confirm_password} onChange={getUserData} />
                                            </div>
                                        </div>
                                    </div>

                                    <input type="submit" value="Register" className=" btn-info btn-block " onClick={postData} /><br />
                                    <Link to="/" className="link-login">Already have an account</Link>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Registration








