import React, { useState } from 'react';

// Define the expected structure for a single tab item
interface TableContent {
  headers: string[];
  rows: string[][];
}

interface TabItem {
  id: string;
  label: string;
  type: 'html' | 'table';
  content: string | TableContent; // Content can be raw HTML string or a structured object
}

// Example Data for demonstration (you will pass this via props)
const dynamicTabData: TabItem[] = [
  {
    id: 'tab-1',
    label: 'Features',
    type: 'html',
    content: `
      <h3 class="text-xl font-bold mb-3">Actuator Description</h3>
      <p class="text-text-primary leading-relaxed">
        The K-Series Actuator is a versatile, high-performance quarter-turn solution designed for reliable automation of ball and butterfly valves in demanding industrial environments. It features a hardened aluminum alloy body and corrosion-resistant internal components.
      </p>
      <ul class="list-disc list-inside mt-4 space-y-1 text-text-primary">
        <li>Direct ISO 5211 mounting pad.</li>
        <li>Visual position indicator standard.</li>
        <li>Life cycle tested for 1,000,000 operations.</li>
      </ul>
    `,
  },
  {
    id: 'tab-2',
    label: 'Torque Chart',
    type: 'table',
    content: {
      headers: ['Model', 'Torque (N.M.) @ 6 bar', 'Weight (kg)'],
      rows: [
        ['K-052D', '52', '1.5'],
        ['K-063D', '100', '2.1'],
        ['K-083D', '200', '3.8'],
        ['K-105D', '450', '6.5'],
        ['K-125D', '1000', '10.2'],
      ],
    },
  },
  {
    id: 'tab-3',
    label: 'Diagrams and Dimensions',
    type: 'html',
    content: `
      <h3 class="text-xl font-bold mb-4">Technical Diagram</h3>
      <div class="flex flex-col items-center justify-center bg-gray-50 p-4 border border-gray-200 ">
        <img 
          src="https://placehold.co/400x300/bg-primary/ffffff?text=Product+Dimensions" 
          alt="Product Dimension Diagram" 
          class="w-full max-w-lg  shadow-md"
        />
        <p class="text-sm text-text-priary mt-2">Diagram showing actuator body and flange dimensions (ISO 5211).</p>
      </div>
    `,
  },
];

// Component to render structured table data
const TableContentRenderer = ({ content }: { content: TableContent }) => (
  <div className="overflow-x-auto shadow-lg ">
    <table className="min-w-full divide-y divide-gray-200">
      <thead className="bg-primary text-white">
        <tr>
          {content.headers.map((header, index) => (
            <th
              key={index}
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"
            >
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {content.rows.map((row, rowIndex) => (
          <tr 
            key={rowIndex} 
            className={rowIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
          >
            {row.map((cell, cellIndex) => (
              <td
                key={cellIndex}
                className="px-6 py-4 whitespace-nowrap text-sm text-gray-800"
              >
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

// Main Tabs Component
const DynamicProductTabs = ({ tabs = dynamicTabData }: { tabs?: TabItem[] }) => {
  // Initialize with the ID of the first tab
  const [activeTabId, setActiveTabId] = useState(tabs[0]?.id || null);

  if (!activeTabId) {
    return <div className="p-6 text-center text-gray-500">No content tabs available.</div>;
  }

  // Find the currently active tab content
  const activeTab = tabs.find(tab => tab.id === activeTabId);

  // Helper function to render the content based on its type
  const renderContent = (tab: TabItem) => {
    switch (tab.type) {
      case 'html':
        // WARNING: Use this ONLY if you trust the source of the HTML data (your backend).
        // If the content is raw HTML, render it using dangerouslySetInnerHTML.
        return (
          <div 
            className="prose max-w-none p-4"
            dangerouslySetInnerHTML={{ __html: tab.content as string }} 
          />
        );
      case 'table':
        // If the content is structured JSON for a table, use the dedicated component.
        return <TableContentRenderer content={tab.content as TableContent} />;
      default:
        return <div className="p-4 text-red-600">Unsupported content type.</div>;
    }
  };

  return (
    <div className="w-full p-4 md:p-8 bg-gray-50  shadow-2xl font-sans">
      <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 border-b-2 border-primary pb-2 inline-block" >
               Product Technical Data
              </h2>

      {/* --- Tab Buttons --- */}
      <div className="flex flex-wrap border-b border-gray-300 mb-6 gap-10">
        {tabs.map((tab) => {
          const isActive = tab.id === activeTabId;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTabId(tab.id)}
              className={`
                px-4 py-3 text-sm md:text-base font-semibold transition-colors duration-200
                ${
                  isActive
                    ? 'border-b-4 border-primary text-primary bg-white '
                    : 'border-b-4 border-transparent text-text-primary hover:text-gray-900'
                }
              `}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* --- Tab Content Area --- */}
      <div className="bg-white p-6 border border-gray-200 ">
        {activeTab && renderContent(activeTab)}
      </div>

    </div>
  );
};

// You can render this component in your main App component like this:
// <div className="p-10">
//   <DynamicProductTabs />
// </div>

export default DynamicProductTabs;