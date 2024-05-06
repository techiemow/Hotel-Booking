import React from "react";
import { Modal, ModalDialog } from "@mui/joy";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { apiurl } from "./constants";

const Registration = ({ openType, setOpenType }) => {
  const validationSchema = Yup.object({
    username: Yup.string().required("Username is required"),
    phonenumber: Yup.string().required("Phone number is required"),
    email: Yup.string().email("Invalid email address").required("Email is required"),
    password: Yup.string().min(8, "Password must be at least 8 characters").required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm Password is required"),
  });

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      console.log("Registration form submitted:", values);
      const apiResponse = await axios.post(`${apiurl}/registration`, values);
      console.log(apiResponse.data, "apiResponse.");

      if (apiResponse.data._id) {
        setOpenType("");
      }
    } catch (error) {
      console.error("Registration error:", error);
      
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div>
      <Modal open={openType === "Register"} onClose={() => setOpenType("")}>
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
            initialValues={{
              username: "",
              password: "",
              confirmPassword: "",
              phonenumber: "",
              email: "",
            }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form>
                <div>
                  <Field
                    type="text"
                    name="username"
                    placeholder="Username"
                    className="form-control mb-3"
                  />
                  <ErrorMessage name="username" component="div" className="error  text-danger" />
                </div>
                <div>
                  <Field
                    type="text"
                    name="phonenumber"
                    placeholder="Phone Number"
                    className="form-control mb-3"
                  />
                  <ErrorMessage name="phonenumber" component="div" className="error  text-danger" />
                </div>
                <div>
                  <Field
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    className="form-control mb-3"
                  /> 
                  <ErrorMessage name="email" component="div" className="error  text-danger" />
                </div>
                <div>
                  <Field
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="form-control mb-3"
                  />
                  <ErrorMessage name="password" component="div" className="error  text-danger" />
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
                <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
                  Register
                </button>
              </Form>
            )}
          </Formik>
        </ModalDialog>
      </Modal>
    </div>
  );
};

export default Registration;
