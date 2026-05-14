import { Box, Typography, Paper } from '@mui/material';
import { motion } from 'framer-motion';

interface LegendProps {
    items: { color: string; label: string; value: number }[];
}

export const Legend = ({ items }: LegendProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
        >
            <Paper elevation={2} sx={{ p: 2 }}>
                <Typography variant="h6" gutterBottom>Легенда</Typography>
                {items.map((item, index) => (
                    <Box key={index} display="flex" alignItems="center" gap={2} mb={1}>
                        <Box sx={{ width: 20, height: 20, bgcolor: item.color, borderRadius: 1 }} />
                        <Typography>{item.label}</Typography>
                        <Typography fontWeight="bold">{item.value.toLocaleString('ru-RU')}</Typography>
                    </Box>
                ))}
            </Paper>
        </motion.div>
    );
};