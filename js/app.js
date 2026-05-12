// =========================================
// FlipShop - Complete E-Commerce App Logic
// =========================================

function getProducts() {
    return [
        {
            id: 1,
            name: "Neev's Dizain Studio Women Cotton Rayon Kurta Pant Set",
            brand: "Gosriki",
            category: "fashion",
            subcategory: "kurti",
            price: 139,
            discount: 90,
            rating: 4.6,
            reviews: 1543,
            image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=400&h=400&fit=crop",
            images: [
                "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=600&h=600&fit=crop",
                "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=600&h=600&fit=crop",
                "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=600&h=600&fit=crop",
                "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=600&h=600&fit=crop"
            ],
            description: "The iPhone 15 Pro Max features aerospace-grade titanium design with Ceramic Shield front that is tougher than any smartphone glass. A17 Pro chip delivers incredible performance.",
            sizes: null,
            sizeType: null
        },
        {
            id: 2,
            name: "Samsung Galaxy S24 Ultra 5G (256GB) - Titanium Gray",
            brand: "Samsung",
            category: "electronics",
            subcategory: "mobile",
            price: 129999,
            discount: 15,
            rating: 4.5,
            reviews: 8932,
            image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=400&h=400&fit=crop",
            images: [
                "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=600&h=600&fit=crop",
                "https://images.unsplash.com/photo-1583573636522-5b7e8a6b3d5b?w=600&h=600&fit=crop",
                "https://images.unsplash.com/photo-1546054454-aa26e2b734c7?w=600&h=600&fit=crop",
                "https://images.unsplash.com/photo-1580910051074-3eb694886505?w=600&h=600&fit=crop"
            ],
            description: "Galaxy S24 Ultra with the most powerful Galaxy processor yet and built-in S Pen. Experience Galaxy AI features that transform your phone experience.",
            sizes: null,
            sizeType: null
        },
        {
            id: 3,
            name: "Sony WH-1000XM5 Wireless Noise Cancelling Headphones",
            brand: "Sony",
            category: "electronics",
            subcategory: "audio",
            price: 26990,
            discount: 25,
            rating: 4.7,
            reviews: 15678,
            image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=400&h=400&fit=crop",
            images: [
                "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=600&h=600&fit=crop",
                "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&h=600&fit=crop",
                "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=600&h=600&fit=crop",
                "https://images.unsplash.com/photo-1491927570842-0261e477d937?w=600&h=600&fit=crop"
            ],
            description: "Industry-leading noise cancellation with Auto NC Optimizer. Exceptionally comfortable and lightweight with 30 hours of battery life.",
            sizes: null,
            sizeType: null
        },
        {
            id: 4,
            name: "MacBook Air M2 Chip - Midnight (8GB/256GB)",
            brand: "Apple",
            category: "electronics",
            subcategory: "laptop",
            price: 99900,
            discount: 12,
            rating: 4.8,
            reviews: 6234,
            image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=400&fit=crop",
            images: [
                "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=600&h=600&fit=crop",
                "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=600&h=600&fit=crop",
                "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=600&h=600&fit=crop",
                "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600&h=600&fit=crop"
            ],
            description: "Strikingly thin design with M2 chip for incredible performance and up to 18 hours of battery life. 13.6-inch Liquid Retina display.",
            sizes: null,
            sizeType: null
        },
        {
            id: 5,
            name: "Nike Air Max 270 React Running Shoes - Mens",
            brand: "Nike",
            category: "fashion",
            subcategory: "shoes",
            price: 8995,
            discount: 35,
            rating: 4.3,
            reviews: 23456,
            image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop",
            images: [
                "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&h=600&fit=crop",
                "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=600&h=600&fit=crop",
                "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=600&h=600&fit=crop",
                "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=600&h=600&fit=crop"
            ],
            description: "The Nike Air Max 270 React combines two of Nikes biggest innovations for an unbelievably soft and smooth ride. Lightweight and durable for all-day comfort.",
            sizes: [
                { label: "UK 6", value: "UK6", inStock: true },
                { label: "UK 7", value: "UK7", inStock: true },
                { label: "UK 8", value: "UK8", inStock: true },
                { label: "UK 9", value: "UK9", inStock: true },
                { label: "UK 10", value: "UK10", inStock: false },
                { label: "UK 11", value: "UK11", inStock: true },
                { label: "UK 12", value: "UK12", inStock: true }
            ],
            sizeType: "shoe",
            sizeChart: {
                headers: ["UK Size", "US Size", "EU Size", "Foot Length (cm)"],
                rows: [
                    ["UK 6", "US 7", "EU 40", "25.0"],
                    ["UK 7", "US 8", "EU 41", "25.5"],
                    ["UK 8", "US 9", "EU 42", "26.5"],
                    ["UK 9", "US 10", "EU 43", "27.0"],
                    ["UK 10", "US 11", "EU 44", "28.0"],
                    ["UK 11", "US 12", "EU 45", "28.5"],
                    ["UK 12", "US 13", "EU 46", "29.5"]
                ]
            }
        },
        {
            id: 6,
            name: "Levis Mens 511 Slim Fit Jeans - Dark Indigo",
            brand: "Levis",
            category: "fashion",
            subcategory: "clothing",
            price: 2999,
            discount: 40,
            rating: 4.2,
            reviews: 34567,
            image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&h=400&fit=crop",
            images: [
                "https://images.unsplash.com/photo-1542272604-787c3835535d?w=600&h=600&fit=crop",
                "https://images.unsplash.com/photo-1555689502-c4b22d76c56f?w=600&h=600&fit=crop",
                "https://images.unsplash.com/photo-1475178626620-a4d074967452?w=600&h=600&fit=crop",
                "https://images.unsplash.com/photo-1582552938357-32b906df40cb?w=600&h=600&fit=crop"
            ],
            description: "Levis 511 Slim Fit Jeans sit below the waist with a slim fit from hip to ankle. Classic five-pocket styling with premium stretch denim.",
            sizes: [
                { label: "28", value: "28", inStock: true },
                { label: "30", value: "30", inStock: true },
                { label: "32", value: "32", inStock: true },
                { label: "34", value: "34", inStock: true },
                { label: "36", value: "36", inStock: false },
                { label: "38", value: "38", inStock: true },
                { label: "40", value: "40", inStock: true }
            ],
            sizeType: "waist",
            sizeChart: {
                headers: ["Waist Size", "Waist (inches)", "Hip (inches)", "Length (inches)"],
                rows: [
                    ["28", "28-29", "35-36", "30"],
                    ["30", "30-31", "37-38", "30"],
                    ["32", "32-33", "39-40", "32"],
                    ["34", "34-35", "41-42", "32"],
                    ["36", "36-37", "43-44", "32"],
                    ["38", "38-39", "45-46", "32"],
                    ["40", "40-41", "47-48", "34"]
                ]
            }
        },
        {
            id: 7,
            name: "Ray-Ban Aviator Classic Sunglasses - Gold/Green",
            brand: "Ray-Ban",
            category: "fashion",
            subcategory: "accessories",
            price: 7490,
            discount: 20,
            rating: 4.5,
            reviews: 18234,
            image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=400&fit=crop",
            images: [
                "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600&h=600&fit=crop",
                "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=600&h=600&fit=crop",
                "https://images.unsplash.com/photo-1508296695146-257a814070b4?w=600&h=600&fit=crop",
                "https://images.unsplash.com/photo-1473496169904-658ba7574b0d?w=600&h=600&fit=crop"
            ],
            description: "The iconic Ray-Ban Aviator is one of the most recognized styles in the history of sunglasses. Originally designed for U.S. aviators in 1937.",
            sizes: null,
            sizeType: null
        },
        {
            id: 8,
            name: "Allen Solly Mens Regular Fit Polo T-Shirt",
            brand: "Allen Solly",
            category: "fashion",
            subcategory: "clothing",
            price: 1499,
            discount: 50,
            rating: 4.1,
            reviews: 45678,
            image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop",
            images: [
                "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=600&fit=crop",
                "https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=600&h=600&fit=crop",
                "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=600&h=600&fit=crop",
                "https://images.unsplash.com/photo-1562157873-818bc0726f68?w=600&h=600&fit=crop"
            ],
            description: "Classic polo t-shirt with regular fit made from premium cotton for maximum comfort. Perfect for casual and semi-formal occasions.",
            sizes: [
                { label: "XS", value: "XS", inStock: true },
                { label: "S", value: "S", inStock: true },
                { label: "M", value: "M", inStock: true },
                { label: "L", value: "L", inStock: true },
                { label: "XL", value: "XL", inStock: true },
                { label: "XXL", value: "XXL", inStock: false },
                { label: "3XL", value: "3XL", inStock: true }
            ],
            sizeType: "clothing",
            sizeChart: {
                headers: ["Size", "Chest (inches)", "Length (inches)", "Shoulder (inches)"],
                rows: [
                    ["XS", "36", "26", "16"],
                    ["S", "38", "27", "17"],
                    ["M", "40", "28", "18"],
                    ["L", "42", "29", "19"],
                    ["XL", "44", "30", "20"],
                    ["XXL", "46", "31", "21"],
                    ["3XL", "48", "32", "22"]
                ]
            }
        },
        {
            id: 9,
            name: "IKEA KALLAX Shelf Unit - White (4x2)",
            brand: "IKEA",
            category: "home",
            subcategory: "furniture",
            price: 8990,
            discount: 15,
            rating: 4.4,
            reviews: 7654,
            image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=400&fit=crop",
            images: [
                "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&h=600&fit=crop",
                "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=600&h=600&fit=crop",
                "https://images.unsplash.com/photo-1484101403633-562f891dc89a?w=600&h=600&fit=crop",
                "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?w=600&h=600&fit=crop"
            ],
            description: "Versatile shelf unit that can be placed on the floor or mounted on the wall. Smooth surfaces make it easy to clean.",
            sizes: null,
            sizeType: null
        },
        {
            id: 10,
            name: "Prestige Iris 750 Watt Mixer Grinder - 3 Jars",
            brand: "Prestige",
            category: "home",
            subcategory: "appliance",
            price: 3299,
            discount: 30,
            rating: 4.3,
            reviews: 12345,
            image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=400&fit=crop",
            images: [
                "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=600&fit=crop",
                "https://images.unsplash.com/photo-1585515320310-259814833e62?w=600&h=600&fit=crop",
                "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600&h=600&fit=crop",
                "https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?w=600&h=600&fit=crop"
            ],
            description: "750-watt powerful motor mixer grinder with 3 stainless steel jars. Features overload protection and ergonomic design.",
            sizes: null,
            sizeType: null
        },
        {
            id: 11,
            name: "The Body Shop Tea Tree Skin Clearing Facial Wash",
            brand: "The Body Shop",
            category: "beauty",
            subcategory: "skincare",
            price: 695,
            discount: 20,
            rating: 4.4,
            reviews: 9876,
            image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=400&h=400&fit=crop",
            images: [
                "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=600&h=600&fit=crop",
                "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=600&h=600&fit=crop",
                "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=600&h=600&fit=crop",
                "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=600&h=600&fit=crop"
            ],
            description: "A refreshing gel facial wash with Community Trade tea tree oil from Kenya. Helps remove impurities and excess oil.",
            sizes: null,
            sizeType: null
        },
        {
            id: 12,
            name: "Yonex Badminton Racket Astrox 88D Pro",
            brand: "Yonex",
            category: "sports",
            subcategory: "badminton",
            price: 15990,
            discount: 18,
            rating: 4.6,
            reviews: 3456,
            image: "https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=400&h=400&fit=crop",
            images: [
                "https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=600&h=600&fit=crop",
                "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?w=600&h=600&fit=crop",
                "https://images.unsplash.com/photo-1599058917765-a780eda07a3e?w=600&h=600&fit=crop",
                "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=600&h=600&fit=crop"
            ],
            description: "Professional-grade badminton racket with Rotational Generator System for steep attack angles. Isometric frame shape.",
            sizes: null,
            sizeType: null
        },
        {
            id: 13,
            name: "Atomic Habits by James Clear (Paperback)",
            brand: "Penguin",
            category: "books",
            subcategory: "selfhelp",
            price: 499,
            discount: 35,
            rating: 4.8,
            reviews: 56789,
            image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=400&fit=crop",
            images: [
                "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=600&h=600&fit=crop",
                "https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=600&h=600&fit=crop",
                "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=600&h=600&fit=crop",
                "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=600&h=600&fit=crop"
            ],
            description: "No matter your goals, Atomic Habits offers a proven framework for improving every day. Tiny changes deliver remarkable results.",
            sizes: null,
            sizeType: null
        },
        {
            id: 14,
            name: "Samsung 55-inch Crystal 4K UHD Smart TV",
            brand: "Samsung",
            category: "electronics",
            subcategory: "tv",
            price: 42990,
            discount: 35,
            rating: 4.4,
            reviews: 11234,
            image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=400&h=400&fit=crop",
            images: [
                "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=600&h=600&fit=crop",
                "https://images.unsplash.com/photo-1601944179066-29786cb9d32a?w=600&h=600&fit=crop",
                "https://images.unsplash.com/photo-1509281373149-e957c6296406?w=600&h=600&fit=crop",
                "https://images.unsplash.com/photo-1558888401-3cc1de77652d?w=600&h=600&fit=crop"
            ],
            description: "Experience stunning 4K resolution with Crystal Processor 4K. Smart TV with built-in voice assistants and all streaming apps.",
            sizes: null,
            sizeType: null
        },
        {
            id: 15,
            name: "boAt Rockerz 550 Bluetooth Wireless Headphone",
            brand: "boAt",
            category: "electronics",
            subcategory: "audio",
            price: 1799,
            discount: 55,
            rating: 4.1,
            reviews: 78901,
            image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",
            images: [
                "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&h=600&fit=crop",
                "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=600&h=600&fit=crop",
                "https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?w=600&h=600&fit=crop",
                "https://images.unsplash.com/photo-1491927570842-0261e477d937?w=600&h=600&fit=crop"
            ],
            description: "Immersive 50mm drivers with 20 hours of battery life. Dual connectivity modes with Bluetooth v5.0 and AUX.",
            sizes: null,
            sizeType: null
        },
        {
            id: 16,
            name: "Puma Mens Softride Enzo Running Shoes - Black",
            brand: "Puma",
            category: "fashion",
            subcategory: "shoes",
            price: 3999,
            discount: 45,
            rating: 4.2,
            reviews: 22345,
            image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=400&h=400&fit=crop",
            images: [
                "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=600&h=600&fit=crop",
                "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&h=600&fit=crop",
                "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=600&h=600&fit=crop",
                "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=600&h=600&fit=crop"
            ],
            description: "Lightweight sports running shoes with SoftFoam+ sockliner for superior comfort. Durable rubber outsole for excellent grip.",
            sizes: [
                { label: "UK 6", value: "UK6", inStock: true },
                { label: "UK 7", value: "UK7", inStock: true },
                { label: "UK 8", value: "UK8", inStock: true },
                { label: "UK 9", value: "UK9", inStock: false },
                { label: "UK 10", value: "UK10", inStock: true },
                { label: "UK 11", value: "UK11", inStock: true }
            ],
            sizeType: "shoe",
            sizeChart: {
                headers: ["UK Size", "US Size", "EU Size", "Foot Length (cm)"],
                rows: [
                    ["UK 6", "US 7", "EU 39", "25.0"],
                    ["UK 7", "US 8", "EU 40.5", "25.5"],
                    ["UK 8", "US 9", "EU 42", "26.5"],
                    ["UK 9", "US 10", "EU 43", "27.0"],
                    ["UK 10", "US 11", "EU 44.5", "28.0"],
                    ["UK 11", "US 12", "EU 46", "28.5"]
                ]
            }
        },
        {
            id: 17,
            name: "Himalaya Purifying Neem Face Wash - 200ml",
            brand: "Himalaya",
            category: "beauty",
            subcategory: "skincare",
            price: 199,
            discount: 10,
            rating: 4.3,
            reviews: 89012,
            image: "https://images.unsplash.com/photo-1570194065650-d99fb4a38154?w=400&h=400&fit=crop",
            images: [
                "https://images.unsplash.com/photo-1570194065650-d99fb4a38154?w=600&h=600&fit=crop",
                "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=600&h=600&fit=crop",
                "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=600&h=600&fit=crop",
                "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=600&h=600&fit=crop"
            ],
            description: "A soap-free herbal formulation that cleans impurities and helps clear pimples. Contains Neem and Turmeric.",
            sizes: null,
            sizeType: null
        },
        {
            id: 18,
            name: "H and M Womens Oversized Hoodie - Dusty Pink",
            brand: "H and M",
            category: "fashion",
            subcategory: "clothing",
            price: 1999,
            discount: 30,
            rating: 4.3,
            reviews: 12890,
            image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=400&fit=crop",
            images: [
                "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600&h=600&fit=crop",
                "https://images.unsplash.com/photo-1620799139507-2a76f79a2f4d?w=600&h=600&fit=crop",
                "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&h=600&fit=crop",
                "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=600&h=600&fit=crop"
            ],
            description: "Relaxed-fit hoodie in soft sweatshirt fabric with a lined drawstring hood, kangaroo pocket, and ribbed cuffs and hem.",
            sizes: [
                { label: "XS", value: "XS", inStock: true },
                { label: "S", value: "S", inStock: true },
                { label: "M", value: "M", inStock: true },
                { label: "L", value: "L", inStock: true },
                { label: "XL", value: "XL", inStock: false }
            ],
            sizeType: "clothing",
            sizeChart: {
                headers: ["Size", "Chest (inches)", "Length (inches)", "Sleeve (inches)"],
                rows: [
                    ["XS", "38", "25", "23"],
                    ["S", "40", "26", "24"],
                    ["M", "42", "27", "25"],
                    ["L", "44", "28", "26"],
                    ["XL", "46", "29", "27"]
                ]
            }
        },
        {
            id: 19,
            name: "Canon EOS 200D II DSLR Camera with 18-55mm Lens",
            brand: "Canon",
            category: "electronics",
            subcategory: "camera",
            price: 52990,
            discount: 18,
            rating: 4.5,
            reviews: 4567,
            image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400&h=400&fit=crop",
            images: [
                "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=600&h=600&fit=crop",
                "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=600&h=600&fit=crop",
                "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=600&h=600&fit=crop",
                "https://images.unsplash.com/photo-1612432895395-90e55c9e9f87?w=600&h=600&fit=crop"
            ],
            description: "Compact and lightweight DSLR with 24.1MP APS-C sensor. Dual Pixel CMOS AF for fast autofocus. 4K video recording.",
            sizes: null,
            sizeType: null
        },
        {
            id: 20,
            name: "Adidas Mens Striker II Team Backpack",
            brand: "Adidas",
            category: "sports",
            subcategory: "bags",
            price: 2499,
            discount: 30,
            rating: 4.4,
            reviews: 15678,
            image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop",
            images: [
                "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&h=600&fit=crop",
                "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=600&h=600&fit=crop",
                "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?w=600&h=600&fit=crop",
                "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&h=600&fit=crop"
            ],
            description: "Durable team backpack with multiple compartments. Features padded shoulder straps and padded back panel for comfort.",
            sizes: null,
            sizeType: null
        },
        {
            id: 21,
            name: "US Polo Assn Mens Slim Fit Casual Shirt",
            brand: "US Polo",
            category: "fashion",
            subcategory: "clothing",
            price: 1899,
            discount: 45,
            rating: 4.0,
            reviews: 28901,
            image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&h=400&fit=crop",
            images: [
                "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=600&h=600&fit=crop",
                "https://images.unsplash.com/photo-1603252109303-2751441dd157?w=600&h=600&fit=crop",
                "https://images.unsplash.com/photo-1604695573706-53170668f6a6?w=600&h=600&fit=crop",
                "https://images.unsplash.com/photo-1582719188393-bb71ca45dbb9?w=600&h=600&fit=crop"
            ],
            description: "Slim fit casual shirt made from 100% cotton. Features a button-down collar, full sleeves, and curved hemline.",
            sizes: [
                { label: "S (38)", value: "S", inStock: true },
                { label: "M (40)", value: "M", inStock: true },
                { label: "L (42)", value: "L", inStock: true },
                { label: "XL (44)", value: "XL", inStock: true },
                { label: "XXL (46)", value: "XXL", inStock: true }
            ],
            sizeType: "clothing",
            sizeChart: {
                headers: ["Size", "Chest (inches)", "Length (inches)", "Shoulder (inches)", "Sleeve (inches)"],
                rows: [
                    ["S (38)", "38", "28", "16.5", "24"],
                    ["M (40)", "40", "29", "17.5", "25"],
                    ["L (42)", "42", "30", "18.5", "26"],
                    ["XL (44)", "44", "31", "19.5", "27"],
                    ["XXL (46)", "46", "32", "20.5", "28"]
                ]
            }
        },
        {
            id: 22,
            name: "Woodland Mens Leather Ankle Boots - Brown",
            brand: "Woodland",
            category: "fashion",
            subcategory: "shoes",
            price: 4495,
            discount: 25,
            rating: 4.4,
            reviews: 18234,
            image: "https://images.unsplash.com/photo-1520639888713-7851133b1ed0?w=400&h=400&fit=crop",
            images: [
                "https://images.unsplash.com/photo-1520639888713-7851133b1ed0?w=600&h=600&fit=crop",
                "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&h=600&fit=crop",
                "https://images.unsplash.com/photo-1533867617858-e7b97e060509?w=600&h=600&fit=crop",
                "https://images.unsplash.com/photo-1605348532760-6753d2c43329?w=600&h=600&fit=crop"
            ],
            description: "Genuine leather ankle boots with durable rubber sole. Water-resistant with cushioned insole for all-day comfort.",
            sizes: [
                { label: "UK 6", value: "UK6", inStock: true },
                { label: "UK 7", value: "UK7", inStock: true },
                { label: "UK 8", value: "UK8", inStock: true },
                { label: "UK 9", value: "UK9", inStock: true },
                { label: "UK 10", value: "UK10", inStock: true },
                { label: "UK 11", value: "UK11", inStock: false }
            ],
            sizeType: "shoe",
            sizeChart: {
                headers: ["UK Size", "US Size", "EU Size", "Foot Length (cm)"],
                rows: [
                    ["UK 6", "US 7", "EU 40", "25.0"],
                    ["UK 7", "US 8", "EU 41", "25.5"],
                    ["UK 8", "US 9", "EU 42", "26.5"],
                    ["UK 9", "US 10", "EU 43", "27.0"],
                    ["UK 10", "US 11", "EU 44", "28.0"],
                    ["UK 11", "US 12", "EU 45", "28.5"]
                ]
            }
        },
        {
            id: 23,
            name: "Fitbit Charge 5 Advanced Fitness Tracker",
            brand: "Fitbit",
            category: "electronics",
            subcategory: "wearable",
            price: 14999,
            discount: 20,
            rating: 4.3,
            reviews: 6789,
            image: "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=400&h=400&fit=crop",
            images: [
                "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=600&h=600&fit=crop",
                "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&h=600&fit=crop",
                "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=600&h=600&fit=crop",
                "https://images.unsplash.com/photo-1617625802912-cde586faf749?w=600&h=600&fit=crop"
            ],
            description: "Advanced fitness tracker with built-in GPS, stress management tools, heart rate monitoring, and sleep tracking.",
            sizes: null,
            sizeType: null
        },
        {
            id: 24,
            name: "Adidas Ultraboost 22 Running Shoes - Womens White",
            brand: "Adidas",
            category: "fashion",
            subcategory: "shoes",
            price: 12999,
            discount: 28,
            rating: 4.6,
            reviews: 9870,
            image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=400&h=400&fit=crop",
            images: [
                "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=600&h=600&fit=crop",
                "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&h=600&fit=crop",
                "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=600&h=600&fit=crop",
                "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=600&h=600&fit=crop"
            ],
            description: "Ultraboost 22 built with Linear Energy Push system adapted for the female foot. Incredible energy return with every stride.",
            sizes: [
                { label: "UK 4", value: "UK4", inStock: true },
                { label: "UK 5", value: "UK5", inStock: true },
                { label: "UK 6", value: "UK6", inStock: true },
                { label: "UK 7", value: "UK7", inStock: false },
                { label: "UK 8", value: "UK8", inStock: true }
            ],
            sizeType: "shoe",
            sizeChart: {
                headers: ["UK Size", "US Size", "EU Size", "Foot Length (cm)"],
                rows: [
                    ["UK 4", "US 5.5", "EU 36.5", "22.5"],
                    ["UK 5", "US 6.5", "EU 38", "23.5"],
                    ["UK 6", "US 7.5", "EU 39.5", "24.5"],
                    ["UK 7", "US 8.5", "EU 40.5", "25.5"],
                    ["UK 8", "US 9.5", "EU 42", "26.0"]
                ]
            }
        }
    ];
}

