import React from "react";
import cn from 'classnames'

// isOpen: quyết định ẩn/ hiện modal
// onClose: hành động tắt modal
// title: modal title
const Modal = ({ isOpen, title, children, footer, onClose }) => {
  return (
    <>
      {/* Modal */}
      <div
        className={cn("modal fade", {"show d-block": isOpen})}
        tabIndex={-1}
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5">{title}</h1>
              <button
                type="button"
                className="btn-close"
                aria-label="Close"
                onClick={onClose}
              />
            </div>
            <div className="modal-body">{children}</div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={onClose}
              >
                Close
              </button>
              {footer}
            </div>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {isOpen && <div className="modal-backdrop fade show"></div>}
    </>
  );
};

export default Modal;
