import { Outlet } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Container, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export const Layout = () => {
    return (
        <Box sx={{ minHeight: '100vh', bgcolor: '#f5f5f5' }}>
            <motion.div
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <AppBar position="sticky">
                    <Toolbar>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            Аналитическая панель
                        </Typography>
                        <Button color="inherit" component={Link} to="/">Главная</Button>
                        <Button color="inherit" component={Link} to="/analytics">Аналитика</Button>
                        <Button color="inherit" component={Link} to="/products">Продукты</Button>
                    </Toolbar>
                </AppBar>
            </motion.div>
            <Container maxWidth="xl" sx={{ py: 4 }}>
                <Outlet />
            </Container>
        </Box>
    );
};