// === Cart Management ===
function getCart() {
    return JSON.parse(localStorage.getItem('flipshop_cart') || '[]');
}

function addToCart(productId, selectedSize) {
    var product = getProducts().find(function(p) { return p.id === productId; });
    if (!product) return false;
    if (product.sizes && !selectedSize) {
        showToast('Please select a size first!', 'error');
        return false;
    }
    var cart = getCart();
    var cartKey = selectedSize ? (productId + '_' + selectedSize) : ('' + productId);
    var existing = cart.find(function(item) { return item.cartKey === cartKey; });
    if (existing) {
        if (existing.qty < 10) existing.qty += 1;
    } else {
        cart.push({ id: productId, qty: 1, size: selectedSize || null, cartKey: cartKey });
    }
    localStorage.setItem('flipshop_cart', JSON.stringify(cart));
    updateCartBadge();
    return true;
}

function removeFromCart(cartKey) {
    var cart = getCart().filter(function(item) { return item.cartKey !== cartKey; });
    localStorage.setItem('flipshop_cart', JSON.stringify(cart));
    updateCartBadge();
}

function updateCartItemQty(cartKey, newQty) {
    var cart = getCart();
    var item = cart.find(function(i) { return i.cartKey === cartKey; });
    if (item) {
        if (newQty < 1) {
            cart = cart.filter(function(i) { return i.cartKey !== cartKey; });
            showToast('Item removed from cart');
        } else if (newQty > 10) {
            showToast('Maximum quantity is 10', 'error');
            return;
        } else {
            item.qty = newQty;
        }
    }
    localStorage.setItem('flipshop_cart', JSON.stringify(cart));
    updateCartBadge();
}

