import React, { useEffect, useState } from 'react';
import { FaEdit } from "react-icons/fa";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { ToastContainer, toast } from 'react-toastify';
import { getResumeAPI, updateResumeAPI } from '../service/allAPI';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 850,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    maxHeight: "90vh",
    overflowY: "auto"
};

function Edit({ resumeId, setUserInput }) {
    const [resumeData, setResumeData] = useState({
        id: "",
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
    });

    const [inputSkill, setInputSkill] = useState("");
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const getEditResume = async (id) => {
        try {
            const result = await getResumeAPI(id);
            console.log("Fetched Resume Data:", result.data);
            setResumeData(result.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        if (resumeId) getEditResume(resumeId);
    }, [resumeId]);

    // Add skill
    const addSkill = (skill) => {
        if (!skill) return;
        if (resumeData.skill.includes(skill)) {
            alert("Skill already present");
            return;
        }
        setResumeData(prev => ({
            ...prev,
            skill: [...prev.skill, skill]
        }));
        setInputSkill(""); // Clear input
    };

    // Remove skill
    const removeSkill = (skillToRemove) => {
        setResumeData(prev => ({
            ...prev,
            skill: prev.skill.filter(s => s !== skillToRemove)
        }));
    };

    const updateResume = async () =>{
        const result = await updateResumeAPI(resumeId, resumeData)
        alert(result.status)
        // alert(result.status)
        if(result.status === 200){
            console.log("hello")
            setUserInput(result.data)
            handleClose()
        }
        
    }

    const SkillsSuggestionArray = ["HTML", 'CSS', 'JAVASCRIPT', 'REACT', 'MONGODB', 'NODE.JS'];

    return (
        <>
        {/* <ToastContainer theme='dark' rtl={false} /> */}
            <button onClick={handleOpen} className='btn btn-primary d-flex justify-content-center align-items-center btn-lg'>
                <FaEdit />
            </button>

            <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Edit Your Resume
                    </Typography>

                    <div id="modal-modal-description" sx={{ mt: 2 }}>
                        {/* Personal Details */}
                        <h1>Personal Details</h1>
                        <div className='d-flex row p-5'>
                            <TextField value={resumeData.profesionalData.name} onChange={(e) => setResumeData({...resumeData, profesionalData:{...resumeData.profesionalData, name:e.target.value}})} label="Full Name" variant="standard" />
                            <TextField value={resumeData.profesionalData.jobTitle} onChange={(e) => setResumeData({...resumeData, profesionalData:{...resumeData.profesionalData, jobTitle:e.target.value}})} label="Job Title" variant="standard" />
                            <TextField value={resumeData.profesionalData.location} onChange={(e) => setResumeData({...resumeData, profesionalData:{...resumeData.profesionalData, location:e.target.value}})} label="Location" variant="standard" />
                        </div>

                        {/* Contact Details */}
                        <h1>Contact Details</h1>
                        <div className='d-flex row p-5'>
                            <TextField value={resumeData.profesionalData.email} onChange={(e) => setResumeData({...resumeData, profesionalData:{...resumeData.profesionalData, email:e.target.value}})} label="Email" variant="standard" />
                            <TextField value={resumeData.profesionalData.phone} onChange={(e) => setResumeData({...resumeData, profesionalData:{...resumeData.profesionalData, phone:e.target.value}})} label="Phone Number" variant="standard" />
                            <TextField value={resumeData.profesionalData.gitHub} onChange={(e) => setResumeData({...resumeData, profesionalData:{...resumeData.profesionalData, gitHub:e.target.value}})} label="Github Profile Link" variant="standard" />
                            <TextField value={resumeData.profesionalData.linkedIn} onChange={(e) => setResumeData({...resumeData, profesionalData:{...resumeData.profesionalData, linkedIn:e.target.value}})} label="LinkedIn Profile Link" variant="standard" />
                            <TextField value={resumeData.profesionalData.portfolio} onChange={(e) => setResumeData({...resumeData, profesionalData:{...resumeData.profesionalData, portfolio:e.target.value}})} label="Portfolio Profile Link" variant="standard" />
                        </div>

                        {/* Education */}
                        <h1>Education Details</h1>
                        <div className='d-flex row p-3'>
                            <TextField value={resumeData.educationData.course} onChange={(e) => setResumeData({...resumeData, educationData:{...resumeData.educationData, course:e.target.value}})} label="Course Name" variant="standard" />
                            <TextField value={resumeData.educationData.college} onChange={(e) => setResumeData({...resumeData, educationData:{...resumeData.educationData, college:e.target.value}})} label="College Name" variant="standard" />
                            <TextField value={resumeData.educationData.university} onChange={(e) => setResumeData({...resumeData, educationData:{...resumeData.educationData, university:e.target.value}})} label="University" variant="standard" />
                            <TextField value={resumeData.educationData.year} onChange={(e) => setResumeData({...resumeData, educationData:{...resumeData.educationData, year:e.target.value}})} label="Year of Graduation" variant="standard" />
                        </div>

                        {/* Experience */}
                        <h1>Professional Details</h1>
                        <div className='d-flex row p-3'>
                            <TextField value={resumeData.experience.jobRole} onChange={(e) => setResumeData({...resumeData, experience:{...resumeData.experience, jobRole:e.target.value}})} label="Job or Internship" variant="standard" />
                            <TextField value={resumeData.experience.company} onChange={(e) => setResumeData({...resumeData, experience:{...resumeData.experience, company:e.target.value}})} label="Company Name" variant="standard" />
                            <TextField value={resumeData.experience.jobLocation} onChange={(e) => setResumeData({...resumeData, experience:{...resumeData.experience, jobLocation:e.target.value}})} label="Location" variant="standard" />
                            <TextField value={resumeData.experience.duration} onChange={(e) => setResumeData({...resumeData, experience:{...resumeData.experience, duration:e.target.value}})} label="Duration" variant="standard" />
                        </div>

                        {/* Skills */}
                        <h1>Skills and Certifications</h1>
                        <div className='d-flex align-items-center justify-content-between p-3'>
                            <TextField value={inputSkill} onChange={e => setInputSkill(e.target.value)} sx={{ width: "600px" }} label="Add Skill" variant="standard" />
                            <Button onClick={() => addSkill(inputSkill)} variant="outlined">Add</Button>
                        </div>

                        {/* Suggested Skills */}
                        <h4>Suggestions:</h4>
                        <div className='d-flex flex-wrap gap-4 mt-3'>
                            {SkillsSuggestionArray.map(skill => (
                                <Button key={skill} onClick={() => addSkill(skill)} variant="outlined">{skill}</Button>
                            ))}
                        </div>

                        {/* Added Skills */}
                        <h4 className='mt-3'>Added Skills:</h4>
                        <div className='d-flex flex-wrap gap-4 mt-2'>
                            {resumeData.skill.map(skill => (
                                <span key={skill} className='btn btn-primary d-flex align-items-center'>
                                    {skill} 
                                    <button onClick={() => removeSkill(skill)} className='text-light btn ms-2'>✖</button>
                                </span>
                            ))}
                        </div>

                        {/* Summary */}
                        <h1 className='mt-4'>Review and Submit</h1>
                        <div className='d-flex row p-3'>
                            <TextField 
                                multiline 
                                rows={4} 
                                value={resumeData.summary} 
                                onChange={e => setResumeData({...resumeData, summary:e.target.value})}
                                label="Write a short summary of yourself" 
                                variant="standard" 
                            />
                        </div>

                        {/* Buttons */}
                        <div className='d-flex justify-content-end gap-4 mt-3'>
                            <Button variant='outlined' onClick={() => setResumeData({...resumeData, skill: [], summary: ""})}>Clear</Button>
                            <Button variant='outlined' onClick={updateResume}>Submit</Button>
                        </div>
                    </div>
                </Box>
            </Modal>
        </>
    );
}
export default Edit;