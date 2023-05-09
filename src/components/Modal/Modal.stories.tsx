import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { alignItems, justifyContent } from 'src/storybookHelper'

// import { buttonType, priority } from '../../storybookHelper'
import { Modal, ModalProps } from './Modal'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof Modal> = {
  title: 'Components/Modal',
  component: Modal,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    alignItems,
    justifyContent,
    blur: { control: 'boolean' },
    // visible: { control: 'boolean' },
    width: { control: 'string' },
    zIndex: { control: 'number' },
  },
}

export default meta
type Story = StoryObj<typeof Modal>

const ModalWithState = (args: any) => {
  const [visible, setVisible] = useState(false)
  return (
    <>
      <button onClick={() => setVisible(true)}>Show modal</button>
      <Modal {...args} visible={visible} onClose={() => setVisible(false)}>
        <div
          style={{ backgroundColor: '#FFF', padding: 'var(--spacing-xl)', borderRadius: '1rem' }}
        >
          <h3>This is a heading</h3>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
            invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
            accusam
          </p>

          <button>This is a button</button>
        </div>
      </Modal>
    </>
  )
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const OneItem: Story = {
  render: (args) => <ModalWithState args={args} />,
}
