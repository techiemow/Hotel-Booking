import React, { useState } from "react";
import { Modal, ModalDialog } from "@mui/joy";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios"; // Import axios for API requests
import { apiurl } from "./constants";

const Loginpage = ({ OpenType, setOpenType }) => {
  const initialValues = {
    username: "",
    password: "",
  };

  const validationSchema = Yup.object({
    username: Yup.string().required("Username is required"),
    password: Yup.string().required("Password is required"),
  });


  
  const handleSubmit = async (values) => {
    const { username, password } = values;
  
    try {
      const apiResponse = await axios.get(`${apiurl}/Login/${username}/${password}`);
  
      console.log(apiResponse)
      if (apiResponse.data) {
        localStorage.setItem('login', apiResponse.data.username);

        const usertoken = apiResponse.data.token
        localStorage.setItem('token', usertoken);

       setOpenType(" ")
      
        
      } else {
        alert("Login Failed: " + apiResponse.data.error);
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("Login Failed");
    }
    
  };
  
  return (
    <div>
      <Modal open={OpenType ==="Login"} onClose={() => setOpenType("")}>
        <ModalDialog
          minWidth={600}
          aria-labelledby="nested-modal-title"
          aria-describedby="nested-modal-description"
          sx={(theme) => ({
            [theme.breakpoints.only("xs")]: {
              top: "unset",
              bottom: 0,
              left: 0,
              right: 0,
              borderRadius: 0,
              transform: "none",
            },
          })}
        >
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            <Form>
              <div>
                <Field
                  type="text"
                  name="username"
                  placeholder="Username"
                  class="form-control mb-5"
                />
                <ErrorMessage name="username" component="div" className="error text-danger" />
              </div>
              <div>
                <Field
                  type="password"
                  name="password"
                  placeholder="Password"
                  class="form-control mb-5"
                />
                <ErrorMessage name="password" component="div" className="error text-danger" />
              </div>
              <button type="submit" className="btn btn-primary" >Login</button>
              <button type="submit" className="btn btn-danger mx-4" onClick={()=>setOpenType(" ")} >cancel</button>
            </Form>
          </Formik>
        </ModalDialog>
      </Modal>
    </div>
  );
};

export default Loginpage;
