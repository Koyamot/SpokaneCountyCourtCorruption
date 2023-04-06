import React from "react";
import "./DOJComplaint.scss";
import FileViewer from "react-file-viewer";
import Doc from "../../pdfs/DOJ.docx";


const file = `${Doc}`;
const type = "docx";

const onError = (e) => {
  console.log(e, "error in file-viewer");
};

const Complaint = () => {
  return (
    <div className="complaint-div">
      <h2>DOJ Complaint and Exhibits</h2>
      <p>
        Here is our DOJ complaint and all exhibits. You can download all files{" "}
        <span>
          <a
            href="https://drive.google.com/drive/folders/1YzijE7Trs8hKDsQUDz4HnwVdD2bmRqq2?usp=sharing"
            target="blank"
          >
            **{" "}HERE{" "}**
          </a>
        </span>
      </p>
      <div className="complaint-file">
        <h3>Civil Rights Complaint</h3>
        <FileViewer
          fileType={type}
          filePath={file}
          error={onError}
          
        />
      </div>
    </div>
  );
};

export default Complaint;
