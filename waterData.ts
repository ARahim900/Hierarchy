
import type { WaterNode } from '../types';

export const waterData: WaterNode = {
    id: 'main-bulk',
    name: 'Main Bulk (NAMA)',
    level: 'L1',
    volume: 41743,
    loss: 2944,
    lossPercent: 7.1,
    children: [
        {
            id: 'dc-group',
            name: 'Direct Connections',
            level: 'DC',
            volume: 19450,
            loss: 0,
            lossPercent: 0,
            children: [
                { id: 'dc-1', name: 'Hotel Main Building', level: 'DC', volume: 16249, loss: 0, lossPercent: 0 },
                { id: 'dc-2', name: 'Al Adrak Camp', level: 'DC', volume: 924, loss: 0, lossPercent: 0 },
                { id: 'dc-3', name: 'Al Adrak Company', level: 'DC', volume: 1511, loss: 0, lossPercent: 0 },
                { id: 'dc-4', name: 'Irrigation Controller UP', level: 'DC', volume: 272, loss: 0, lossPercent: 0 },
                { id: 'dc-5', name: 'Irrigation Controller DOWN', level: 'DC', volume: 394, loss: 0, lossPercent: 0 },
                { id: 'dc-6', name: 'Community Mgmt - STP', level: 'DC', volume: 56, loss: 0, lossPercent: 0 },
                { id: 'dc-7', name: 'Building (Security)', level: 'DC', volume: 16, loss: 0, lossPercent: 0 },
                { id: 'dc-8', name: 'Building (ROP)', level: 'DC', volume: 20, loss: 0, lossPercent: 0 },
                { id: 'dc-9', name: 'PHASE 02 Main Entrance', level: 'DC', volume: 8, loss: 0, lossPercent: 0 },
            ]
        },
        {
            id: 'zone-bulks',
            name: 'Zone Bulks',
            level: 'L2',
            volume: 19349,
            loss: 4167,
            lossPercent: 21.5,
            children: [
                {
                    id: 'zone-fm',
                    name: 'Zone_01_(FM)',
                    level: 'L2',
                    volume: 2305,
                    loss: 107,
                    lossPercent: 4.6,
                    children: [
                        { id: 'fm-1', name: 'Building FM', level: 'L3', volume: 40, loss: 0, lossPercent: 0 },
                        { id: 'fm-2', name: 'Building Taxi', level: 'L3', volume: 17, loss: 0, lossPercent: 0 },
                        { id: 'fm-3', name: 'Building B1', level: 'L3', volume: 298, loss: 0, lossPercent: 0 },
                        { id: 'fm-4', name: 'Building B2', level: 'L3', volume: 240, loss: 0, lossPercent: 0 },
                        { id: 'fm-5', name: 'Building B3', level: 'L3', volume: 149, loss: 0, lossPercent: 0 },
                        { id: 'fm-6', name: 'Building B4', level: 'L3', volume: 179, loss: 0, lossPercent: 0 },
                        { id: 'fm-7', name: 'Building B5', level: 'L3', volume: 54, loss: 0, lossPercent: 0 },
                        { id: 'fm-8', name: 'Building B6', level: 'L3', volume: 210, loss: 0, lossPercent: 0 },
                        { id: 'fm-9', name: 'Building B7', level: 'L3', volume: 155, loss: 0, lossPercent: 0 },
                        { id: 'fm-10', name: 'Building B8', level: 'L3', volume: 84, loss: 0, lossPercent: 0 },
                        { id: 'fm-11', name: 'Building CIF/CB', level: 'L3', volume: 731, loss: 0, lossPercent: 0 },
                        { id: 'fm-12', name: 'Building Nursery', level: 'L3', volume: 2, loss: 0, lossPercent: 0 },
                        { id: 'fm-13', name: 'Cabinet FM (Contractors)', level: 'L3', volume: 49, loss: 0, lossPercent: 0 },
                        { id: 'fm-14', name: 'Building (MEP)', level: 'L3', volume: 2, loss: 0, lossPercent: 0 },
                        { id: 'fm-15', name: 'Room PUMP (FIRE)', level: 'L3', volume: 0, loss: 0, lossPercent: 0 },
                        { id: 'fm-16', name: 'Building CIF/CB (COFFEE SH)', level: 'L3', volume: 0, loss: 0, lossPercent: 0 },
                        { id: 'fm-17', name: 'Irrigation Tank (Z01_FM)', level: 'L3', volume: 0, loss: 0, lossPercent: 0 },
                    ]
                },
                {
                    id: 'zone-3a',
                    name: 'Zone_03_(A)',
                    level: 'L2',
                    volume: 6212,
                    loss: 758,
                    lossPercent: 12.2,
                    children: [
                        { id: 'v3a-1', name: 'Z3-42 Villa', level: 'L3', volume: 65, loss: 0, lossPercent: 0 },
                        { id: 'v3a-2', name: 'Z3-38 Villa', level: 'L3', volume: 24, loss: 0, lossPercent: 0 },
                        { id: 'v3a-3', name: 'Z3-23 Villa', level: 'L3', volume: 0, loss: 0, lossPercent: 0 },
                        { id: 'v3a-4', name: 'Z3-41 Villa', level: 'L3', volume: 5, loss: 0, lossPercent: 0 },
                        {
                            id: 'd75-building',
                            name: 'D-75 Building Bulk',
                            level: 'L3',
                            volume: 101,
                            loss: 4,
                            lossPercent: 4.0,
                            children: [
                                { id: 'd75-1', name: 'Z3-75(1)', level: 'L4', volume: 1, loss: 0, lossPercent: 0 },
                                { id: 'd75-2', name: 'Z3-75(2)', level: 'L4', volume: 37, loss: 0, lossPercent: 0 },
                                { id: 'd75-3', name: 'Z3-75(3)', level: 'L4', volume: 0, loss: 0, lossPercent: 0 },
                                { id: 'd75-4', name: 'Z3-75(4)', level: 'L4', volume: 0, loss: 0, lossPercent: 0 },
                                { id: 'd75-5', name: 'Z3-75(5)', level: 'L4', volume: 17, loss: 0, lossPercent: 0 },
                                { id: 'd75-6', name: 'Z3-75(6)', level: 'L4', volume: 41, loss: 0, lossPercent: 0 },
                                { id: 'd75-common', name: 'D-75 Common Area', level: 'L4', volume: 4, loss: 0, lossPercent: 0 },
                            ]
                        },
                        {
                            id: 'd74-building',
                            name: 'D-74 Building Bulk',
                            level: 'L3',
                            volume: 106,
                            loss: 55,
                            lossPercent: 51.9,
                            children: [
                                { id: 'd74-1', name: 'Z3-74(1)', level: 'L4', volume: 0, loss: 0, lossPercent: 0 },
                                { id: 'd74-2', name: 'Z3-74(2)', level: 'L4', volume: 0, loss: 0, lossPercent: 0 },
                                { id: 'd74-3', name: 'Z3-74(3)', level: 'L4', volume: 25, loss: 0, lossPercent: 0 },
                                { id: 'd74-4', name: 'Z3-74(4)', level: 'L4', volume: 11, loss: 0, lossPercent: 0 },
                                { id: 'd74-5', name: 'Z3-74(5)', level: 'L4', volume: 6, loss: 0, lossPercent: 0 },
                                { id: 'd74-6', name: 'Z3-74(6)', level: 'L4', volume: 7, loss: 0, lossPercent: 0 },
                                { id: 'd74-common', name: 'D-74 Common Area', level: 'L4', volume: 2, loss: 0, lossPercent: 0 },
                            ]
                        },
                    ]
                },
                {
                    id: 'zone-3b',
                    name: 'Zone_03_(B)',
                    level: 'L2',
                    volume: 2886,
                    loss: 191,
                    lossPercent: 6.6,
                    children: [
                        { id: 'v3b-1', name: 'Z3-21 Villa', level: 'L3', volume: 56, loss: 0, lossPercent: 0 },
                        { id: 'v3b-2', name: 'Z3-20 Villa', level: 'L3', volume: 10, loss: 0, lossPercent: 0 },
                        { id: 'v3b-3', name: 'Z3-13 Villa', level: 'L3', volume: 18, loss: 0, lossPercent: 0 },
                        { id: 'v3b-4', name: 'Z3-15 Villa', level: 'L3', volume: 45, loss: 0, lossPercent: 0 },
                    ]
                },
                {
                    id: 'zone-5',
                    name: 'Zone_05',
                    level: 'L2',
                    volume: 3968,
                    loss: 1296,
                    lossPercent: 32.7,
                     children: [
                        { id: 'z5-1', name: 'Z5-17', level: 'L3', volume: 74, loss: 0, lossPercent: 0 },
                        { id: 'z5-2', name: 'Z5-13', level: 'L3', volume: 146, loss: 0, lossPercent: 0 },
                        { id: 'z5-3', name: 'Z5-14', level: 'L3', volume: 81, loss: 0, lossPercent: 0 },
                    ]
                },
                {
                    id: 'zone-8',
                    name: 'Zone_08',
                    level: 'L2',
                    volume: 3840,
                    loss: 1757,
                    lossPercent: 45.8,
                    children: [
                        { id: 'z8-1', name: 'Z8-11', level: 'L3', volume: 0, loss: 0, lossPercent: 0 },
                        { id: 'z8-2', name: 'Z8-13', level: 'L3', volume: 245, loss: 0, lossPercent: 0 },
                        { id: 'z8-3', name: 'Z8-1', level: 'L3', volume: 0, loss: 0, lossPercent: 0 },
                    ]
                },
                {
                    id: 'zone-vs',
                    name: 'Zone_VS (Village Square)',
                    level: 'L2',
                    volume: 77,
                    loss: 30,
                    lossPercent: 39.0,
                    children: [
                         { id: 'vs-6', name: 'Laundry Services (FF 593)', level: 'L3', volume: 42, loss: 0, lossPercent: 0 },
                         { id: 'vs-7', name: 'Shop No.593A', level: 'L3', volume: 0, loss: 0, lossPercent: 0 },
                    ]
                },
                {
                    id: 'zone-sc',
                    name: 'Zone_SC (Sales Center)',
                    level: 'L2',
                    volume: 61,
                    loss: 28,
                    lossPercent: 45.9,
                    children: [
                        { id: 'sc-1', name: 'Sale Centre Caffe & Bar', level: 'L3', volume: 33, loss: 0, lossPercent: 0 },
                    ]
                },
            ]
        }
    ]
};
