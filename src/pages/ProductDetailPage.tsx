import { Container, Paper, Typography, Box, Rating, Chip, Grid } from '@mui/material';
import { useParams, useNavigate } from 'react-router-dom';
import { useStore } from '../store/useStore';
import { motion } from 'framer-motion';
import { Chart } from '../components/Chart';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Button } from '@mui/material';

export const ProductDetailPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { getProductById, sales } = useStore();
    const product = getProductById(Number(id));

    if (!product) {
        return <Typography>Товар не найден</Typography>;
    }

    const productSales = sales.filter(s => s.product === product.name);
    const totalRevenue = productSales.reduce((sum, sale) => sum + sale.amount * sale.quantity, 0);

    const salesByRegion = productSales.reduce((acc, sale) => {
        acc.set(sale.region, (acc.get(sale.region) || 0) + sale.amount * sale.quantity);
        return acc;
    }, new Map<string, number>());

    const regionData = Array.from(salesByRegion.entries()).map(([region, total]) => ({
        name: region,
        value: total
    }));

    return (
        <Container maxWidth="lg" sx={{ py: 4 }}>
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <Button startIcon={<ArrowBackIcon />} onClick={() => navigate('/products')} sx={{ mb: 3 }}>
                    Назад к продуктам
                </Button>

                <Paper sx={{ p: 4, mb: 4 }}>
                    <Typography variant="h3" gutterBottom>{product.name}</Typography>
                    <Chip label={product.category} color="primary" sx={{ mb: 2 }} />
                    <Grid container spacing={3}>
                        <Grid item xs={12} md={4}>
                            <Typography variant="h6">Цена: {product.price.toLocaleString('ru-RU')} ₽</Typography>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Box display="flex" alignItems="center" gap={1}>
                                <Rating value={product.rating} precision={0.1} readOnly />
                                <Typography>({product.rating})</Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Typography variant="h6">Всего продаж: {product.sales} шт.</Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant="h6">Общая выручка: {totalRevenue.toLocaleString('ru-RU')} ₽</Typography>
                        </Grid>
                    </Grid>
                </Paper>

                {regionData.length > 0 && (
                    <Chart type="pie" data={regionData} title="Распределение продаж по регионам" />
                )}
            </motion.div>
        </Container>
    );
};