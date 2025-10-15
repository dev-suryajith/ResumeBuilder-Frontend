import React from 'react'
import { Link } from 'react-router-dom'

function LandingPage() {
  return (
    <>
      <section style={{ width: '100%', height: '450px', backgroundImage: "url(https://images.pexels.com/photos/3760072/pexels-photo-3760072.jpeg)", backgroundAttachment: 'fixed', backgroundSize: 'cover' }}>
        <div className="container row pt-5">
          <div className="col-12 col-md-4"></div>
          <div className="col-12 col-md-4 py-5 rounded my-5 text-center">
            <h1>Design to get hired</h1>
            <h3>Your skills, your story, you next job - all in one.</h3>
            <Link to={'/resume'}><button className='btn btn-primary'>Build you resume</button></Link>
          </div>
          <div className="col-12 col-md-4"></div>
        </div>
      </section>

      {/* Tools */}

      <section className='px-5'>
        <h1 className="text-center p-5">Tools</h1>
        <div className="row align-items-center">
          <div className="col-12 col-md-6">
            <h3>Resume</h3>
            <p>Create unlimited new resumes and easily edit them afterward.</p>

            <h3>Cover Letter</h3>
            <p>Easily write professional cover letters.</p>

            <h3>Jobs</h3>
            <p>Automatically receive new and relevent job posting.</p>

            <h3>Application</h3>
            <p>Effortlessly manage and track your job applications in an organized manner.</p>
          </div>
          <div className="col-12 col-md-6">
            <img className='w-75 ms-5' src="https://cdn-images.zety.com/images/zety/landings/builder/in/resume-builder-template@3x.png" alt="" />
          </div>
        </div>
      </section>

      <section style={{ width: '100%', height: '450px', backgroundImage: "url(https://images.pexels.com/photos/5922530/pexels-photo-5922530.jpeg)", backgroundAttachment: 'fixed', backgroundSize: 'cover' }}>

      </section>

      {/* testimonial */}
      <section className='px-5'>
        <h1 className="text-center p-5">Testimony</h1>
        <div className="row align-items-center">
          <div className="col-12 col-md-6">
            <h3>Trusted by professionals worldwide</h3>
            <p className='text-left fs-5'>Trusted by professionals worldwide.
              At LiveCareer, we don't just help you create résumés — we help you land the job. Whether you're a seasoned professional or just starting out, our tools are designed to get results.
              <br /><br />
              In fact, users who used LiveCareer reported getting hired an average of 48 days faster.
              <br /><br />
              Join thousands of job-seekers who’ve fast-tracked their careers with a résumé that truly stands out.</p>
          </div>
          <div className="col-12 col-md-6">
            <div className="row">
              <div className="col-3"><img className='w-100 my-2 rounded' src="https://images.pexels.com/photos/3845987/pexels-photo-3845987.jpeg" alt="" /></div>
              <div className="col-3"><img className='w-100 my-2 rounded' src="https://images.pexels.com/photos/3767405/pexels-photo-3767405.jpeg" alt="" /></div>
              <div className="col-3"><img className='w-100 my-2 rounded' src="https://images.pexels.com/photos/6476253/pexels-photo-6476253.jpeg" alt="" /></div>
              <div className="col-3"><img className='w-100 my-2 rounded' src="https://images.pexels.com/photos/7328501/pexels-photo-7328501.jpeg" alt="" /></div>
            </div>
            <div className="row">
              <div className="col-3"><img className='w-100 my-2 rounded' src="https://images.pexels.com/photos/3767405/pexels-photo-3767405.jpeg" alt="" /></div>
              <div className="col-3"><img className='w-100 my-2 rounded' src="https://images.pexels.com/photos/3845987/pexels-photo-3845987.jpeg" alt="" /></div>
              <div className="col-3"><img className='w-100 my-2 rounded' src="https://images.pexels.com/photos/7328501/pexels-photo-7328501.jpeg" alt="" /></div>
              <div className="col-3"><img className='w-100 my-2 rounded' src="https://images.pexels.com/photos/6476253/pexels-photo-6476253.jpeg" alt="" /></div>
            </div>
            <div className="row">
              <div className="col-3"><img className='w-100 my-2 rounded' src="https://images.pexels.com/photos/6476253/pexels-photo-6476253.jpeg" alt="" /></div>
              <div className="col-3"><img className='w-100 my-2 rounded' src="https://images.pexels.com/photos/3767405/pexels-photo-3767405.jpeg" alt="" /></div>
              <div className="col-3"><img className='w-100 my-2 rounded' src="https://images.pexels.com/photos/7328501/pexels-photo-7328501.jpeg" alt="" /></div>
              <div className="col-3"><img className='w-100 my-2 rounded' src="https://images.pexels.com/photos/3845987/pexels-photo-3845987.jpeg" alt="" /></div>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}

export default LandingPage