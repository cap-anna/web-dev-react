/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Chapter, { GenericChapterProps } from '../../components/helper/Chapter';
import Code from '../../components/helper/Code';
import Slide from '../../components/reveal/Slide';

const useState = `  const Numbers: React.FC = () => {
    const [bookCounter, setBookCounter] = useState<number>(0);

    return (
      <p>{bookCounter}</p>
      <button onClick={() => setBookCounter(bookCounter + 1)}>
        increase bookCounter
      </button>
    )
  }
`;

const loadingState = `const [books, setBooks] = useState<Book>()

useEffect(() => {
  fetch(...)
    .then(data => setBooks(data))
}, [])  // empty array = runs at initial render

return (
  <BookList books={books} />
)
`;

const booksByAuthor = `const [currentBooks, setCurrentBooks] = useState<Book[]>()
const [selectedBook, setSelectedBook] = useState<Book>()
useEffect(() => {
  const booksByAuthor = props.books
    .filter(book => book.author === props.author)
  setCurrentBooks(booksByAuthor)
  setSelectedBook(booksByAuthor[0])
}, [props.author]) // hook runs when props.author changes

return(
  <div>
    <Select
      options={currentBooks}
      onChange={e => setSelectedBook(e.target.value)}/>
    <p>Books by {props.author.name}</p>
    <BookList books={currentBooks} />
  </div>
)
`;

const subscribeToBooks = `useEffect(() => {
  BooksApi.subscribeToUpdates(props.user.id);
  /**
   * return function only runs once before 
   * component's lifecycle is being destroyed
   */
  return () => {
    BooksApi.unsubscribeFromUpdates(props.user.id)
  }
}, [])
`;

const useBooks = `const useBooks = () => {
  const [books, setBooks] = useState<Book[]>()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(...)
      .then(data => {
        setBooks(data)
        setLoading(false)
      })
  }, [])
  return {loading, books}
}
`;

const useBooksHook = `const { loading, books } = useBooks()`;

const fetchUsers = `const fetchUsers = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  return res.json();
};
`;

const fetchUsersUseQuery = `import { useQuery } from "react-query";
// query key is used to identify the query
const response = useQuery("users", fetchUsers);
`;

const response = `data,
error,
failureCount,
isError,
isFetchedAfterMount,
isFetching,
isIdle,
isLoading,
isPreviousData,
isStale,
isSuccess,
refetch,
remove,
status,
`;

const useQueryBooks = `const {loading, data, error} = useQuery("books", fetchBooks);

return (
  {loading ? <p>Loading...</p>
  : error ? <p>Error: {error.message}</p>
  : <BookList books={data} />}
)
`;

const ObservableMobX = `export class Test {
  continue: boolean | undefined = undefined;

  constructor() {
    makeAutoObservable(this)
  }

  someFunction = () => {
    const disposer = observe(this, 'continue', change => {
      console.log(change.newValue)
    })
  }
}
`;

const DatabindingHooksChapter: React.FC<GenericChapterProps> = (props: GenericChapterProps) => {
  return (
    <Chapter
      {...props}
      subtitle={
        <ul>
          <li>Hooks</li>
          <li>Databinding</li>
          <li>Databinding and Hooks: influence the component's rendering</li>
        </ul>
      }
    >
      <Slide>
        <h2>Hooks</h2>
        <p>work with React state and lifecycle features from function components</p>
        <p>most important React Hooks: useState, useEffect, (useContext, useReducer, useCallback, useMemo, ...)</p>
      </Slide>
      <Slide>
        <h2>useState-Hook</h2>
        <ul>
          <li className='fragment'>add state management to function components</li>
          <li className='fragment'>component rerenders when state in hook changes</li>
          <li className='fragment'>syntax: array destructuring</li>
          <ul>
            <li className='fragment'>first value is set to the state value</li>
            <li className='fragment'>second value is used to update the value</li>
          </ul>
        </ul>
      </Slide>
      <Slide>
        <h2>useState-Hook</h2>
        <Code>{useState}</Code>
      </Slide>
      <Slide>
        <h2>💪 Exercise</h2>
        <ul>
          <li>Let's implement some buttons, that determine how many books should be rendered inside your book-list.</li>
          <li>As you might have already guessed: the useState-hook is our friend!</li>
        </ul>
      </Slide>
      <Slide>
        <h2>useEffect-Hook</h2>
        <ul>
          <li className='fragment'>perform side effects in components</li>
          <li className='fragment'>e.g. for data fetching</li>
          <li className='fragment'>cleanup when a component's lifecycle is over</li>
          <li className='fragment'>define when to run it with the dependency array</li>
        </ul>
      </Slide>
      <Slide>
        <h2>useEffect-Hook: Data Fetching</h2>
        <Code className='fragment'>{loadingState}</Code>
      </Slide>
      <Slide>
        <h2>useEffect-Hook: Dependency Array</h2>
        <Code className='fragment' highlightedLines='8'>
          {booksByAuthor}
        </Code>
      </Slide>
      <Slide>
        <h2>useEffect-Hook: Unmount of Component</h2>
        <Code className='fragment'>{subscribeToBooks}</Code>
      </Slide>
      <Slide>
        <h2>Rules of Hooks</h2>
        <ul>
          <li className='fragment'>
            only call Hooks at the top level of a component. React will run into problems when calling hooks after determining conditions
          </li>
          <li className='fragment'>Don't call Hooks from regular JS functions, the only other valid place are custom Hooks</li>
        </ul>
      </Slide>
      <Slide>
        <h2>💪 Exercise</h2>
        <ul>
          <li>
            As of now: we'd like to get rid of our dummy book-data and use an{' '}
            <a href='https://api.itbook.store/1.0/new' target='_blank' rel='noreferrer'>
              API
            </a>{' '}
            instead.
          </li>
          <li>We will fetch the books to display from the API.</li>
          <li>
            Update conditional rendering in Book.tsx: Place a badge "cheap" when the book's price is less than 30$, else the badge should
            display "expensive".
          </li>
          <li>
            Since data fetching takes some time, we also need to provide a loading spinner that tells the user there's some data fetching in
            progress since there is no data to display yet.
          </li>
        </ul>
      </Slide>
      <Slide>
        <h2>Fin 😎</h2>
        <p>Get in touch!</p>
        <a rel='nofollow' href='https://www.qr-code-generator.com'>
          <img
            src='https://chart.googleapis.com/chart?cht=qr&chl=MAILTO%3Aanna-maria.auer%40capgemini.com&chs=180x180&choe=UTF-8&chld=L|2'
            alt=''
          />
        </a>
      </Slide>
    </Chapter>
  );
};

export default DatabindingHooksChapter;
