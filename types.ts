
export interface WaterNode {
  id: string;
  name: string;
  level: string;
  volume: number;
  loss: number;
  lossPercent: number;
  children?: WaterNode[];
}
