import React from 'react'

import './Modal.scss'

interface IProps {
  showModal: boolean
  onClose: () => void
  closeText: string
  children: React.ReactNode
  onCancel?: () => void,
  uuid: string
}

const Modal = (props: IProps) => {
  const { showModal, children, onClose, closeText, onCancel, uuid } = props

  if (!showModal) {
    return null
  }

  return (
    <div className="modal-background-wrapper" id={`modal-wrapper-${uuid}`} onClick={(e) => detectClickOutside(e)}>
      <div className="modal-inner">
        <div className="content">
          {children}
        </div>
        <div className="buttons">
          <button className="button" onClick={() => onClose()}>{closeText}</button>
          {onCancel && <button className="button" onClick={() => onCancel()}>Go back</button>}
        </div>
      </div>
    </div>
  )

  function detectClickOutside(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    if (e.target === document.getElementById(`modal-wrapper-${uuid}`) && onCancel) {
      onCancel()
    }
  }
}

export default Modal