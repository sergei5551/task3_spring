export interface Sale {
    id: number;
    product: string;
    category: string;
    amount: number;
    quantity: number;
    date: string;
    region: string;
}

export interface Product {
    id: number;
    name: string;
    category: string;
    price: number;
    rating: number;
    sales: number;
}

export const salesData: Sale[] = [
    { id: 1, product: 'Ноутбук', category: 'Электроника', amount: 1200, quantity: 3, date: '2024-01-15', region: 'Москва' },
    { id: 2, product: 'Смартфон', category: 'Электроника', amount: 800, quantity: 5, date: '2024-01-16', region: 'СПб' },
    { id: 3, product: 'Наушники', category: 'Аксессуары', amount: 150, quantity: 10, date: '2024-01-17', region: 'Москва' },
    { id: 4, product: 'Клавиатура', category: 'Аксессуары', amount: 100, quantity: 4, date: '2024-01-18', region: 'Казань' },
    { id: 5, product: 'Монитор', category: 'Электроника', amount: 500, quantity: 2, date: '2024-01-19', region: 'Москва' },
    { id: 6, product: 'Мышь', category: 'Аксессуары', amount: 50, quantity: 15, date: '2024-01-20', region: 'СПб' },
    { id: 7, product: 'Планшет', category: 'Электроника', amount: 400, quantity: 3, date: '2024-01-21', region: 'Новосибирск' },
    { id: 8, product: 'Чехол', category: 'Аксессуары', amount: 30, quantity: 8, date: '2024-01-22', region: 'Москва' },
    //
    { id: 9, product: 'Ноутбук', category: 'Электроника', amount: 1100, quantity: 2, date: '2024-01-23', region: 'СПб' },
    { id: 10, product: 'Ноутбук', category: 'Электроника', amount: 1250, quantity: 1, date: '2024-01-24', region: 'Казань' },
    { id: 11, product: 'Ноутбук', category: 'Электроника', amount: 1300, quantity: 2, date: '2024-01-25', region: 'Новосибирск' },
    { id: 12, product: 'Ноутбук', category: 'Электроника', amount: 1150, quantity: 1, date: '2024-01-26', region: 'Екатеринбург' },
];

export const productsData: Product[] = [
    { id: 1, name: 'Ноутбук', category: 'Электроника', price: 1200, rating: 4.8, sales: 45 },
    { id: 2, name: 'Смартфон', category: 'Электроника', price: 800, rating: 4.6, sales: 78 },
    { id: 3, name: 'Наушники', category: 'Аксессуары', price: 150, rating: 4.5, sales: 120 },
    { id: 4, name: 'Клавиатура', category: 'Аксессуары', price: 100, rating: 4.3, sales: 56 },
    { id: 5, name: 'Монитор', category: 'Электроника', price: 500, rating: 4.7, sales: 34 },
    { id: 6, name: 'Мышь', category: 'Аксессуары', price: 50, rating: 4.4, sales: 89 },
];