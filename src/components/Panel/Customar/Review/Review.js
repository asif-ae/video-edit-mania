import React, { useContext, useState } from 'react';
import { Alert, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../../../App';
import PanelHeader from '../../Shared/PanelHeader/PanelHeader';

const Review = () => {
  const { register, handleSubmit } = useForm();
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  // Submitting Data
  const onSubmit = data => {
    const serviceData = {
      yourName: data.yourName,
      companyName: data.companyName,
      description: data.description
    }
    const serverURL = 'http://localhost:5555/addReview';
    fetch(serverURL, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(serviceData)
    })
    .then(res => {
      console.log('server side respose:', res);
    });
  }

  // Alert Function
  const AlertDismissibleExample = () => {
    const [show, setShow] = useState(true);
    if (show) {
      return (
        <Alert variant="warning" className="mt-5" onClose={() => setShow(false)} dismissible>
          <Alert.Heading>Note:</Alert.Heading>
          <ol>
            <li>This form wasn't validated perfectly. You should enter the reasonable value into it. I.e.
              <ol type="a">
                <li>Enter weight value with valid unit. I.e. 70 kg, 250 gm, 1 ltr etc.</li>
                <li>Enter price value without "$" sign or non-numeric value.</li>
              </ol>
            </li>
            <li>If you want to see the changes, you have to go the <b>"Home"</b> or the <b>"Manage Product"</b> page.</li>
          </ol>
        </Alert>
      );
    }
    return <Button varient="warning" className="d-none" onClick={() => setShow(true)}>Show Alert</Button>;
  }

  // Form Input Function
  const formInput = (formName, labelName, valueDefault) => {
    return (
      <div className="col-6 mb-3">
        <label htmlFor={formName} className="form-label">{labelName}</label>
        <input name={formName} id={formName} placeholder={`Enter ${labelName}`} className="form-control" defaultValue={valueDefault} {...register(formName, { required: true })} />
      </div>
    );
  }

  // Handle Click function will clear everything
  const handleClick = () => {
    document.getElementById("yourName").value = "";
    document.getElementById("companyName").value = "";
    document.getElementById("description").value = "";
  }

  return (
    <div>
      <PanelHeader customarPageName="Review"></PanelHeader>
      <div>
        <div className="p-5 bg-light">
          <form onSubmit={handleSubmit(onSubmit)} className="formStyle">
            <div className="p-5">
              <div className="row">
                {/* loggedInUser.name */}
                {formInput("yourName", "Your Name", loggedInUser.name)}
                {formInput("companyName", "Your Company's Name", "")}
                {formInput("description", "Description", "")}
              </div>
              <div className="d-flex justify-content-center">
                <input className="btn btn-success px-5" onClick={handleClick} type="submit" defaultValue="Submit" />
              </div>
            </div>
          </form>
          <div>
            <AlertDismissibleExample />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;