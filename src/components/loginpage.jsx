import React, { useState } from "react";
import { Modal, ModalDialog } from "@mui/joy";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios"; // Import axios for API requests
import { apiurl } from "./constants";

const Loginpage = ({ openType, setOpenType }) => {
  const initialValues = {
    username: "",
    password: "",
  };

  const validationSchema = Yup.object({
    username: Yup.string().required("Username is required"),
    password: Yup.string().required("Password is required"),
  });

  const handleSubmit = async (values) => {
    console.log("Login form submitted:", values);
    let Username = values.username
    let Password = values.password
   console.log(" Username and Password are required for",`${apiurl}/login/${Username}/${Password}`)
      try {
        const apiResponse = await axios.get(
          `${apiurl}/Login/${Username}/${Password}`
        );
        if (apiResponse.data && apiResponse.data !== "Login Failed") {
          localStorage.setItem("login", apiResponse.data);
          return;
        } else {
          alert("Login Failed by one step");
        }
      } catch (error) {
        console.error("Login error:", error);
        alert("Login Failed");
      }

  };

  return (
    <div>
      <Modal open={openType==="Login"} onClose={() => setOpenType("")}>
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
            </Form>
          </Formik>
        </ModalDialog>
      </Modal>
    </div>
  );
};

export default Loginpage;
