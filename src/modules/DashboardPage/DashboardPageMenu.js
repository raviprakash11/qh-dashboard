import React, { useEffect, useState } from "react";
import "./DashboardPage.scss";
import DownloadIcon from "@mui/icons-material/Download";
import ShareIcon from "@mui/icons-material/Share";
import PrintIcon from "@mui/icons-material/Print";
import Pdf from "../../Reports/report.pdf";

export default function DashboardPageMenu() {
  const [pdfFiles, setPDFFiles] = useState([]);

  useEffect(() => {
    fetch("../../Reports/") // Replace with your API endpoint
      .then((response) => response)
      .then((data) => setPDFFiles(data))
      .catch((error) => console.error("Error fetching PDF files:", error));
  }, []);

  const [fileList, setFileList] = useState([]);

  useEffect(() => {
    async function fetchFiles() {
      try {
        const response = await fetch('https://dummy.restapiexample.com/api/v1/employees');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setFileList(data.files);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchFiles();
  }, []);

  const handlepdf = () => {
    window.open(Pdf);
  };
  const handleShare = () => {
    window.open(
      `https://outlook.office.com/mail/0/deeplink/compose?subject=&body=&to=?attachment=${Pdf}`,
      "_blank",
      "noopener,noreferrer"
    );
  };
  const handleDownloadPdf = () => {
    fetch(Pdf).then((response) => {
      response.blob().then((blob) => {
        const fileURL = window.URL.createObjectURL(blob);
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "ReportPDF.pdf";
        alink.click();
      });
    });
  };
  console.log(pdfFiles);
  return (
    <div className="DBPMC">
      <div style={{ width: "100vw" }} className="DBMCa">
        <div className="DBMCac">
          <div className="DBMCac1">
            <div className="DBMCRN" onClick={handlepdf}>
              Report Name
            </div>
            <div className="DBMCac3">
              {/* <div className="DBMCS">Size</div> */}
              <div className="DBMCD">Date</div>
            </div>
          </div>
          <div className="DBMCac2">
            <a href={Pdf}>
              <PrintIcon />
            </a>
            <div onClick={handleShare}>
              <ShareIcon />
            </div>
            <div onClick={handleDownloadPdf}>
              <DownloadIcon />
            </div>
          </div>
        </div>

        <div className="DBMCac">
          <div className="DBMCac1">
            <div className="DBMCRN">Report Name</div>
            <div className="DBMCac3">
              <div className="DBMCS">Size</div>
              <div className="DBMCD">Date</div>
            </div>
          </div>
          <div className="DBMCac2">
            <div>
              <PrintIcon />
            </div>
            <div>
              <ShareIcon />
            </div>
            <div>
              <DownloadIcon />
            </div>
          </div>
        </div>

        <div className="DBMCac">
          <div className="DBMCac1">
            <div className="DBMCRN">Report Name</div>
            <div className="DBMCac3">
              <div className="DBMCS">Size</div>
              <div className="DBMCD">Date</div>
            </div>
          </div>
          <div className="DBMCac2">
            <div>
              <PrintIcon />
            </div>
            <div>
              <ShareIcon />
            </div>
            <div>
              <DownloadIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
