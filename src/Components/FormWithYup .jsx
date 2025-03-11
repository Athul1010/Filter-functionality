import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

//chatGPT link - https://chatgpt.com/share/6754004f-e758-800e-9b35-deb1b49d68df

const FullFormWithEnhancedValidation = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .required('Name is required')
        .min(3, 'Name must be at least 3 characters long'),
      email: Yup.string()
        .required('Email is required')
        .email('Invalid email format'), //--------> ith aaylum mathi
        // .test('contains-at', 'Email must contain @', value => value.includes('@')),
      password: Yup.string()
        .required('Password is required')
        .min(6, 'Password must be at least 6 characters long')
        .matches(/\d/, 'Password must contain at least one number')
        .matches(/[A-Z]/, 'Password must contain at least one uppercase letter'),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input
        id="name"
        name="name"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.name}
      />
      {formik.touched.name && formik.errors.name && (
        <div style={{ color: 'red' }}>{formik.errors.name}</div>
      )}
      <br />

      <label htmlFor="email">Email:</label>
      <input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
      />
      {formik.touched.email && formik.errors.email && (
        <div style={{ color: 'red' }}>{formik.errors.email}</div>
      )}
      <br />

      <label htmlFor="password">Password:</label>
      <input
        id="password"
        name="password"
        type="password"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.password}
      />
      {formik.touched.password && formik.errors.password && (
        <div style={{ color: 'red' }}>{formik.errors.password}</div>
      )}
      <br />

      <button type="submit">Submit</button>
    </form>
  );
};

export default FullFormWithEnhancedValidation;
