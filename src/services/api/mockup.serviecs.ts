interface Product {
    id: string;
    code: string;
    name: string;
    description: string;
    image: string;
    price: number;
    category: string;
    quantity: number;
    inventoryStatus: 'INSTOCK' | 'OUTOFSTOCK';
    rating: number;
}

export const generateMockData = (page: number, size: number): Product[] => {
    const products: Product[] = [];
    const startIndex = page * size;
    for (let i = startIndex; i < startIndex + size; i++) {
        products.push({
            id: i.toString().padStart(4, '0'),
            code: `code${i}`,
            name: `Product ${i}`,
            description: 'Product Description',
            image: `product${i}.jpg`,
            price: Math.floor(Math.random() * 20) + 1,
            category: 'Accessories',
            quantity: Math.floor(Math.random() * 50) + 1,
            inventoryStatus: i % 2 === 0 ? 'INSTOCK' : 'OUTOFSTOCK',
            rating: Math.floor(Math.random() * 5) + 1
        });
    }
    return products;
};