function updateCartBadge() {
    var cart = getCart();
    var totalItems = cart.reduce(function(sum, item) { return sum + item.qty; }, 0);
    var badges = document.querySelectorAll('#cartBadge, #bottomCartBadge, .mobile-cart-count');
    badges.forEach(function(badge) {
        if (badge) {
            badge.textContent = totalItems;
            badge.style.display = totalItems > 0 ? 'flex' : 'none';
        }
    });
}

// === Checkout Data Management ===
function getCheckoutData() {
    return JSON.parse(localStorage.getItem('flipshop_checkout') || '{}');
}

function saveCheckoutData(data) {
    var existing = getCheckoutData();
    var merged = Object.assign({}, existing, data);
    localStorage.setItem('flipshop_checkout', JSON.stringify(merged));
}

function clearCheckoutData() {
    localStorage.removeItem('flipshop_checkout');
}

// === Cart Calculations ===
function getCartCalculations() {
    var cart = getCart();
    var products = getProducts();
    var cartItems = [];
    cart.forEach(function(item) {
        var product = products.find(function(p) { return p.id === item.id; });
        if (product) {
            cartItems.push(Object.assign({}, product, {
                qty: item.qty,
                selectedSize: item.size,
                cartKey: item.cartKey
            }));
        }
    });
    var subtotal = cartItems.reduce(function(s, i) { return s + (i.price * i.qty); }, 0);
    var totalOriginal = cartItems.reduce(function(s, i) {
        return s + (Math.round(i.price / (1 - i.discount / 100)) * i.qty);
    }, 0);
    var discount = totalOriginal - subtotal;
    var shipping = subtotal > 499 ? 0 : 49;
    var total = subtotal + shipping;
    var totalQty = cart.reduce(function(s, i) { return s + i.qty; }, 0);
    return { cartItems: cartItems, subtotal: subtotal, totalOriginal: totalOriginal, discount: discount, shipping: shipping, total: total, totalQty: totalQty };
}

