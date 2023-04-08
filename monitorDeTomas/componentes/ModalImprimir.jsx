import React from "react";
import ReactDom from "react-dom";

const ModalImprimir = ({ show, handleClose, rowData }) => {
  const showHideClassName = show ? "modal d-block" : "modal d-none";

  return ReactDOM.createPortal(
    <div className={showHideClassName}>
      <div className='modal-dialog modal-dialog-centered'>
        <div className='modal-content'>
          <div className='modal-header'>
            <h5 className='modal-title'>{rowData.ProductoDescripcion}</h5>
            <button
              type='button'
              className='btn-close'
              onClick={handleClose}
            ></button>
          </div>
          <div className='modal-body'>
            <p>{rowData.Estudio}</p>
            <p>{rowData.Fecha}</p>
          </div>
          <div className='modal-footer'>
            <button
              type='button'
              className='btn btn-secondary'
              onClick={handleClose}
            >
              Cerrar
            </button>
            <button type='button' className='btn btn-primary'>
              Imprimir
            </button>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default ModalImprimir;