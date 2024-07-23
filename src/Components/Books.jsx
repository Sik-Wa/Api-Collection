//react js coding practice 3

import { useState, useEffect } from 'react';

const BookList = () => {
  const [books, setBooks] = useState([]);
  const [filter, setFilter] = useState('');
  const [filteredBooks, setFilteredBooks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://openlibrary.org/subjects/fantasy.json');
        const data = await response.json();
        setBooks(data.works);
        setFilteredBooks(data.works);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleFilterChange = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    setFilter(searchTerm);

    const filtered = books.filter(book =>
      book.title.toLowerCase().includes(searchTerm)
    );

    setFilteredBooks(filtered);
  };

  return (
    <div className=' flex flex-col justify-center items-center h-96 border border-gray-500 bg-white'>
      <h1 className=' mb-5 text-3xl'>A Free List Of Books</h1>
      <div className=' '>
        <label className=' mr-2 capitalize font-extrabold' htmlFor="filter">Filter by Title: </label>
        <input
        className=' rounded-md text-md py-2 px-2 bg-black text-white'
          type="text"
          id="filter"
          value={filter}
          onChange={handleFilterChange}
          placeholder="Enter a title......."
        />
      </div>
      <ul className=' text-base mt-2'>
        {filteredBooks.map(book => (
          <li key={book.key}>
            {book.title} - {book.author_name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;
