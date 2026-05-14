//import { useState } from 'react';
import { Grid, Typography, Box, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import StorefrontIcon from '@mui/icons-material/Storefront';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import AssessmentIcon from '@mui/icons-material/Assessment';

export const MainPage = () => {
    const navigate = useNavigate();

    return (
        <Box>
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <Typography variant="h2" component="h1" gutterBottom align="center" sx={{ fontWeight: 'bold' }}>
                    Аналитическая панель
                </Typography>
                <Typography variant="h5" align="center" color="textSecondary" paragraph>
                    Управляйте данными о продажах и продуктах
                </Typography>
            </motion.div>

            <Grid container spacing={4} sx={{ mt: 4 }}>
                <Grid item xs={12} md={4}>
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        whileHover={{ y: -10 }}
                    >
                        <Box sx={{ textAlign: 'center', p: 4, bgcolor: 'background.paper', borderRadius: 2, boxShadow: 3 }}>
                            <StorefrontIcon sx={{ fontSize: 60, color: '#1976d2', mb: 2 }} />
                            <Typography variant="h5" gutterBottom>Общая аналитика</Typography>
                            <Button variant="contained" onClick={() => navigate('/analytics')}>Перейти</Button>
                        </Box>
                    </motion.div>
                </Grid>

                <Grid item xs={12} md={4}>
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        whileHover={{ y: -10 }}
                    >
                        <Box sx={{ textAlign: 'center', p: 4, bgcolor: 'background.paper', borderRadius: 2, boxShadow: 3 }}>
                            <AssessmentIcon sx={{ fontSize: 60, color: '#4caf50', mb: 2 }} />
                            <Typography variant="h5" gutterBottom>Продукты</Typography>
                            <Button variant="contained" color="success" onClick={() => navigate('/products')}>Перейти</Button>
                        </Box>
                    </motion.div>
                </Grid>

                <Grid item xs={12} md={4}>
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6 }}
                        whileHover={{ y: -10 }}
                    >
                        <Box sx={{ textAlign: 'center', p: 4, bgcolor: 'background.paper', borderRadius: 2, boxShadow: 3 }}>
                            <TrendingUpIcon sx={{ fontSize: 60, color: '#ff9800', mb: 2 }} />
                            <Typography variant="h5" gutterBottom>Топ продажи</Typography>
                            <Button variant="contained" color="warning" onClick={() => navigate('/top')}>Перейти</Button>
                        </Box>
                    </motion.div>
                </Grid>
            </Grid>
        </Box>
    );
};