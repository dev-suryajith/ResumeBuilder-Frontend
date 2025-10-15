import React from 'react'
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { FaEdit } from "react-icons/fa";
import { FaDownload } from "react-icons/fa";
import { FaHistory } from "react-icons/fa";
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import Divider from '@mui/material/Divider';
import Edit from './Edit';
import Button from '@mui/material/Button';
import { IoCaretBack } from "react-icons/io5";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";

function Preview({ userInput, isResSuccess, resumeId, setUserInput }) {

  const downloadPDF = async () => {
    const input = document.getElementById("result");
    if (!input) {
      console.error("Element with id 'result' not found!");
      return;
    }

    const canvas = await html2canvas(input, { scale: 2 });
    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF("p", "mm", "a4");
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

    pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save("resume.pdf");
  };

  return (
    <>
      <Box component="section">
        <Stack direction="row" sx={{ gap: "10px", display: "flex", justifyContent: "end" }}>
          {isResSuccess && (
            <div className="d-flex">
              <p>
                <Edit resumeId={resumeId} setUserInput={setUserInput} />
              </p>
              <p>
                <button
                  className='btn btn-primary align-items-center d-flex justify-content-center btn-lg'
                  onClick={downloadPDF}
                >
                  <FaDownload />
                </button>
              </p>
            </div>
          )}
          {/* history */}
          <p>
            <Link href={"/History"}>
              <button className='btn btn-primary align-items-center d-flex justify-content-center btn-lg'>
                <FaHistory />
              </button>
            </Link>
          </p>
          <Link href={"/"}>
            <h1 className='btn text-primary'><IoCaretBack />BACK</h1>
          </Link>
        </Stack>

        {/* 🟡 Added id="result" here */}
        <div id="result" className='mt-3 p-3'>
          <Paper elevation={3} sx={{ p: 2, textAlign: "center" }}>
            <h2>{userInput.profesionalData.name || "John Doe"}</h2>
            <h4>{userInput.profesionalData.jobTitle || "Job Title"}</h4>
            <p>
              <span>{userInput.profesionalData.location || "Location"}</span> |{" "}
              <span>{userInput.profesionalData.phone || "1234567890"}</span> |{" "}
              <span>{userInput.profesionalData.email || "example@mail.com"}</span>
            </p>

            <div className='d-flex gap-3 justify-content-center'>
              <Link href={userInput.profesionalData.gitHub || "#"}>GitHub</Link>
              <Link href={userInput.profesionalData.linkedIn || "#"}>LinkedIn</Link>
              <Link href={userInput.profesionalData.portfolio || "#"}>Portfolio</Link>
            </div>

            <Divider sx={{ fontSize: "23px" }}>Summary</Divider>
            <p>
              {userInput.summary ||
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi ducimus illo perspiciatis quibusdam et enim laudantium fugit."}
            </p>

            <Divider sx={{ fontSize: "23px" }}>Education</Divider>
            <h1>
              {userInput.educationData.course
                ? `${userInput.educationData.course} - ${userInput.educationData.year}`
                : "BCA 2025"}
            </h1>
            <h2>
              {userInput.educationData.college
                ? `${userInput.educationData.college}, ${userInput.educationData.university}`
                : "College, University"}
            </h2>

            <Divider sx={{ fontSize: "23px" }}>Professional Experience</Divider>
            <p>{userInput.experience.jobRole || 'MEARN FULL STACK'}</p>
            <p>
              {userInput.experience.company
                ? `${userInput.experience.company} | ${userInput.experience.jobLocation} | ${userInput.experience.duration}`
                : 'Luminar Technolab | Kakkanad | 6 Month'}
            </p>

            <Divider sx={{ fontSize: "23px", marginBottom: "10px" }}>Skills</Divider>
            <Stack direction={"row"} sx={{ gap: "10px", display: 'flex', flexWrap: 'wrap' }}>
              <div className='d-flex flex-wrap gap-4 mt-3'>
                {userInput.skill.length > 0 ? (
                  userInput.skill.map((userskill, index) => (
                    <Button key={index} variant="outlined">{userskill}</Button>
                  ))
                ) : (
                  <p>No skills added</p>
                )}
              </div>
            </Stack>
          </Paper>
        </div>
      </Box>
    </>
  );
}

export default Preview;
