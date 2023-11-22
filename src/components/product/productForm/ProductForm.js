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
  return (
    <div className="add-product">
      <Card cardClass={"card"}>
        <form onSubmit={saveProduct}>
          <Card cardClass={"group"}>
            <label>Image du produit</label>
            <code className="--color-dark">
              Formats pris en charge: jpg, jpeg, png
            </code>
            <input
              type="file"
              name="image"
              onChange={(e) => handleImageChange(e)}
            />
            {imagePreview != null ? (
              <div className="image-preview">
                <img src={imagePreview} alt="product" />
              </div>
            ) : (
              <p>Pas d'image pour ce produit.</p>
            )}
          </Card>
          <label>Nom complet du client:</label>
          <input
            type="text"
            placeholder="Nom du produit"
            name="name"
            value={product?.name}
            onChange={handleInputChange}
          />

          <label>date:</label>
          <input
            type="text"
            placeholder="Catégorie du produit"
            name="category"
            value={product?.category}
            onChange={handleInputChange}
          />

          <label>Total HT:</label>
          <input
            type="text"
            placeholder="Prix"
            name="price"
            value={product?.price}
            onChange={handleInputChange}
          />

          <label>Avance:</label>
          <input
            type="text"
            placeholder="Quantité"
            name="quantity"
            value={product?.quantity}
            onChange={handleInputChange}
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