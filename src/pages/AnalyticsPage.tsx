import { Grid, Typography } from '@mui/material';

import { useStore } from '../store/useStore';
import { Card } from '../components/Card';
import { Chart } from '../components/Chart';
import { Legend } from '../components/Legend';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import CategoryIcon from '@mui/icons-material/Category';
import LocationOnIcon from '@mui/icons-material/LocationOn';

export const AnalyticsPage = () => {
    const { getTotalSales, getSalesByCategory, getSalesByRegion, sales } = useStore();

    const totalSales = getTotalSales();
    const categoryData = getSalesByCategory().map(item => ({ name: item.category, value: item.total }));
    const regionData = getSalesByRegion().map(item => ({ name: item.region, value: item.total }));

    const legendItems = categoryData.map((item, index) => ({
        color: ['#1976d2', '#4caf50', '#ff9800'][index % 3],
        label: item.name,
        value: item.value
    }));

    return (
        <>
            <Typography variant="h4" gutterBottom sx={{ mb: 4, fontWeight: 'bold' }}>
                Общая аналитика
            </Typography>

            <Grid container spacing={3}>
                <Grid item xs={12} md={4}>
                    <Card title="Общая выручка" value={`${totalSales.toLocaleString('ru-RU')} ₽`} icon={<AttachMoneyIcon />} color="#4caf50" />
                </Grid>
                <Grid item xs={12} md={4}>
                    <Card title="Всего продаж" value={sales.length} icon={<CategoryIcon />} color="#2196f3" />
                </Grid>
                <Grid item xs={12} md={4}>
                    <Card title="Категории" value={new Set(sales.map(s => s.category)).size.toString()} icon={<LocationOnIcon />} color="#ff9800" />
                </Grid>

                <Grid item xs={12} md={6}>
                    <Chart type="bar" data={categoryData} title="Продажи по категориям" xAxisName="Категория" yAxisName="Сумма (₽)" />
                </Grid>

                <Grid item xs={12} md={6}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Chart type="pie" data={regionData} title="Распределение по регионам" />
                        </Grid>
                        <Grid item xs={12}>
                            <Legend items={legendItems} />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
};