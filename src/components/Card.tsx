import { motion } from 'framer-motion';
import { Card as MuiCard, CardContent, Typography, Box } from '@mui/material';

interface AnimatedCardProps {
    title: string;
    value: string | number;
    icon?: React.ReactNode;
    color?: string;
}

export const Card = ({ title, value, icon, color = '#1976d2' }: AnimatedCardProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.3 }}
        >
            <MuiCard sx={{ minWidth: 200, background: `linear-gradient(135deg, ${color}20, ${color}05)`, border: `1px solid ${color}30` }}>
                <CardContent>
                    <Box display="flex" alignItems="center" justifyContent="space-between">
                        <Typography variant="h6" component="div" color="textSecondary">
                            {title}
                        </Typography>
                        {icon && <Box color={color}>{icon}</Box>}
                    </Box>
                    <Typography variant="h4" component="div" sx={{ mt: 2, fontWeight: 'bold', color }}>
                        {value}
                    </Typography>
                </CardContent>
            </MuiCard>
        </motion.div>
    );
};