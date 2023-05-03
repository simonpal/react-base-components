import React, { createContext, useContext, useMemo, useState } from 'react'
import styled from 'styled-components'

const StyledAccordionItem = styled.div`
  --accordion-max-height: 500px;
  margin-bottom: var(--spacing-s);
  display: flex;
  flex-direction: column;
`

const AccordionTitleButton = styled.button`
  flex-direction: row;
  height: var(--size-button-default, 2.5rem);
  font-size: 1rem;
  line-height: 1.5;
  font-weight: bold;
  padding: var(--spacing-xs);
  display: flex;
  align-items: center;
  border: 0;
  justify-content: space-between;
  cursor: pointer;

  svg {
    transition: transform 0.3s ease;
  }

  &.open {
    svg {
      transform: rotate(180deg);
    }
  }

  &.disabled {
    opacity: 0.7;
    cursor: default;
  }
`

const AccordionContent = styled.div`
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease;
  &.open {
    max-height: var(--accordion-max-height);
    overflow: auto;
  }
`
// TODO: Implement a parent to use single select or multi
type AccordionCtx = {
  activeItems?: string[]
  handleChange?: any
}
export const AccordionContext = createContext<AccordionCtx>({})

export type AccordionProps = {
  singleSelect?: boolean
  defaultActiveKey?: string
}

export const Accordion: React.FC<AccordionProps & React.HTMLAttributes<HTMLDivElement>> = ({
  singleSelect,
  children,
  defaultActiveKey,
}) => {
  const [activeItems, setActiveItems] = useState<string[]>(
    defaultActiveKey ? [defaultActiveKey] : [],
  )

  const handleChange = (key: string) => {
    const isIncluded = activeItems.includes(key)
    if (singleSelect) {
      setActiveItems(isIncluded ? [] : [key])
    } else {
      setActiveItems((prevValues) =>
        isIncluded ? [...prevValues.filter((x) => x !== key)] : [...prevValues, key],
      )
    }
  }

  return (
    <AccordionContext.Provider
      value={{
        activeItems,
        handleChange,
      }}
    >
      <div className="base-accordion">{children}</div>
    </AccordionContext.Provider>
  )
}

export type AccordionItemProps = {
  children: any
  eventKey: string
  title: string
  maxHeight?: string
  titleComponent?: JSX.Element
  disabled?: boolean
  onClick?: (key: string) => void
}

export const AccordionItem: React.FC<AccordionItemProps> = ({
  title,
  eventKey,
  children,
  maxHeight = '500px',
  titleComponent,
  disabled = false,
  onClick,
}) => {
  const { activeItems = [], handleChange } = useContext(AccordionContext)
  const isOpen = activeItems.includes(eventKey)
  const handleClick = () => {
    handleChange(eventKey)
    if (onClick) {
      onClick(eventKey)
    }
  }
  const contentStyle: any = useMemo(
    () => ({
      ['--accordion-max-height']: `${maxHeight || '500px'}`,
    }),
    [maxHeight],
  )
  return (
    <StyledAccordionItem
      className={`base-accordion-item-container ${isOpen ? 'accordion-open' : 'accordion-closed'}`}
      data-state={isOpen ? 'open' : 'closed'}
      data-disabled={disabled ? 'disabled' : 'enabled'}
      aria-disabled={disabled}
    >
      {titleComponent &&
        React.cloneElement(titleComponent, {
          onClick: () => !disabled && handleClick(),
          isOpen,
          id: `${eventKey}-trigger`,
          'aria-controls': `${eventKey}-section`,
          'aria-expanded': isOpen,
        })}
      {!titleComponent && (
        <AccordionTitleButton
          className={`base-accordion-title ${disabled ? 'disabled' : ''} ${isOpen ? 'open' : ''}`}
          type="button"
          id={`${eventKey}-trigger`}
          aria-controls={`${eventKey}-section`}
          onClick={() => !disabled && handleClick()}
          aria-expanded={isOpen}
        >
          {title}
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
            <title>expand</title>
            <path d="M19 6.25l-1.5-1.5-7.5 7.5-7.5-7.5L1 6.25l9 9 9-9z" />
          </svg>
        </AccordionTitleButton>
      )}

      <AccordionContent
        className={`base-accordion-content ${isOpen ? 'open' : ''}`}
        id={`${eventKey}-section`}
        style={contentStyle}
        role="region"
        aria-labelledby={`${eventKey}-trigger`}
      >
        <div className="co-accordion-content-inner">{children}</div>
      </AccordionContent>
    </StyledAccordionItem>
  )
}
