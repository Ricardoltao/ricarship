import React, { useState, FunctionComponentElement } from 'react'
import classNames from 'classnames'
import { TabItemProps } from './tabItem'

export interface TabsProps {
  defaultIndex?: number;
  className?: string;
  onSelect?: (selectedIndex: number) => void;
  type?: 'line' | 'card';
}

const Tabs: React.FC<TabsProps> = (porps) => {
  const { className, defaultIndex, onSelect, type, children } = porps
  const [activeIndex, setActiveIndex ] = useState(defaultIndex)
  const navClass = classNames('ricar-tabs-nav', {
    'nav-line': type === 'line',
    'nav-card': type === 'card'
  })
  const handleClick = (e: React.MouseEvent, index: number, disabled: boolean | undefined) => {
    if(!disabled) {
      setActiveIndex(index)
      if (onSelect) {
        onSelect(index)
      }
    }
  }
  const renderNavLink = () => {
    return React.Children.map(children, (child, index) => {
      const childElement = child as FunctionComponentElement<TabItemProps>
      const { label, disabled } = childElement.props
      const classes = classNames('ricar-tabs-nav-item', {
        'is-active': activeIndex === index,
        'disabled': disabled
      })
      return (
        <li
          className={classes}
          key={`nav-item-${index}`}
          onClick={(e) => {handleClick(e, index, disabled)}}
        >
          {label}
        </li>
      )
    })
  }
  const renderContent = () => {
    return React.Children.map(children, (child, index) => {
      if(index === activeIndex) {
        return child
      }
    })
  }

  return (
    <div className={`ricar-tabs ${className}`}>
      <ul className={navClass}>
        {renderNavLink()}
      </ul>
      <div className="ricar-tabs-content">
        {renderContent()}
      </div>
    </div>
  )
}

Tabs.defaultProps = {
  defaultIndex: 0,
  type: 'line'
}
export default Tabs