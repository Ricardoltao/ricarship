import React,{useState} from 'react'
import classNames from 'classnames'

export type AlertType = 'success' | 'default' | 'danger' | 'warning'

interface AlertProps {
  title: string;
  description?: string;
  type?: AlertType;
  onClose?: () => void;
  closable: boolean;
}

const Alert: React.FC<AlertProps> = (props) => {
  const [hide, setHide] = useState(false)
  const {
    title,
    description,
    type,
    onClose,
    closable
  } = props
  // ricar-alert-success | default | danger | warning
  const classes = classNames('ricar-alert', {
    [`ricar-alert-${type}`]: type
  })
  const titleClass = classNames('ricar-alert-title', {
    'bold-title': description
  })
  const handleClose = (e: React.MouseEvent) => {
    if(onClose) {
      onClose()
    }

    setHide(true)
  }
  return (
    <div style={{display: !hide ? "block" : "none"}}>
      <div className={classes}>
        <span className={titleClass}>{title}</span>
        {description && <p className="ricar-alert-desc">{description}</p>}
        {closable && <span className="ricar-alert-close" onClick={handleClose}>X</span>}
      </div>
    </div>
  )
}

Alert.defaultProps = {
  type: 'default',
  closable: true
}

export default Alert