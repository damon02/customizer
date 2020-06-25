import React from 'react'

import './Modal.scss'

interface IProps {
  showModal: boolean
  onClose: (callback?: () => void) => void
  closeText: string
  children: React.ReactNode
}

const Modal = (props: IProps) => {
  const { showModal, children, onClose, closeText } = props

  if (!showModal) {
    return null
  }

  return (
    <div className="modal-background-wrapper">
      <div className="modal-inner">
        <div className="content">
          {children}
        </div>
        <div className="buttons">
          <button className="button" onClick={() => onClose()}>{closeText}</button>
        </div>
      </div>
    </div>
  )
}

export default Modal