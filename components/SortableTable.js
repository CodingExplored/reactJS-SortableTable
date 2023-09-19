import React, { useState } from 'react';
import './styles/SortableTable.css';

const SortableTable = ({ data, columns }) => {
  // State to keep track of the current sort direction and column
  const [sortConfig, setSortConfig] = useState(null);

  // State for pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Sorting function
  const sortedData = React.useMemo(() => {
    let sortableData = [...data];
    if (sortConfig !== null) {
      sortableData.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'asc' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'asc' ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableData;
  }, [data, sortConfig]);

  // Function to handle column header click for sorting
  const requestSort = (key) => {
    let direction = 'asc';
    if (sortConfig && sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  // Function to change page
  const goToPage = (page) => {
    setCurrentPage(page);
  };

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = sortedData.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div>
      <table className="SortableTable">
        <thead>
          <tr>
            {columns.map((column, index) => (
              <th key={index} onClick={() => requestSort(column.key)}>
                {column.name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {currentItems.map((item, index) => (
            <tr key={index}>
              {columns.map((column) => (
                <td key={column.key}>{item[column.key]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pagination">
        {[...Array(Math.ceil(data.length / itemsPerPage)).keys()].map((page) => (
          <button key={page} onClick={() => goToPage(page + 1)}>
            {page + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SortableTable;
