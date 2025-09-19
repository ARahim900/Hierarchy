import React from 'react';

interface SummaryCardProps {
    title: string;
    value: number;
    subtitle: string;
    valueClassName?: string;
    lossPercent?: number;
    barClassName?: string;
}

const getLossBarColor = (lossPercent: number): string => {
    if (lossPercent < 10) return 'bg-green-500';
    if (lossPercent < 30) return 'bg-yellow-500';
    if (lossPercent < 45) return 'bg-orange-500';
    return 'bg-red-500';
};


const SummaryCard: React.FC<SummaryCardProps> = ({ title, value, subtitle, valueClassName = 'text-slate-800', lossPercent, barClassName }) => {
    return (
        <div className="bg-slate-50 p-4 rounded-lg border border-brand-divider hover:bg-slate-100 transition-colors duration-200 flex flex-col justify-between">
            <div>
                <h3 className="text-sm font-medium text-brand-subtle uppercase tracking-wider">{title}</h3>
                <p className={`text-3xl font-bold mt-1 ${valueClassName}`}>
                    {value.toLocaleString()} <span className="text-xl text-brand-muted">m³</span>
                </p>
                <p className="text-xs text-brand-subtle mt-1">{subtitle}</p>
            </div>
            {lossPercent !== undefined && (
                <div className="mt-3">
                    <div className="w-full bg-slate-200 rounded-full h-2" title={`Loss: ${lossPercent.toFixed(1)}%`}>
                        <div 
                            className={`h-2 rounded-full ${barClassName || getLossBarColor(lossPercent)}`}
                            style={{ width: `${Math.min(lossPercent, 100)}%` }}
                        ></div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default SummaryCard;