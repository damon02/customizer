import React from 'react'

import './Modal.scss'

interface IProps {
  showModal: boolean
  children: React.ReactNode
  uuid: string
  buttonColors?: { color: string, backgroundColor: string }
  
  inContent?: boolean
  onClose: () => void
  closeText: string
  
  allowOutsideCancel?: boolean
  cancelText?: string
  onCancel?: () => void,
}

const Modal = (props: IProps) => {
  const { showModal, children, onClose, closeText, onCancel, uuid, allowOutsideCancel, cancelText, inContent } = props

  if (!showModal) {
    return null
  }

  return (
    <div className="modal-background-wrapper" id={`modal-wrapper-${uuid}`} onClick={(e) => detectClickOutside(e)}>
      <div className="modal-inner">
        <div className="content">
          {children}
          <div className="buttons">
          {inContent && onCancel && <button className="button" onClick={() => onCancel()}>{cancelText}</button>}
          {inContent && <button className="button" style={{...props.buttonColors}} onClick={() => onClose()}>{closeText}</button>}
          </div>
        </div>
        <div className="buttons">
          {!inContent && onCancel && <button className="button" onClick={() => onCancel()}>{cancelText}</button>}
          {!inContent && <button className="button" style={{...props.buttonColors}} onClick={() => onClose()}>{closeText}</button>}
        </div>
      </div>
    </div>
  )

  function detectClickOutside(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    if (e.target === document.getElementById(`modal-wrapper-${uuid}`) && onCancel && allowOutsideCancel) {
      onCancel()
    }
  }
}

export default Modal