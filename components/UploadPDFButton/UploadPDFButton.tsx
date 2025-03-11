import { useRef } from "react";

export default function UploadPDFButton() {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      console.log("Archivo seleccionado:", file.name);
    }
  };

  return (
    
    <div className="mt-4">
      <button
        onClick={handleButtonClick}
        style={{ backgroundColor: "#DC2828" }}
        className="px-4 py-2 bg-blue-600 text-white rounded-md shadow hover:bg-blue-700 transition"
      >
        Subir PDF
      </button>
      <input
        type="file"
        ref={fileInputRef}
        className="hidden"
        accept=".pdf"
        onChange={handleFileChange}
      />
    </div>
    
  );
}
