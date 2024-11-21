import React from 'react';
import './Pagination.css'; // Import the external CSS

export default function Pagination({ page, setPage, totalPages }) {
  const handlePrevPage = () => {
    if (page > 1) {
      setPage((prev) => prev - 1);
    }
  };

  const handleNextPage = () => {
    if (page < totalPages) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  return (
    <div className="pagination-container">
      <button
        className={`pagination-button ${page === 1 ? 'disabled' : ''}`}
        onClick={handlePrevPage}
        disabled={page === 1}
      >
        Previous
      </button>
      <div className="pagination-info">
        Page <span className="current-page">{page}</span> of {totalPages}
      </div>
      <button
        className={`pagination-button ${page === totalPages ? 'disabled' : ''}`}
        onClick={handleNextPage}
        disabled={page === totalPages}
      >
        Next
      </button>
    </div>
  );
}


