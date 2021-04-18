import React from 'react';
import { useForm } from 'react-hook-form';
import PanelHeader from '../../Shared/PanelHeader/PanelHeader';

const MakeAdmin = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = data => {
    const adminData = {
      adminEmail: data.adminEmail
    }
    const serverURL = 'http://localhost:5555/addAdmin';
    fetch(serverURL, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(adminData)
    })
    .then(res => {
      console.log('server side respose:', res);
    });
  }

  // Form Input Function
  const formInput = (formName, labelName) => {
    return (
      <div className="col-md-6">
        <label htmlFor={formName} className="form-label">{labelName}</label>
        <input name={formName} id={formName} placeholder={`Enter ${labelName}`} className="form-control" {...register(formName, { required: true })} />
      </div>
    );
  }

  // Handle Click function will clear everything
  const handleClick = () => {
    document.getElementById("adminEmail").value = "";
  }
  return (
    <div>
      <PanelHeader customarPageName="Make Admin"></PanelHeader>
      <div className="p-3 bg-light">
        <div className="">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="p-5">
              <div className="row p-0 m-0">
                {formInput("adminEmail", "Admin Email")}
                <div className="col-md-6">
                  <div className="d-flex justify-content-center align-items-end h-100">
                    <input className="btn btn-success px-5" onClick={handleClick} type="submit" defaultValue="Submit" />
                  </div>
                </div>
              </div>
              
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MakeAdmin;