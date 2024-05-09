import React from 'react';
import { Formik, Field, ErrorMessage } from 'formik';
import Rating from '@mui/material/Rating';
import * as Yup from 'yup';
import axios from 'axios';
import { apiurl } from './constants';

const Review = ({ setReviewPage }) => { // Corrected destructuring of props
  const initialValues = {
    rating: 0,
    review: ''
  };

 const username = localStorage.getItem('login')|| "";
const usertoken = localStorage.getItem('usertoken')||""
  const validationSchema = Yup.object({
    rating: Yup.number()
      .min(1, 'Rating must be at least 1')
      .max(5, 'Rating must be less than 5')
      .required('Rating is required'),
    review: Yup.string()
      .min(10, 'Review must be at least 10 characters')
      .required('Review is required')
  });

  const handleSubmit = async (values, { resetForm }) => {
    console.log('Review form submitted:', values);

    try {
      const response = await axios.post(`${apiurl}/Review`, {
        rating: values.rating,
        review: values.review,
        username 
      },{
        headers:{
          auth:usertoken
        }
      });

      console.log('API Response:', response.data);

      // Optionally reset the form after successful submission
      resetForm();
      setReviewPage(false);
    } catch (error) {
      console.error('Error submitting review:', error);
    }
  };

  const handleCancel = () => {
    setReviewPage(false); // Corrected function call to setReviewPage
    // Implement cancellation logic if needed
  };

  return (
    <div>
      <div className="EditForm">
        <h2>Write a Review</h2>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ handleSubmit, handleChange, values }) => (
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="rating">Rating:</label>
                {/* Properly handle Rating component's onChange */}
                <Rating
                  name="rating"
                  value={values.rating}
                  onChange={(event, newValue) => {
                    handleChange({
                      target: {
                        name: 'rating',
                        value: newValue
                      }
                    });
                  }}
                />
                <ErrorMessage name="rating" component="div" className="text-danger" />
              </div>
              <div className="mb-3">
                <label htmlFor="review">Review:</label>
                <Field
                  as="textarea"
                  className="form-control form-control-lg"
                  id="review"
                  name="review"
                  placeholder="Write your review here..."
                  rows="5"
                />
                <ErrorMessage name="review" component="div" className="text-danger" />
              </div>

              <button type="submit" className="btn btn-primary mx-1">
                Submit
              </button>
              <button type="button" className="btn btn-secondary mx-2" onClick={handleCancel}>
                Cancel
              </button>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Review;
