import { useRef, useState } from "react";
import "./SearchImage.css";
import { useChat } from "../../hooks/useChat";
import CloseIcon from "../../assets/png/close.png";
import "./SearchImage.css";
const ImageUploadView = ({removeView}) => {
  const imageInputRef = useRef(null);
  const { getImageAnswer } = useChat();
  const [imageFiles, setImageFiles] = useState([]);
  const handleChange = (e) => {
    setImageFiles(e.target.files);
  };

  const fetchImageAnswer = () => {
    getImageAnswer(imageInputRef.current.files)
    removeView && removeView()
  }

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        position: "absolute",
        display:'flex',
        justifyContent:'center'
      }}
    >
      <div className="glossy-bg" />
      <div
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <p style={{ color: "white" }}>Upload Image</p>
        <input
          ref={imageInputRef}
          style={{ color: "white" }}
          type="file"
          multiple="multiple"
          onChange={handleChange}
        />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            width: "80%",
            flexWrap: "wrap",
            marginTop: 20,
          }}
        >
          {imageFiles.length > 0 &&
            Object.entries(imageFiles).map(([key, file]) => (
              <img
                key={key}
                style={{ borderRadius: 20, marginLeft: 10, marginRight: 10 }}
                src={URL.createObjectURL(file)}
                width={100}
                height={100}
              />
            ))}
        </div>
        <div
          onClick={fetchImageAnswer}
          style={{
            color: "black",
            backgroundColor: "whitesmoke",
            padding: "5px 10px",
            marginTop: 10,
          }}
        >
          Upload
        </div>
      </div>
      <div onClick={()=> removeView()} className="closeBtnBg" style={{position:'absolute', bottom: 40, borderRadius: 100, padding: 14, display:'flex', alignItems:'center'}}><img src={CloseIcon} width={32} height={32}/></div>
    </div>
  );
};
export default ImageUploadView;
