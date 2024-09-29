import React from 'react';

const categories = [
  { id: 1, name: 'ทั้งหมด' },
  { id: 2, name: 'คาว' },
  { id: 3, name: 'หวาน' },
];

export default function CategoryMenu({ selectCategory }) {
  return (
    <div className="p-6 border-r bg-green-100 shadow-md">
      <h2 className="font-bold text-2xl mb-6 text-black-600">เมนู</h2>
      <ul className="space-y-4">
        {categories.map(category => (
          <li key={category.id}>
            <button
              onClick={() => selectCategory(category.name)}
              className="text-black-600 hover:text-black-800 transition duration-200 font-medium text-lg"
            >
              {category.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
