import React from 'react'

export interface TabItemProps {
  label: any;
  disabled?: boolean
}

const TabItem: React.FC<TabItemProps> = ({children}) => {
  return (
    <div className="ricar-tab-panel">
      {children}
    </div>
  )
}

export default TabItem