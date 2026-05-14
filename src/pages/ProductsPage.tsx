import { Container, Grid, Card, CardContent, Typography, Rating, Box, Chip } from '@mui/material';
import { useStore } from '../store/useStore';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

export const ProductsPage = () => {
    const { products } = useStore();
    const navigate = useNavigate();

    return (
        <Container maxWidth="xl" sx={{ py: 4 }}>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <Typography variant="h4" gutterBottom sx={{ mb: 4, fontWeight: 'bold' }}>
                    Все продукты
                </Typography>
            </motion.div>

            <Grid container spacing={3}>
                {products.map((product, index) => (
                    <Grid item xs={12} sm={6} md={4} key={product.id}>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.4 }}
                            whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => navigate(`/product/${product.id}`)}
                            style={{ cursor: 'pointer' }}
                        >
                            <Card sx={{ height: '100%' }}>
                                <CardContent>
                                    <Typography variant="h5" component="div" gutterBottom>
                                        {product.name}
                                    </Typography>
                                    <Chip
                                        label={product.category}
                                        size="small"
                                        color="primary"
                                        sx={{ mb: 2 }}
                                    />
                                    <Typography variant="body2" color="textSecondary" paragraph>
                                        Цена: {product.price.toLocaleString('ru-RU')} ₽
                                    </Typography>
                                    <Box display="flex" alignItems="center" gap={1} mb={1}>
                                        <Rating value={product.rating} precision={0.1} readOnly />
                                        <Typography variant="body2">({product.rating})</Typography>
                                    </Box>
                                    <Box display="flex" alignItems="center" gap={1}>
                                        <TrendingUpIcon color="success" />
                                        <Typography variant="body2">
                                            Продано: {product.sales} шт.
                                        </Typography>
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