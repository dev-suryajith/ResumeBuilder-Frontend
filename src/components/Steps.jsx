import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { addResumeAPI } from '../service/allAPI';
import { ToastContainer, toast } from 'react-toastify';


const steps = ['Basic Informations', 'Contacts Details', 'Education Details', 'Work Experience', 'Skills and Certifications', 'Professional Summary and Submit'];


function Steps({ userInput, setUserInput, setisResSuccess, setResumeId }) {
    const [activeStep, setActiveStep] = React.useState(0);
    const [skipped, setSkipped] = React.useState(new Set());
    const [inputSkill, setinputSkill] = useState("")

    
    const notifyError = () => toast.error("Error! Data Incomplete");

    console.log(JSON.stringify(userInput));

    const SkillsSuggestionArray = ["HTML", 'CSS', 'JAVASCRIPT', 'REACT', 'MONGODB', 'NODE.JS']

    const isStepOptional = (step) => {
        return step === 1;
    };

    const isStepSkipped = (step) => {
        return skipped.has(step);
    };

    const handleNext = () => {
        let newSkipped = skipped;
        if (isStepSkipped(activeStep)) {
            newSkipped = new Set(newSkipped.values());
            newSkipped.delete(activeStep);
        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped(newSkipped);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleSkip = () => {
        if (!isStepOptional(activeStep)) {
            // You probably want to guard against something like this,
            // it should never occur unless someone's actively trying to break something.
            throw new Error("You can't skip a step that isn't optional.");
        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped((prevSkipped) => {
            const newSkipped = new Set(prevSkipped.values());
            newSkipped.add(activeStep);
            return newSkipped;
        });
    };

    const addSKill = (inputSkill) => {
        console.log(inputSkill)
        if (inputSkill) {
            if (userInput.skill.includes(inputSkill)) {
                alert("already present")
            } else {
                setUserInput({ ...userInput, skill: [...userInput.skill, inputSkill] })
            }
        }
    }

    const removeSkill = (skill) => {
        alert(skill)
        const index = userInput.skill.indexOf(skill)
        alert(index)
        setUserInput({ ...userInput, skill: userInput.skill.filter(item => item != skill) })
    }


    const handleReset = () => {
        setActiveStep(0);
        setUserInput({
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

        })
    };

    const addResume = async () => {
        const { name, jobTitle, location, email, phone, gitHub, linkedIn, portfolio } = userInput.profesionalData
        // && jobTitle && location && email && phone && gitHub && linkedIn && portfolio
        if (name ) {
            const result = await addResumeAPI(userInput)
            // handleReset()
            // notify()
            setResumeId(result.data.id)
            setisResSuccess(true)
        }
        else {
            notifyError()
        }
    }

    const renderStepArrayContent = (stepCount) => {
        switch (stepCount) {
            case 0: return (
                <div >
                    <h1 >Personal Details</h1>
                    <div className='d-flex row p-5'>
                        <TextField value={userInput.profesionalData.name} onChange={(e) => setUserInput({ ...userInput, profesionalData: { ...userInput.profesionalData, name: e.target.value } })} id="name" label="Full Name" variant="standard" />
                        <TextField value={userInput.profesionalData.jobTitle} onChange={(e) => setUserInput({ ...userInput, profesionalData: { ...userInput.profesionalData, jobTitle: e.target.value } })} id="job-title" label="Job Title" variant="standard" />
                        <TextField value={userInput.profesionalData.location} onChange={(e) => setUserInput({ ...userInput, profesionalData: { ...userInput.profesionalData, location: e.target.value } })} id="location" label="Location" variant="standard" />

                    </div>
                </div >
            )
            case 1: return (
                <div>
                    <h1>Contact Details</h1>
                    <div className='d-flex row p-5'>
                        <TextField value={userInput.profesionalData.email} onChange={(e) => setUserInput({ ...userInput, profesionalData: { ...userInput.profesionalData, email: e.target.value } })} id="email" label="Email" variant="standard" />
                        <TextField value={userInput.profesionalData.phone} onChange={(e) => setUserInput({ ...userInput, profesionalData: { ...userInput.profesionalData, phone: e.target.value } })} id="phone-number" label="Phone Number" variant="standard" />
                        <TextField value={userInput.profesionalData.gitHub} onChange={(e) => setUserInput({ ...userInput, profesionalData: { ...userInput.profesionalData, gitHub: e.target.value } })} id="github" label="Github Profile Link" variant="standard" />
                        <TextField value={userInput.profesionalData.linkedIn} onChange={(e) => setUserInput({ ...userInput, profesionalData: { ...userInput.profesionalData, linkedIn: e.target.value } })} id="linkedin" label="LinkedIn Profile Link" variant="standard" />
                        <TextField value={userInput.profesionalData.portfolio} onChange={(e) => setUserInput({ ...userInput, profesionalData: { ...userInput.profesionalData, portfolio: e.target.value } })} id="portfolio" label="Portfolio Profile Link" variant="standard" />

                    </div>
                </div >
            )
            case 2: return (
                <div>
                    <h1> Education Details</h1>
                    <div className='d-flex row p-3'>
                        <TextField value={userInput.educationData.course} onChange={(e) => setUserInput({ ...userInput, educationData: { ...userInput.educationData, course: e.target.value } })} id="course-name" label="Course Name" variant="standard" />
                        <TextField value={userInput.educationData.college} onChange={(e) => setUserInput({ ...userInput, educationData: { ...userInput.educationData, college: e.target.value } })} id="college-name" label="College Name" variant="standard" />
                        <TextField value={userInput.educationData.university} onChange={(e) => setUserInput({ ...userInput, educationData: { ...userInput.educationData, university: e.target.value } })} id="university" label="University" variant="standard" />
                        <TextField value={userInput.educationData.year} onChange={(e) => setUserInput({ ...userInput, educationData: { ...userInput.educationData, year: e.target.value } })} id="year-of-graduation" label="Year of Graduation" variant="standard" />
                    </div>
                </div>
            )
            case 3: return (
                <div>
                    <h1> Professional Details</h1>
                    <div className='d-flex row p-3'>
                        <TextField value={userInput.experience.jobRole} onChange={(e) => setUserInput({ ...userInput, experience: { ...userInput.experience, jobRole: e.target.value } })} id="job-or-internship" label="Job or Internship" variant="standard" />
                        <TextField value={userInput.experience.company} onChange={(e) => setUserInput({ ...userInput, experience: { ...userInput.experience, company: e.target.value } })} id="company-name" label="Company Name" variant="standard" />
                        <TextField value={userInput.experience.jobLocation} onChange={(e) => setUserInput({ ...userInput, experience: { ...userInput.experience, jobLocation: e.target.value } })} id="location" label="Location" variant="standard" />
                        <TextField value={userInput.experience.duration} onChange={(e) => setUserInput({ ...userInput, experience: { ...userInput.experience, duration: e.target.value } })} id="duration" label="Duration" variant="standard" />
                    </div>
                </div>
            )
            case 4: return (
                <div>
                    <h1> Skills and Certifications</h1>
                    <div className='d-flex align-items-center justify-content-between p-3'>
                        <TextField value={inputSkill} onChange={(e) => setinputSkill(e.target.value)} sx={{ width: "600px" }} id="skill" label="Add Skill" variant="standard" />
                        <Button onClick={() => addSKill(inputSkill)} variant="outlined">Add</Button>
                    </div>
                    <div className='mt-3'>
                        <h4>Suggestions :</h4> </div>
                    <div className='d-flex flex-wrap gap-4 mt-3'>
                        {
                            SkillsSuggestionArray.map((userskill) => (
                                <Button key={userskill} onClick={() => addSKill(userskill)} variant="outlined">{userskill}</Button>
                            ))
                        }
                    </div>
                    <div className='mt-3'>
                        <h4>Add Skills :</h4>
                        <div className='d-flex flex-wrap gap-4 mt-3'>
                            {
                                userInput.skill.map((userInput) => (
                                    <span key={userInput} className='btn btn-primary me-3 d-flex align-items-center'>{userInput} <button onClick={() => removeSkill(userInput)} className='text-light btn'>✖</button></span>
                                ))
                            }
                        </div>

                    </div>
                </div>
            )
            case 5: return (
                <div>
                    <h1> Professional Summary</h1>
                    <div className='d-flex row p-3'>
                        <TextField value={userInput.summary} onChange={(e) => setUserInput({ ...userInput, summary: e.target.value })} multiline rows={4} id="summary" label="write a short summary of yourself" variant="standard" />

                    </div>
                </div>
            )

        }
    }

    return (
        <Box sx={{ width: '100%' }}>
            {/* <ToastContainer theme='dark' rtl={false} /> */}
            <Stepper activeStep={activeStep}>
                {steps.map((label, index) => {
                    const stepProps = {};
                    const labelProps = {};
                    if (isStepOptional(index)) {
                        labelProps.optional = (
                            <Typography variant="caption">Optional</Typography>
                        );
                    }
                    if (isStepSkipped(index)) {
                        stepProps.completed = false;
                    }
                    return (
                        <Step key={label} {...stepProps}>
                            <StepLabel {...labelProps}>{label}</StepLabel>
                        </Step>
                    );
                })}
            </Stepper>
            {activeStep === steps.length ? (
                <React.Fragment>
                    <Typography sx={{ mt: 2, mb: 1 }}>
                        All steps completed - you&apos;re finished
                    </Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                        <Box sx={{ flex: '1 1 auto' }} />
                        <Button onClick={handleReset}>Reset</Button>
                        <Button onClick={addResume}>Add Resume</Button>
                    </Box>
                </React.Fragment>
            ) : (
                <React.Fragment>
                    <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography>
                    {renderStepArrayContent(activeStep)}
                    <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                        <Button
                            color="inherit"
                            disabled={activeStep === 0}
                            onClick={handleBack}
                            sx={{ mr: 1 }}
                        >
                            Back
                        </Button>
                        <Box sx={{ flex: '1 1 auto' }} />
                        {isStepOptional(activeStep) && (
                            <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                                Skip
                            </Button>
                        )}
                        <Button onClick={handleNext}>
                            {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                        </Button>
                    </Box>
                </React.Fragment>
            )}
        </Box>
    )
}

export default Steps