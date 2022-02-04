import React from 'react';
import { useField } from 'formik';

const TextField = (props) => {
    const [field, meta] = useField(props.name);
    return(
    <>
     <div className="form-group">
      <input type="text" {...field} {...props} className="form-control"/>
      <span className="error-msg">{meta.error}</span>
      </div>
    </>
    )
  };

export default TextField;
