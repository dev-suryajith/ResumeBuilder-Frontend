import Box from '@mui/material/Box'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import { deleteResumeAPI, getResumeHistoryAPI } from '../service/allAPI';

function History() {
  const [userresume, setUserresume] = useState([]); // ⬅️ Array instead of object

  const getResumeHistory = async () => {
    try {
      const result = await getResumeHistoryAPI();
      console.log(result.data);
      setUserresume(result.data || []); // handle empty response
    } catch (error) {
      console.log(error);
    }
  };

  const deleteresume = async (id) => {
    try {
      const result = await deleteResumeAPI(id);
      console.log(result);
      getResumeHistory();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getResumeHistory();
  }, []);

  return (
    <>
      <div>
        <h1 className='text-center mt-5'>Download Resume History</h1>
        <Link to={"/"} style={{ marginTop: "-50px" }} className='float-end me-5'>Back</Link>
      </div>

      <Box component="section" className='container-fluid'>
        <div className="row mt-5">
          {userresume.length > 0 ? (
            userresume.map((item, index) => (
              <div className="col-md-4" key={index}>
                <Paper elevation={3} sx={{ p: 2, textAlign: "center" }}>
                  <h2>{item.profesionalData?.name || "John Doe"}</h2>
                  <h4>{item.profesionalData?.jobTitle || "Job Title"}</h4>
                  <p>
                    <span>{item.profesionalData?.location || "Location"}</span> | 
                    <span>{item.profesionalData?.phone || "1234567890"}</span> | 
                    <span>{item.profesionalData?.email || "example@mail.com"}</span>
                  </p>

                  <div className='d-flex gap-3 justify-content-center'>
                    <Link to={item.profesionalData?.gitHub || "#"}>GitHub</Link>
                    <Link to={item.profesionalData?.linkedIn || "#"}>LinkedIn</Link>
                    <Link to={item.profesionalData?.portfolio || "#"}>Portfolio</Link>
                  </div>

                  <Divider sx={{ fontSize: "23px" }}>Summary</Divider>
                  <p>{item.summary || "No summary available."}</p>

                  <Divider sx={{ fontSize: "23px" }}>Education</Divider>
                  <h1>
                    {item.educationData?.course
                      ? `${item.educationData.course} - ${item.educationData.year}`
                      : "BCA 2025"}
                  </h1>
                  <h2>
                    {item.educationData?.college
                      ? `${item.educationData.college}, ${item.educationData.university}`
                      : "College, University"}
                  </h2>

                  <Divider sx={{ fontSize: "23px" }}>Professional Experience</Divider>
                  <p>{item.experience?.jobRole || 'MEARN FULL STACK'}</p>
                  <p>
                    {item.experience?.company
                      ? `${item.experience.company} | ${item.experience.jobLocation} | ${item.experience.duration}`
                      : 'Luminar Technolab | Kakkanad | 6 Month'}
                  </p>

                  <Divider sx={{ fontSize: "23px", marginBottom: "10px" }}>Skills</Divider>
                  <Stack direction={"row"} sx={{ gap: "10px", display: 'flex', flexWrap: 'wrap' }}>
                    <div className='d-flex flex-wrap gap-4 mt-3'>
                      {item.skill && item.skill.length > 0 ? (
                        item.skill.map((userskill, i) => (
                          <Button key={i} variant="outlined">{userskill}</Button>
                        ))
                      ) : (
                        <p>No skills listed</p>
                      )}
                    </div>
                  </Stack>

                  <Button 
                    variant="contained" 
                    color="error" 
                    sx={{ mt: 2 }} 
                    onClick={() => deleteresume(item._id)}
                  >
                    Delete
                  </Button>
                </Paper>
              </div>
            ))
          ) : (
            <h1 className='text-center'>No Resumes Available</h1>
          )}
        </div>
      </Box>
    </>
  );
}

export default History;
