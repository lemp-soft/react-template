import { describe, it, afterEach } from 'vitest'
import { render, cleanup } from '@testing-library/react'
import { Button } from './button'

describe('Button', () => {
  afterEach(cleanup)
  it('Button render', () => {
    render(<Button>Click me</Button>)
  })
})
