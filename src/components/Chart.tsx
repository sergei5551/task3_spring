import ReactECharts from 'echarts-for-react';
import { Paper } from '@mui/material';
import { motion } from 'framer-motion';

interface ChartProps {
    type: 'bar' | 'line' | 'pie';
    data: any[];
    title: string;
    xAxisName?: string;
    yAxisName?: string;
}

export const Chart = ({ type, data, title, xAxisName, yAxisName }: ChartProps) => {
    const getOption = () => {
        if (type === 'bar') {
            return {
                title: { text: title, left: 'center', textStyle: { fontSize: 16, fontWeight: 'bold' } },
                tooltip: { trigger: 'axis', axisPointer: { type: 'shadow' } },
                xAxis: { type: 'category', name: xAxisName, data: data.map(d => d.name) },
                yAxis: { type: 'value', name: yAxisName },
                series: [{ data: data.map(d => d.value), type: 'bar', itemStyle: { borderRadius: [8, 8, 0, 0], color: '#1976d2' } }]
            };
        } else if (type === 'line') {
            return {
                title: { text: title, left: 'center', textStyle: { fontSize: 16, fontWeight: 'bold' } },
                tooltip: { trigger: 'axis' },
                xAxis: { type: 'category', data: data.map(d => d.date || d.name) },
                yAxis: { type: 'value', name: yAxisName },
                series: [{ data: data.map(d => d.value), type: 'line', smooth: true, lineStyle: { color: '#4caf50', width: 3 }, areaStyle: { opacity: 0.3 } }]
            };
        } else {
            return {
                title: { text: title, left: 'center', textStyle: { fontSize: 16, fontWeight: 'bold' } },
                tooltip: { trigger: 'item' },
                series: [{ type: 'pie', radius: '55%', data: data.map(d => ({ name: d.name, value: d.value })) }]
            };
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
        >
            <Paper elevation={3} sx={{ p: 2 }}>
                <ReactECharts option={getOption()} style={{ height: '400px', width: '100%' }} />
            </Paper>
        </motion.div>
    );
};