import { Container, Grid, Typography, Card, CardContent, Box, LinearProgress } from '@mui/material';
import { useStore } from '../store/useStore';
import { motion } from 'framer-motion';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

export const TopProductsPage = () => {
    const { getTopProducts, products } = useStore();
    const topProducts = getTopProducts();
    const maxSales = Math.max(...products.map(p => p.sales));

    return (
        <Container maxWidth="lg" sx={{ py: 4 }}>
            <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', textAlign: 'center' }}>
                🏆 Топ-3 самых продаваемых товаров
            </Typography>

            <Grid container spacing={4} sx={{ mt: 2 }}>
                {topProducts.map((product, index) => (
                    <Grid item xs={12} md={4} key={product.id}>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.2, duration: 0.5 }}
                            whileHover={{ y: -10 }}
                        >
                            <Card sx={{
                                height: '100%',
                                background: `linear-gradient(135deg, ${index === 0 ? '#ffd70020' : index === 1 ? '#c0c0c020' : '#cd7f3220'} 0%, #ffffff 100%)`,
                                border: `2px solid ${index === 0 ? '#ffd700' : index === 1 ? '#c0c0c0' : '#cd7f32'}`
                            }}>
                                <CardContent>
                                    <Box display="flex" alignItems="center" gap={2} mb={2}>
                                        <EmojiEventsIcon sx={{ fontSize: 40, color: index === 0 ? '#ffd700' : index === 1 ? '#c0c0c0' : '#cd7f32' }} />
                                        <Typography variant="h5">{index + 1} место</Typography>
                                    </Box>
                                    <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold' }}>
                                        {product.name}
                                    </Typography>
                                    <Typography variant="body1" color="textSecondary" paragraph>
                                        Категория: {product.category}
                                    </Typography>
                                    <Typography variant="body1" gutterBottom>
                                        Цена: {product.price.toLocaleString('ru-RU')} ₽
                                    </Typography>
                                    <Box sx={{ mt: 2 }}>
                                        <Typography variant="body2" gutterBottom>
                                            Продажи: {product.sales} шт.
                                        </Typography>
                                        <LinearProgress
                                            variant="determinate"
                                            value={(product.sales / maxSales) * 100}
                                            sx={{ height: 10, borderRadius: 5 }}
                                        />
                                    </Box>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};