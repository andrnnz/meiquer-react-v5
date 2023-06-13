import { Uploader } from "uploader"; // Installed by "react-uploader".
import { UploadButton } from "react-uploader";

import '../assets/css/Styles.css'

// Initialize once (at the start of your app).
const uploader = Uploader({
  apiKey: "free" // Get production API keys from Upload.io
});

// Configuration options: https://upload.io/uploader#customize
const options = { multi: true };

const UploaderButton = () => (
  <UploadButton uploader={uploader}
                options={options}
                onComplete={files => alert(files.map(x => x.fileUrl).join("\n"))}>
    {({onClick}) =>
      <button className="inputFile" onClick={onClick}>
        Subir Contenido...
      </button>
    }
  </UploadButton>
);


export default UploaderButton;