// === Toast Notification ===
function showToast(message, type) {
    type = type || 'success';
    var container = document.getElementById('toastContainer');
    if (!container) return;
    var toast = document.createElement('div');
    toast.className = 'toast toast-' + type;
    var icon = type === 'success' ? 'fa-check-circle' : type === 'error' ? 'fa-exclamation-circle' : 'fa-info-circle';
    toast.innerHTML = '<i class="fas ' + icon + '"></i> ' + message;
    container.appendChild(toast);
    setTimeout(function() {
        if (toast.parentNode) toast.parentNode.removeChild(toast);
    }, 3000);
}

// === Render Product Cards ===
function renderProductCards(containerId, products) {
    var container = document.getElementById(containerId);
    if (!container) return;

    var html = '';
    for (var i = 0; i < products.length; i++) {
        var product = products[i];
        var originalPrice = Math.round(product.price / (1 - product.discount / 100));
        var hasSizes = product.sizes && product.sizes.length > 0;
        var sizeLabel = '';
        if (hasSizes) {
            if (product.sizeType === 'shoe') {
                var inStockCount = product.sizes.filter(function(s) { return s.inStock; }).length;
                sizeLabel = inStockCount + ' sizes available';
            } else {
                var inStockSizes = product.sizes.filter(function(s) { return s.inStock; }).map(function(s) { return s.label; });
                sizeLabel = inStockSizes.join(', ');
            }
        }

        var addButton = '';
        if (hasSizes) {
            addButton = '<a href="product-detail.html?id=' + product.id + '" class="btn btn-secondary btn-sm" style="flex:1;"><i class="fas fa-ruler"></i> Select Size</a>';
        } else {
            addButton = '<button class="btn btn-secondary btn-sm" onclick="addToCart(' + product.id + '); showToast(\'Added to cart!\');" style="flex:1;"><i class="fas fa-cart-plus"></i> Add</button>';
        }

        html += '<div class="product-card">';
        html += '<div class="product-image">';
        html += '<a href="product-detail.html?id=' + product.id + '">';
        html += '<img src="' + product.image + '" alt="' + product.name + '" loading="lazy">';
        html += '</a>';
        if (product.discount >= 20) {
            html += '<span class="product-badge">' + product.discount + '% OFF</span>';
        }
        html += '<button class="wishlist-btn" onclick="event.preventDefault(); this.classList.toggle(\'active\'); showToast(this.classList.contains(\'active\') ? \'Added to wishlist\' : \'Removed from wishlist\');"><i class="fas fa-heart"></i></button>';
        html += '</div>';
        html += '<div class="product-details">';
        html += '<span class="product-brand">' + product.brand + '</span>';
        html += '<h3 class="product-name"><a href="product-detail.html?id=' + product.id + '">' + product.name + '</a></h3>';
        if (hasSizes) {
            html += '<span class="product-size-hint"><i class="fas fa-ruler"></i> ' + sizeLabel + '</span>';
        }
        html += '<div class="product-rating">';
        html += '<span class="rating-badge">' + product.rating + ' <i class="fas fa-star"></i></span>';
        html += '<span class="rating-count">(' + product.reviews.toLocaleString() + ')</span>';
        html += '</div>';
        html += '<div class="product-price">';
        html += '<span class="current-price">&#8377;' + product.price.toLocaleString('en-IN') + '</span>';
        html += '<span class="original-price">&#8377;' + originalPrice.toLocaleString('en-IN') + '</span>';
        html += '<span class="discount-badge">' + product.discount + '% off</span>';
        html += '</div>';
        html += '</div>';
        html += '<div class="product-actions-card">';
        html += addButton;
        html += '<a href="product-detail.html?id=' + product.id + '" class="btn btn-primary btn-sm" style="flex:1;"><i class="fas fa-eye"></i> View</a>';
        html += '</div>';
        html += '</div>';
    }

    container.innerHTML = html;
}

