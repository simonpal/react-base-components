import React, { useState } from 'react'
import styled from 'styled-components'
// import TabItem from '../TabItem';

const TabHeaders = styled.ul`
  display: flex;
  list-style-type: none;
  font-size: 1.1rem;
  font-weight: bold;
  margin: 0 0 1.5rem 0;
  padding: 0;
  flex-direction: row;
  flex-wrap: wrap;

  li {
    background-color: transparent;
    display: inline-flex;

    button,
    span {
      border: 0;

      color: #444;
      background-color: transparent;
      padding: var(--spacing-xs);
      position: relative;
      font-weight: bold;
    }

    button {
      cursor: pointer;

      &:disabled {
        opacity: 0.5;
        cursor: default;
      }
    }

    &.active button {
      color: #000;
      text-decoration: underline;
    }

    &:not(:first-of-type) {
      button::before,
      span::before {
        content: '';
        border-right: 1px solid #eee;
        height: 18px;
        position: absolute;
        left: 0;
      }
    }
  }
`

export interface TabProps {
  children: React.ReactNode[]
  defaultActiveIndex?: number
  onTabChange?: (idx: number) => void
  className?: string
}

export const Tabs = ({ children, onTabChange, defaultActiveIndex = 0, className }: TabProps) => {
  // Dependant on children
  if (!children) return null

  const [activeTab, setActiveTab] = useState<number>(defaultActiveIndex)

  const isActive = (idx: number): boolean => activeTab === idx

  const handleClick = (idx: number) => {
    setActiveTab(idx)
    if (typeof onTabChange === 'function') {
      onTabChange(idx)
    }
  }

  return (
    <div>
      <TabHeaders className={`base-tabs-headers ${className}`} role="tablist">
        {children &&
          children.map((child: any, index: number) => (
            <li
              className={`${isActive(index) ? 'active' : ''} ${
                child.props.disabled ? 'disabled' : ''
              }`}
              key={child.props.eventKey}
            >
              <button
                disabled={child.props.disabled}
                aria-selected={isActive(index)}
                aria-controls={`${child.props.eventKey}-content`}
                id={`${child.props.eventKey}-control`}
                type="button"
                role="tab"
                onClick={() => handleClick(index)}
              >
                {child.props.title}
              </button>
              {/* 
              {child.props.disabled && <span>{child.props.title}</span>} */}
            </li>
          ))}
      </TabHeaders>
      {children &&
        children.map((item: any, index: number) => (
          <TabItem
            key={`tabitem-${item.props.eventKey}`}
            {...item.props}
            visible={isActive(index)}
          />
        ))}
    </div>
  )
}

export interface TabItemProps {
  children: any
  eventKey: string
  title: string
  disabled?: boolean
  visible?: boolean
}

export const TabItem = ({ children, visible = false, eventKey, title }: TabItemProps) => {
  if (!visible) {
    return null
  }
  return (
    <div role="tabpanel" id={`${eventKey}-content`} aria-labelledby={`${eventKey}-control`}>
      {children}
    </div>
  )
}
