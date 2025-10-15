import React from 'react'
import { Link } from 'react-router-dom'
import { IoDocumentTextSharp } from "react-icons/io5";
import { FaFileDownload } from "react-icons/fa";


function ResumeGenerator() {
  return (
    <>
      <div className="container-fluid">
        <h1 className="text-center mt-5">Create a job-winning Resume in minutes</h1>
        <div className="row mt-5 p-5">
          <div className="col-1"></div>
          <div className="col-4 border shadow rounded p-5 text-center">
            <h1><IoDocumentTextSharp /></h1>
            <h3>Add your informations</h3>
            <p>Add ore-written examples to each section.</p>
            <h4>Step 1</h4>
          </div>
          <div className="col-2"></div>
          <div className="col-4 border shadow rounded p-5 text-center">
            <h1><FaFileDownload /></h1>
            <h3>Download your resume</h3>
            <p>Download your finished resume.</p>
            <h4>Step 1</h4>
          </div>
          <div className="col-1"></div>
        </div>
        <div className="text-center">
          <Link to={'/form'} className='btn btn-outline-primary mb-5'>Get Started</Link>
        </div>
      </div>
    </>
  )
}

export default ResumeGenerator