// === Render Checkout Sidebar ===
function renderCheckoutSidebar(containerId) {
    var container = document.getElementById(containerId);
    if (!container) return;
    var calc = getCartCalculations();
    var cartItems = calc.cartItems;
    var totalOriginal = calc.totalOriginal;
    var discount = calc.discount;
    var shipping = calc.shipping;
    var total = calc.total;
    var totalQty = calc.totalQty;

    if (cartItems.length === 0) {
        container.innerHTML = '<div class="sidebar-card"><p class="empty-sidebar">Cart is empty. <a href="products.html">Shop now</a></p></div>';
        return;
    }

    var itemsHtml = '';
    for (var i = 0; i < cartItems.length; i++) {
        var item = cartItems[i];
        var name = item.name.length > 35 ? item.name.substring(0, 35) + '...' : item.name;
        itemsHtml += '<div class="sidebar-item">';
        itemsHtml += '<img src="' + item.image + '" alt="' + item.name + '">';
        itemsHtml += '<div>';
        itemsHtml += '<p>' + name + '</p>';
        if (item.selectedSize) {
            itemsHtml += '<span class="sidebar-size">Size: ' + item.selectedSize + '</span>';
        }
        itemsHtml += '<span>Qty: ' + item.qty + ' x &#8377;' + item.price.toLocaleString('en-IN') + '</span>';
        itemsHtml += '</div>';
        itemsHtml += '</div>';
    }

    var shippingDisplay = shipping === 0 ? '<span class="free-delivery">FREE</span>' : '&#8377;' + shipping;

    container.innerHTML =
        '<div class="sidebar-card">' +
        '<h3><i class="fas fa-shopping-bag"></i> Order Summary</h3>' +
        '<div class="sidebar-items">' + itemsHtml + '</div>' +
        '<div class="summary-divider"></div>' +
        '<div class="summary-row"><span>Items (' + totalQty + ')</span><span>&#8377;' + totalOriginal.toLocaleString('en-IN') + '</span></div>' +
        '<div class="summary-row discount"><span>Discount</span><span>-&#8377;' + discount.toLocaleString('en-IN') + '</span></div>' +
        '<div class="summary-row"><span>Shipping</span>' + shippingDisplay + '</div>' +
        '<div class="summary-divider"></div>' +
        '<div class="summary-row total"><span>Total</span><span>&#8377;' + total.toLocaleString('en-IN') + '</span></div>' +
        '<div class="summary-savings">You save &#8377;' + discount.toLocaleString('en-IN') + ' on this order!</div>' +
        '</div>' +
        '<div class="sidebar-card security-card">' +
        '<div class="security-item"><i class="fas fa-shield-alt"></i><span>Secure Checkout</span></div>' +
        '<div class="security-item"><i class="fas fa-undo"></i><span>Easy Returns</span></div>' +
        '<div class="security-item"><i class="fas fa-truck"></i><span>Free Shipping &#8377;499+</span></div>' +
        '<div class="security-item"><i class="fas fa-headset"></i><span>24/7 Support</span></div>' +
        '</div>';
}

// === Mobile Menu Toggle ===
document.addEventListener('DOMContentLoaded', function() {
    var mobileMenuBtn = document.getElementById('mobileMenuBtn');
    var mobileNav = document.getElementById('mobileNav');
    if (mobileMenuBtn && mobileNav) {
        mobileMenuBtn.addEventListener('click', function() {
            mobileNav.classList.toggle('show');
            var icon = this.querySelector('i');
            icon.className = mobileNav.classList.contains('show') ? 'fas fa-times' : 'fas fa-bars';
        });
    }

    var searchBtn = document.getElementById('searchBtn');
    var searchInput = document.getElementById('searchInput');
    if (searchBtn && searchInput) {
        function handleSearch() {
            var query = searchInput.value.trim();
            if (query && window.location.pathname.indexOf('products.html') === -1) {
                window.location.href = 'products.html?search=' + encodeURIComponent(query);
            }
        }
        searchBtn.addEventListener('click', handleSearch);
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') handleSearch();
        });
    }

    updateCartBadge();
});
