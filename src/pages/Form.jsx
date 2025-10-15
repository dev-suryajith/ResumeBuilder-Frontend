import React, { useState } from 'react'
import Steps from '../components/Steps'
import Preview from '../components/Preview'
import { ToastContainer, toast } from 'react-toastify';

function Form() {
  const [isResSuccess, setisResSuccess] = useState(false)
  const [resumeId, setResumeId] = useState("")
  const [userInput, setUserInput] = useState({
    profesionalData: {
      name: "",
      jobTitle: "",
      location: "",
      email: "",
      phone: "",
      gitHub: "",
      linkedIn: "",
      portfolio: ""
    },
    educationData: {
      course: "",
      college: "",
      university: "",
      year: ""

    },
    experience: {
      jobRole: "",
      company: "",
      jobLocation: "",
      duration: ""
    },
    skill: [],
    summary: ""

  }

  )

  const notify = () => toast.success("Resume Added!");
  isResSuccess && notify()
  return (
    <>
      
      {
        isResSuccess ?
          <div className="container-fluid">
            <div className="row p-5">
              <div className="col-2"></div>
              <div className="col-8">
                <Preview userInput={userInput} isResSuccess={isResSuccess} resumeId={resumeId} setUserInput={setUserInput} />

                <ToastContainer />

                
              </div>
              <div className="col-2"></div>
            </div>
          </div>
          :
          <div className="container-fluid">
            <div className="row p-5">
              <div className="col-6">
                <Steps userInput={userInput} setUserInput={setUserInput} setisResSuccess={setisResSuccess} setResumeId={setResumeId} />
              </div>
              <div className="col-6">
                <Preview userInput={userInput} />
              </div>
            </div>
          </div>
      }
    </>
  )
}

export default Form