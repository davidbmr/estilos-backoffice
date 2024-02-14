import React, { useState } from "react";
import style from "./AddModal.module.css";

import { handleChangeInput } from "@/helpers/handleTextBox";

import { Button } from "primereact/button";
import { TextBoxField } from "@/components/TextBoxField/TextBoxField";
import { useEffect } from "react";
import { Calendar } from "primereact/calendar";
import { SelectField } from "@/components/SelectField/SelectField";

interface PropsAddModal {
  postFetchData?: any;
  updateFetchData?: any;
  updateData?: any;
}

export const AddModal = ({
  postFetchData,
  updateFetchData,
  updateData,
}: PropsAddModal) => {
  const [newData, setNewData] = useState<any>({
    name: "",
    description: "",
    price: "",
    stock:"",
    image: "",
    category: "",
    businessId: "",
  });

  const handleCreate = async () => {
    console.log(newData);
    // postFetchData(newData)
  };

  return (
    <div className={style.column__container}>
      <TextBoxField
        textLabel="Nombre del Producto"
        value={newData.name || ""}
        name="name"
        onChange={(e) => handleChangeInput(e, setNewData)}
      />
      <TextBoxField
        textLabel="Descripción del Producto"
        value={newData.description || ""}
        name="description"
        onChange={(e) => handleChangeInput(e, setNewData)}
      />
      <TextBoxField
        textLabel="Precio"
        type="number"
        value={newData.price || ""}
        name="price"
        onChange={(e) => handleChangeInput(e, setNewData)}
      />
      <TextBoxField
        textLabel="Cantidad"
        type="number"
        value={newData.stock || ""}
        name="stock"
        onChange={(e) => handleChangeInput(e, setNewData)}
      />
      <TextBoxField
        textLabel="Imagen"
        value={newData.image || ""}
        name="image"
        onChange={(e) => handleChangeInput(e, setNewData)}
      />
      <TextBoxField
        textLabel="Categoría"
        value={newData.category || ""}
        name="category"
        onChange={(e) => handleChangeInput(e, setNewData)}
      />
      <TextBoxField
        textLabel="Empresa"
        value={newData.businessId || ""}
        name="businessId"
        onChange={(e) => handleChangeInput(e, setNewData)}
      />


      {postFetchData && (
        <div>
          <Button
            className="p-button-sm p-button-info mr-2"
            onClick={handleCreate}
          >
            AGREGAR PRODUCTO
          </Button>
        </div>
      )}

      {updateFetchData && (
        <div>
          <Button className="p-button-sm p-button-info mr-2" onClick={() => {}}>
            EDITAR PRODUCTO
          </Button>
        </div>
      )}
    </div>
  );
};
