import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./ProductForm.scss";
import Card from "../../card/Card";

const ProductForm = ({
  
  product,
  productImage,
  imagePreview,
  description,
  setDescription,
  handleInputChange,
  handleImageChange,
  saveProduct,
}) => {
  const downloadPdf = () => {
    // Remplacez le chemin ci-dessous par le chemin absolu de votre fichier PDF
    const pdfFilePath = "/chemin/vers/mon/fichier.pdf";

    // Créez un lien temporaire pour le téléchargement
    const downloadLink = document.createElement("a");
    downloadLink.href = pdfFilePath;
    downloadLink.download = "nom_du_fichier.pdf";
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };
  return (
    <div className="add-product">
      <Card cardClass={"card"}>
        <form onSubmit={saveProduct}>
        <Card cardClass={"group"}>
      </Card>
          <label>Nom complet du client:</label>
          <input
            type="text"
            placeholder=""
            name="name"
            value={product?.name}
            onChange={handleInputChange}
          />
          <label>date:</label>
          <input
            type="text"
            placeholder=""
            name="category"
            value={product?.category}
            onChange={handleInputChange}
          />

          <label>Total HT:</label>
          <input
            type="text"
            placeholder=""
            name="price"
            value={product?.price}
            onChange={handleInputChange}
          />

          <label>Avance:</label>
          <input
            type="text"
            placeholder=""
            name="quantity"
            value={product?.quantity}
            onChange={handleInputChange}
          />
          <label>Description:</label>
          <ReactQuill
            theme="snow"
            value={description}
            onChange={setDescription}
            modules={ProductForm.modules}
            formats={ProductForm.formats}
          />
          <div className="--my">
            <button type="submit" className="--btn --btn-primary">
              Enregister
            </button>
          </div>
        </form>
      </Card>
    </div>
  );
};

ProductForm.modules = {
  toolbar: [
    [{ header: "1" }, { header: "2" }, { font: [] }],
    [{ size: [] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [{ align: [] }],
    [{ color: [] }, { background: [] }],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["clean"],
  ],
};
ProductForm.formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "color",
  "background",
  "list",
  "bullet",
  "indent",
  "link",
  "video",
  "image",
  "code-block",
  "align",
];

export default ProductForm;