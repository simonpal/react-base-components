import { fireEvent, render } from '@testing-library/react'
import React from 'react'

import { Dropdown } from './Dropdown'

const OPTIONS = [
  { value: 'se', text: 'Sweden', key: 'se' },
  { value: 'no', text: 'Norway', key: 'no' },
  { value: 'fi', text: 'Finland', key: 'fi' },
]

describe('<Dropdown />', () => {
  it('should render a Dropdown ', () => {
    const { getByRole } = render(<Dropdown placeholder="Make selection" options={OPTIONS} />)
    const combobox = getByRole('combobox')
    expect(combobox).toBeInTheDocument()
  })
  it('Should open on click', () => {
    const { getByRole } = render(<Dropdown placeholder="Make selection" options={OPTIONS} />)
    const combobox = getByRole('combobox')
    const listbox = getByRole('listbox')
    expect(combobox).toBeInTheDocument()
    expect(listbox).toBeInTheDocument()
    fireEvent.click(combobox)
    expect(combobox).toHaveAttribute('aria-expanded', 'true')
    expect(listbox.classList.contains('is-focused')).toBeTruthy()
  })
  it('Should close on selection', () => {
    const { getByRole } = render(<Dropdown placeholder="Make selection" options={OPTIONS} />)
    const combobox = getByRole('combobox')
    const listbox = getByRole('listbox')

    fireEvent.click(combobox)
    expect(combobox).toHaveAttribute('aria-expanded', 'true')
    expect(listbox.classList.contains('is-focused')).toBeTruthy()

    const firstItem = listbox.querySelector('li') as HTMLLIElement

    fireEvent.click(firstItem)

    expect(combobox).toHaveAttribute('aria-expanded', 'false')
    expect(listbox.classList.contains('is-focused')).toBeFalsy()
  })
})
