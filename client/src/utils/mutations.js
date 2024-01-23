import { gql } from '@apollo/client';

const SAVE_BOOK = gql`
  mutation SaveBook($bookData: BookInput!) {
    saveBook(bookData: $bookData) {
      _id
      savedBooks {
        bookId
        authors
        title
        description
        image
        link
      }
    }
  }
`;
