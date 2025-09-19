import React from 'react';
import { SearchIcon } from './icons/SearchIcon';

interface ControlPanelProps {
    searchQuery: string;
    onSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onExpandAll: () => void;
    onCollapseAll: () => void;
    onExpandToLevel: (level: number) => void;
}

const ControlButton: React.FC<{ onClick: () => void, children: React.ReactNode }> = ({ onClick, children }) => (
    <button
        onClick={onClick}
        className="px-3 py-1.5 text-xs font-semibold text-slate-600 bg-slate-200 rounded-md hover:bg-slate-300 hover:text-slate-800 transition-all duration-200"
    >
        {children}
    </button>
);

const ControlPanel: React.FC<ControlPanelProps> = ({
    searchQuery,
    onSearchChange,
    onExpandAll,
    onCollapseAll,
    onExpandToLevel
}) => {
    return (
        <div className="p-4 flex flex-col sm:flex-row items-center gap-4">
            <div className="relative w-full sm:w-auto sm:flex-grow">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <SearchIcon className="w-4 h-4 text-brand-muted" />
                </div>
                <input
                    type="text"
                    placeholder="Search for meter..."
                    value={searchQuery}
                    onChange={onSearchChange}
                    className="w-full bg-white text-slate-700 placeholder-brand-muted border border-slate-300 rounded-lg py-2 pl-9 pr-3 focus:outline-none focus:ring-2 focus:ring-brand-accent/70 text-sm"
                />
            </div>
            <div className="flex items-center gap-2 flex-wrap justify-center">
                <ControlButton onClick={onExpandAll}>Expand All</ControlButton>
                <ControlButton onClick={onCollapseAll}>Collapse All</ControlButton>
                <ControlButton onClick={() => onExpandToLevel(2)}>Show L2</ControlButton>
                <ControlButton onClick={() => onExpandToLevel(3)}>Show L3</ControlButton>
                <ControlButton onClick={() => onExpandToLevel(4)}>Show All L4</ControlButton>
            </div>
        </div>
    );
};

export default ControlPanel;