import React, { useState } from 'react';
import { Alert, Button, Spinner } from 'react-bootstrap';
import PanelHeader from '../../Shared/PanelHeader/PanelHeader';
import { useForm } from "react-hook-form";
import axios from 'axios';

const AddService = () => {

  const { register, handleSubmit } = useForm();

  // State for storing image data
  const [imageURL, setImageURL] = useState("");

  const [uploadImageDetail, setUploadImageDetail] = useState(false);

  const onSubmit = data => {
    const serviceData = {
      serviceTitle: data.serviceTitle,
      description: data.description,
      image: imageURL
    }
    const serverURL = 'http://localhost:5555/addService';
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

  // Handle Click function will clear everything
  const handleClick = () => {
    document.getElementById("serviceTitle").value = "";
    document.getElementById("description").value = "";
  }

  // On Change Image Upload Handler
  const handleImageUpload = (event) => {
    event.target.files.length && setUploadImageDetail(true);


    const imageData = new FormData();
    imageData.set('key', 'b373b317b63fb4939f325af937793ecc');
    imageData.append('image', event.target.files[0]);

    // Axios Fetching
    axios.post('https://api.imgbb.com/1/upload', imageData)
    .then(function (response) {
      setImageURL(response.data.data.display_url);
      response.data.data.display_url.length > 0 && setUploadImageDetail(false);
      console.log(response.data.data.display_url);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

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

  const formInput = (formName, labelName) => {
    return (
      <div className="col-6 mb-3">
        <label htmlFor={formName} className="form-label">{labelName}</label>
        <input name={formName} id={formName} placeholder={`Enter ${labelName}`} className="form-control" {...register(formName, { required: true })} />
      </div>
    );
  }

  const spinner = (
    <div className="pt-2">
      <span className="pl-2"><Spinner animation="grow" variant="danger" size="sm" /></span>
      <span className="pl-2">File is uploading... Please wait...</span>
    </div>
  );

  const imageFileInput = (
    <div className="custom-file">
      <label htmlFor="customFile" className="custom-file-label">Upload Image</label>
      <input name="addPhoto" id="customFile" type="file" className="custom-file-input" onChange={handleImageUpload} />
    </div>
  );
  return (
    <div>
      <PanelHeader customarPageName="Add Service"></PanelHeader>
      <div>
        <div className="p-5 bg-light">
          <form onSubmit={handleSubmit(onSubmit)} className="formStyle">
            <div className="p-5">
              <div className="row">
                {formInput("serviceTitle", "Service Title")}
                {formInput("description", "Description")}
                <div className="col-md-6 mb-3">
                  <div className="pb-2">Image</div>
                    {/* Spinner with toggler */}
                    {
                      uploadImageDetail === false && imageFileInput
                    }
                    {
                      uploadImageDetail && spinner
                    }
                    {/* Spinner with toggler */}
                </div>
              </div>
              <div className="d-flex justify-content-center">
                <input className="btn btn-success px-5" onClick={handleClick} type="submit" value="Submit" />
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

export default AddService;