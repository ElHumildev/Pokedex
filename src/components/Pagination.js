import React from "react";


const Pagination = (props) => {

    const { onLeftClick, onRightClick, page, totalPage } = props;

    return (
        <div className="pagination">
          <button  onClick={onLeftClick} className="button-page">
            <div >
            ←
            </div>
          </button>
          <div className="pages">
            {page} de {totalPage}
          </div>
          <button  onClick={onRightClick} className="button-page">
            <div >
            →
            </div>
          </button>
        </div>
      );
    };
    


export default Pagination;