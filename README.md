# reactJS-SortableTable

**React JS:** A Table component with sorting and pagination included.

## SortableTable React Component

### Overview

The `SortableTable` component is a table for React applications that includes sorting and pagination functionalities.

### Features

- **Sorting**: Click on the column headers to sort the table by that column.
- **Pagination**: Navigate through pages with the pagination buttons below the table.
- **Customizable Columns**: Define which columns to display and what they should be called.

## Installation

1. Download both `SortableTable.js` and its associated `SortableTable.css` files.
2. Place them into your project's appropriate directory.

## Usage

Here's how to use the `SortableTable` component in your React application:

```jsx
import React from 'react';
import SortableTable from './path/to/SortableTable';

const data = [
  { name: 'John', age: 28 },
  { name: 'Jane', age: 24 },
  { name: 'Doe', age: 22 },
];

const columns = [
  { key: 'name', name: 'Name' },
  { key: 'age', name: 'Age' },
];

function App() {
  return (
    <div>
      <SortableTable data={data} columns={columns} rowsPerPage={10} />
    </div>
  );
}
```

## Props

The `SortableTable` component supports the following props:

- `data` (Array): An array of objects where each object represents a row in the table.
- `columns` (Array): An array of objects where each object contains the `key` and `name` of a column.
- `rowsPerPage` (Number, optional): The number of rows to display per page. Defaults to 10.

## License

MIT License
