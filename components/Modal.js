import React from 'react';

export default function Modal({handleClose, show, children, header}){
  const showHiddenClassName = show ? 'modal show' : 'modal hide';

  return(
    <div className={showHiddenClassName}>
      <section className="modal-main">
        <h3 className="modal-header">{header}</h3>
        {children}
        <button onClick={handleClose} className="update-all-btn">Update All</button>
      </section>
    </div>
  )
}