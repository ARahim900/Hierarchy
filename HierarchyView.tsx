import React, { useState, useCallback, useEffect } from 'react';
import type { WaterNode } from '../types';
import TreeNode from './TreeNode';
import ControlPanel from './ControlPanel';

interface HierarchyViewProps {
    data: WaterNode;
    searchQuery: string;
    setSearchQuery: (query: string) => void;
}

const getAllNodeIdsWithChildren = (node: WaterNode): string[] => {
    let ids: string[] = [];
    if (node.children && node.children.length > 0) {
        ids.push(node.id);
        node.children.forEach(child => {
            ids = ids.concat(getAllNodeIdsWithChildren(child));
        });
    }
    return ids;
};

const getNodesToLevel = (node: WaterNode, targetLevel: number, currentLevel = 1): string[] => {
    let ids: string[] = [];
    if (currentLevel < targetLevel && node.children && node.children.length > 0) {
        ids.push(node.id);
        node.children.forEach(child => {
            ids = ids.concat(getNodesToLevel(child, targetLevel, currentLevel + 1));
        });
    }
    return ids;
};

const findAncestors = (node: WaterNode, query: string, ancestors: string[] = []): { found: boolean, path: string[] } => {
    if (node.name.toLowerCase().includes(query.toLowerCase())) {
        return { found: true, path: [...ancestors] };
    }
    if (node.children) {
        for (const child of node.children) {
            const result = findAncestors(child, query, [...ancestors, node.id]);
            if (result.found) {
                return result;
            }
        }
    }
    return { found: false, path: [] };
};

const findAllAncestors = (node: WaterNode, query: string): Set<string> => {
    const ancestorSet = new Set<string>();
    const traverse = (currentNode: WaterNode, path: string[]) => {
        if (currentNode.name.toLowerCase().includes(query.toLowerCase())) {
            path.forEach(p => ancestorSet.add(p));
        }
        if (currentNode.children) {
            currentNode.children.forEach(child => traverse(child, [...path, currentNode.id]));
        }
    };
    traverse(node, []);
    return ancestorSet;
};

const HierarchyView: React.FC<HierarchyViewProps> = ({ data, searchQuery, setSearchQuery }) => {
    const [expandedNodes, setExpandedNodes] = useState<Set<string>>(new Set());

    useEffect(() => {
        setExpandedNodes(new Set(getNodesToLevel(data, 3)));
    }, [data]);

     useEffect(() => {
        if (searchQuery.trim()) {
            const ancestors = findAllAncestors(data, searchQuery.trim());
            setExpandedNodes(prev => new Set([...Array.from(prev), ...Array.from(ancestors)]));
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searchQuery, data]);


    const handleToggleNode = useCallback((nodeId: string) => {
        setExpandedNodes(prev => {
            const newSet = new Set(prev);
            if (newSet.has(nodeId)) {
                newSet.delete(nodeId);
            } else {
                newSet.add(nodeId);
            }
            return newSet;
        });
    }, []);

    const handleExpandAll = useCallback(() => {
        setExpandedNodes(new Set(getAllNodeIdsWithChildren(data)));
    }, [data]);

    const handleCollapseAll = useCallback(() => {
        setExpandedNodes(new Set());
    }, []);

    const handleExpandToLevel = useCallback((level: number) => {
        setExpandedNodes(new Set(getNodesToLevel(data, level + 1)));
    }, [data]);
    
    return (
        <div className="border-t border-brand-divider">
            <ControlPanel
                searchQuery={searchQuery}
                onSearchChange={(e) => setSearchQuery(e.target.value)}
                onExpandAll={handleExpandAll}
                onCollapseAll={handleCollapseAll}
                onExpandToLevel={handleExpandToLevel}
            />
            <div className="p-4 overflow-y-auto" style={{maxHeight: '60vh'}}>
                 <TreeNode
                    node={data}
                    level={0}
                    expandedNodes={expandedNodes}
                    onToggle={handleToggleNode}
                    searchQuery={searchQuery}
                />
            </div>
        </div>
    );
};

export default HierarchyView;
