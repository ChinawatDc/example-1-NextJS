export interface Product {
    id: string;
    code: string;
    name: string;
    description: string;
    image: string;
    price: number;
    category: string;
    startdate: string;
    enddate: string;
    nameby: string;
    quantity: number;
    status: 'รองบประมาณ' | 'กำลังดำเนินการ' | 'เสร็จสิ้น' | 'ล่าช้า' | 'ยังไม่เริ่มโครงการ';
    rating: number;
}

const TOTAL_ITEMS = 45;
const ITEMS_PER_PAGE = 20;

export type Paginate<T = any> = {
    entities: T[];
    page_information: PageInformation;
};

export type PageInformation = {
    count: number;
    last_page: number;
};
const prefixes = ['นาย', 'นาง', 'นางสาว'];
const firstNames = ['สมชาย', 'สมศรี', 'สมนึก', 'อารีย์', 'รัตนา', 'ณรงค์', 'กฤษณ์'];
const lastNames = ['ศรีสุข', 'พึ่งโพธิ์', 'ทองดี', 'จันทร์อ่อน', 'บุญส่ง', 'แสงเงิน'];

const getRandomElement = (array: string[]) => array[Math.floor(Math.random() * array.length)];

const generateRandomDate = (startYear: number, endYear: number): string => {
    const startDate = new Date(startYear, 0, 1);
    const endDate = new Date(endYear, 11, 31);
    const randomDate = new Date(startDate.getTime() + Math.random() * (endDate.getTime() - startDate.getTime()));
    return randomDate.toISOString().split('T')[0]; // Format as YYYY-MM-DD
};

const generateRandomName = (): string => {
    const prefix = getRandomElement(prefixes);
    const firstName = getRandomElement(firstNames);
    const lastName = getRandomElement(lastNames);
    return `${prefix} ${firstName} ${lastName}`;
};

export const generateMockData = (): Paginate<Product> => {
    const products: Product[] = [];
    const statuses: Product['status'][] = [
        'รองบประมาณ',
        'กำลังดำเนินการ',
        'เสร็จสิ้น',
        'ล่าช้า',
        'ยังไม่เริ่มโครงการ'
    ];

    for (let i = 0; i < TOTAL_ITEMS; i++) {
        const startdate = generateRandomDate(2020, 2024);
        const enddate = generateRandomDate(2020, 2024);
        const names = generateRandomName(); 
        products.push({
            id: (i + 1).toString(),
            code: `รหัส${i + 1}`,
            name: `ชื่อโครงการ ${i + 1}`,
            description: 'Product Description',
            image: `product${i + 1}.jpg`,
            price: Math.floor(Math.random() * 20) + 1,
            category: 'Accessories',
            quantity: Math.floor(Math.random() * 50) + 1,
            status: statuses[Math.floor(Math.random() * statuses.length)],
            rating: Math.floor(Math.random() * 5) + 1,
            startdate: startdate,
            enddate: enddate,
            nameby: names,
        });
    }

    const pageInformation: PageInformation = {
        count: TOTAL_ITEMS,
        last_page: Math.ceil(TOTAL_ITEMS / ITEMS_PER_PAGE),
    };

    return {
        entities: products,
        page_information: pageInformation
    };
};