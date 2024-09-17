import { expect } from 'vitest';
import { render, screen, waitFor } from "@testing-library/react"
import AllProvider from '../AllProvider';
import BookCard from '../../src/components/books/BookCard';
import BooksData from '../../src/data/Books';

const data = BooksData[0];
console.log(data);


describe('group', () => {
  it('should render card component', () => {
    render(<AllProvider>
      <BookCard {...data} />
    </AllProvider>)
    screen.debug()
    waitFor(async () => await expect(screen.findByText(/react hand/i)).toBeInTheDocument())

  })
})