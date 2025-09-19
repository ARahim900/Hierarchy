import React from 'react';
import type { WaterNode } from '../types';
import { ChevronRightIcon } from './icons/ChevronRightIcon';
import { FolderIcon } from './icons/FolderIcon';
import { MeterIcon } from './icons/MeterIcon';
import { WarningIcon } from './icons/WarningIcon';

interface TreeNodeProps {
    node: WaterNode;
    level: number;
    expandedNodes: Set<string>;
    onToggle: (nodeId: string) => void;
    searchQuery: string;
}

const getLossBarColor = (lossPercent: number): string => {
    if (lossPercent < 10) return 'bg-green-500';
    if (lossPercent < 30) return 'bg-yellow-500';
    if (lossPercent < 45) return 'bg-orange-500';
    return 'bg-red-500';
};

const getLossTextColor = (lossPercent: number): string => {
    if (lossPercent < 10) return 'text-green-600';
    if (lossPercent < 30) return 'text-yellow-600';
    if (lossPercent < 45) return 'text-orange-500';
    return 'text-red-600';
};

const getLevelClass = (level: string): string => {
    const levelLower = level.toLowerCase();
    if (levelLower === 'l1') return 'bg-sky-500 text-white';
    if (levelLower === 'l2') return 'bg-indigo-500 text-white';
    if (levelLower === 'l3') return 'bg-emerald-500 text-white';
    if (levelLower === 'l4') return 'bg-amber-500 text-white';
    if (levelLower === 'dc') return 'bg-rose-500 text-white';
    return 'bg-slate-500 text-white';
};

const getRowBackgroundColor = (level: number, isHighlighted: boolean): string => {
    if (isHighlighted) {
        return 'bg-brand-accent/10'; // Search highlight takes precedence
    }
    if (level === 0) {
        // Highlight for the L1 main bulk
        return 'bg-sky-50 hover:bg-sky-100';
    }
    if (level === 1) {
        // Highlight for the L2 main summaries (Direct Connections, Zone Bulks)
        return 'bg-slate-50 hover:bg-slate-100';
    }
    // Default for all other nodes
    return 'hover:bg-slate-100';
};


const TreeNodeComponent: React.FC<TreeNodeProps> = ({ node, level, expandedNodes, onToggle, searchQuery }) => {
    const hasChildren = node.children && node.children.length > 0;
    const isExpanded = expandedNodes.has(node.id);
    const isHighlighted = searchQuery.trim() && node.name.toLowerCase().includes(searchQuery.toLowerCase().trim());

    const isHighLoss = node.lossPercent >= 30;
    const isCriticalLoss = node.lossPercent >= 45;

    return (
        <div style={{ paddingLeft: `${level * 1.25}rem` }} className="flex flex-col">
            <div
                className={`relative overflow-hidden flex items-center text-sm py-1.5 px-2 rounded-md transition-all duration-150 group ${getRowBackgroundColor(level, isHighlighted)}`}
                onClick={() => hasChildren && onToggle(node.id)}
            >
                <div className="flex items-center gap-2 flex-grow min-w-0">
                     <div className="w-5 h-5 flex items-center justify-center">
                        {hasChildren ? (
                            <ChevronRightIcon
                                className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${isExpanded ? 'rotate-90' : ''}`}
                            />
                        ) : (
                             <span className="w-4 h-4"></span>
                        )}
                    </div>
                    
                    <div className="w-5 h-5 flex items-center justify-center">
                        {hasChildren ? <FolderIcon className="text-sky-500" /> : <MeterIcon className="text-slate-500" />}
                    </div>
                    
                    <span className={`flex-shrink-0 text-xs font-bold w-7 h-5 flex items-center justify-center rounded-sm ${getLevelClass(node.level)}`}>
                        {node.level}
                    </span>
                    
                    {isHighLoss && (
                        <span className="flex-shrink-0" title={`High Loss: ${node.lossPercent.toFixed(1)}%`}>
                            <WarningIcon 
                                className={`w-4 h-4 ${isCriticalLoss ? 'text-red-500' : 'text-orange-400'}`}
                            />
                        </span>
                    )}

                    <span className="text-slate-700 truncate group-hover:text-slate-900" title={node.name}>
                        {node.name}
                    </span>
                </div>

                <div className="flex items-center gap-4 ml-4 flex-shrink-0">
                    <div className="flex items-center gap-2 w-48" title={node.loss > 0 ? `Loss: ${node.loss.toLocaleString()} m³ (${node.lossPercent.toFixed(1)}%)` : undefined}>
                        {node.loss > 0 ? (
                            <>
                                <span className={`font-mono text-xs w-16 text-right ${getLossTextColor(node.lossPercent)}`}>
                                    {node.loss.toLocaleString()}&nbsp;m³
                                </span>
                                <div className="w-full bg-slate-200 rounded-full h-1.5 flex-grow">
                                    <div
                                        className={`h-1.5 rounded-full ${getLossBarColor(node.lossPercent)}`}
                                        style={{ width: `${Math.min(node.lossPercent, 100)}%` }}
                                    ></div>
                                </div>
                                <span className={`text-xs font-mono w-12 text-right ${getLossTextColor(node.lossPercent)}`}>
                                    {node.lossPercent.toFixed(1)}%
                                </span>
                            </>
                        ) : (
                           <div className="w-full h-1.5"></div>
                        )}
                    </div>
                    <span className="font-mono text-right w-24 text-slate-600">
                        {node.volume.toLocaleString()} m³
                    </span>
                </div>
            </div>

            {hasChildren && isExpanded && (
                <div className="mt-1 border-l border-slate-200/80">
                    {node.children?.map(child => (
                        <MemoizedTreeNode
                            key={child.id}
                            node={child}
                            level={level + 1}
                            expandedNodes={expandedNodes}
                            onToggle={onToggle}
                            searchQuery={searchQuery}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

const MemoizedTreeNode = React.memo(TreeNodeComponent);
export default MemoizedTreeNode;
