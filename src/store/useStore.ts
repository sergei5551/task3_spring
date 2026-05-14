import { create } from 'zustand';
import { salesData, productsData, Sale, Product } from '../data/data';

interface Store {
    sales: Sale[];
    products: Product[];
    getTotalSales: () => number;
    getSalesByCategory: () => { category: string; total: number }[];
    getSalesByRegion: () => { region: string; total: number }[];
    getTopProducts: () => Product[];
    getProductById: (id: number) => Product | undefined;
}

export const useStore = create<Store>((_set, get) => ({
    sales: salesData,
    products: productsData,

    getTotalSales: () => {
        return get().sales.reduce((sum, sale) => sum + sale.amount * sale.quantity, 0);
    },

    getSalesByCategory: () => {
        const categoryMap = new Map<string, number>();
        get().sales.forEach(sale => {
            const total = sale.amount * sale.quantity;
            categoryMap.set(sale.category, (categoryMap.get(sale.category) || 0) + total);
        });
        return Array.from(categoryMap.entries()).map(([category, total]) => ({ category, total }));
    },

    getSalesByRegion: () => {
        const regionMap = new Map<string, number>();
        get().sales.forEach(sale => {
            const total = sale.amount * sale.quantity;
            regionMap.set(sale.region, (regionMap.get(sale.region) || 0) + total);
        });
        return Array.from(regionMap.entries()).map(([region, total]) => ({ region, total }));
    },

    getTopProducts: () => {
        return [...get().products].sort((a, b) => b.sales - a.sales).slice(0, 3);
    },

    getProductById: (id: number) => {
        return get().products.find(p => p.id === id);
    },
}));