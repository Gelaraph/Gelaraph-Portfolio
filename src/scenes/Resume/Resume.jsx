import './resume.css';
import FilesIcon from '../../assets/resume-files.svg';
import DownloadIcon from '../../assets/download.svg';
import { useEffect, useRef, useState } from 'react';
import BaseLayout from '../../layouts/BaseLayout/BaseLayout';
import LinerProgress from '../../components/UIElements/LinerProgress/LinerProgress';
import Button from '../../components/UIElements/Button/Button';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import Resumepdf from '../../assets/resume.pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const Resume = () => {
  const pdfWrapper = useRef(null);
  const [pdfPageWidth, setPdfPageWidth] = useState(null);

  const handleResize = () => {
    const wrapperWidth =
      pdfWrapper.current?.getBoundingClientRect().width;
    if (wrapperWidth) {
      const reducedWidth = wrapperWidth * 0.4; // Adjust the percentage as needed
      setPdfPageWidth(reducedWidth);
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const removeTextLayerOffset = () => {
    const textLayers = document.querySelectorAll(
      '.react-pdf__Page__textContent',
    );
    textLayers.forEach((layer) => {
      const { style } = layer;
      style.top = '0';
      style.left = '0';
      style.transform = '';
    });
  };

  return (
    <BaseLayout>
      <div className="resume-content">
        <div className="resume-header">
          <h1 className="title">
            My <br /> Resume
          </h1>

          <div className="filesImg">
            <img src={FilesIcon} />
          </div>
        </div>

        <div className="download-resume-container">
          <Button
            style={{ margin: 'auto', width: '15rem' }}
            className="primary"
            href={Resumepdf}
            target="_blank"
            onClick={() => {
              console.log('first');
            }}>
            <div className="download-btn">
              <img src={DownloadIcon} />
              <div>
                <span className="downloadText"> download resume</span>
                <span className="filename">.pdf</span>
              </div>
            </div>
          </Button>
        </div>

        <div className="pdfWrapper" ref={pdfWrapper}>
          <Document
            loading={<LinerProgress />}
            file={{
              url: Resumepdf,
            }}>
            <Page
              onLoadSuccess={removeTextLayerOffset}
              loading={<LinerProgress />}
              width={pdfPageWidth}
              pageNumber={1}
            />
          </Document>
        </div>
      </div>
    </BaseLayout>
  );
};

export default Resume;
