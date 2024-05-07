import React, { useState } from "react";
import { Modal, ModalDialog } from "@mui/joy";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { apiurl } from "./constants";

const Registration = ({ OpenType, setOpenType }) => {
  const validationSchema = Yup.object({
    username: Yup.string().required("Username is required"),
    phonenumber: Yup.string().required("Phone number is required"),
    email: Yup.string().email("Invalid email address").required("Email is required"),
    password: Yup.string().min(8, "Password must be at least 8 characters").required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm Password is required"),
  });

  // Initialize form state using useState
  const [formState, setFormState] = useState({
    username: "",
    phonenumber: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      console.log("Registration form submitted:", values);
  
      // Make API request with form values
      const apiResponse = await axios.post(`${apiurl}/registration`, {
        username: values.username,
        phoneNumber: values.phonenumber,
        emailaddress: values.email,
        password: values.password,
      });
      console.log("API Response:", apiResponse.data);
  
      if (apiResponse?.data?._id) {
        // Reset form state and close modal on successful registration
        setFormState({
          username: "",
          phonenumber: "",
          email: "",
          password: "",
          confirmPassword: "", // Assuming you also want to reset confirmPassword
        });
         // Close modal
         setOpenType(" ")
      }
    } catch (error) {
      console.error("Registration error:", error);
    } finally {
      setSubmitting(false); // Reset submit button state regardless of success or failure
    }
    
  };
  
  return (
    <div>
      <Modal open={OpenType === "Register"} onClose={() => setOpenType("")}>
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
            initialValues={formState} // Use formState as initialValues
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            
              <Form>
                <div>
                  <Field type="text" name="username" placeholder="Username" className="form-control mb-3" />
                  <ErrorMessage name="username" component="div" className="error text-danger" />
                </div>
                <div>
                  <Field type="text" name="phonenumber" placeholder="Phone Number" className="form-control mb-3" />
                  <ErrorMessage name="phonenumber" component="div" className="error text-danger" />
                </div>
                <div>
                  <Field type="email" name="email" placeholder="Email Address" className="form-control mb-3" />
                  <ErrorMessage name="email" component="div" className="error text-danger" />
                </div>
                <div>
                  <Field type="password" name="password" placeholder="Password" className="form-control mb-3" />
                  <ErrorMessage name="password" component="div" className="error text-danger" />
                </div>
                <div>
                  <Field
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    className="form-control mb-3"
                  />
                  <ErrorMessage name="confirmPassword" component="div" className="error text-danger" />
                </div>
                <button type="submit" className="btn btn-primary" >
                  Register
                </button>
              </Form>
            
          </Formik>
        </ModalDialog>
      </Modal>
    </div>
  );
};

export default Registration;
