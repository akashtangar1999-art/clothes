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
            image: "https://pub-bdcc7c641e344b0b9f401131bebb9a44.r2.dev/K01.webp",
            images: [
                "https://pub-bdcc7c641e344b0b9f401131bebb9a44.r2.dev/K01.webp",
                "https://pub-bdcc7c641e344b0b9f401131bebb9a44.r2.dev/K02.webp",
                "https://pub-bdcc7c641e344b0b9f401131bebb9a44.r2.dev/K03.webp"
            ],
            description: "Upgrade your ethnic wardrobe with this premium women’s cotton kurta and pant set, designed to deliver unmatched comfort, elegant fashion, and modern versatility for every occasion. Made from high-quality breathable 100% cotton fabric, this stylish outfit offers a lightweight and skin-friendly feel, making it perfect for daily wear, office wear, festive gatherings, travel, and casual outings. The beautifully crafted V-neck kurta features intricate embroidery detailing on the sleeves and neckline, adding a luxurious designer-inspired touch that enhances its sophisticated appearance. Paired with comfortable straight-fit cotton pants, this coordinated outfit creates a polished and graceful look suitable for women who value both fashion and comfort.",
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
            id: 2,
            name: "MOKOSH Women Pure Cotton Kurta Palazzo Dupatta Set",
            brand: "MOKOSH",
            category: "fashion",
            subcategory: "kurti",
            price: 139,
            discount: 90,
            rating: 4.5,
            reviews: 832,
            image: "https://pub-bdcc7c641e344b0b9f401131bebb9a44.r2.dev/K04.webp",
            images: [
                "https://pub-bdcc7c641e344b0b9f401131bebb9a44.r2.dev/K04.webp",
                "https://pub-bdcc7c641e344b0b9f401131bebb9a44.r2.dev/K05.webp",
                "https://pub-bdcc7c641e344b0b9f401131bebb9a44.r2.dev/K06.webp"
            ],
            description: "Discover timeless elegance and premium ethnic fashion with this beautifully crafted Embroidered A-Line Kurta Set for women, designed to combine luxurious comfort, sophisticated styling, and modern versatility. Tailored from high-quality breathable cotton fabric, this premium ethnic wear set offers a lightweight, skin-friendly, and comfortable experience ideal for all-day wear. The stunning A-line silhouette creates a graceful flow that flatters every body type while delivering a refined designer-inspired appearance suitable for festive occasions, office wear, weddings, family gatherings, cultural celebrations, and modern lifestyle fashion.",
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
            id: 3,
            name: "Skylee Women Viscose Rayon Kurta Pant Dupatta Set",
            brand: "MOKOSH",
            category: "fashion",
            subcategory: "kurti",
            price: 139,
            discount: 90,
            rating: 4.7,
            reviews: 1678,
            image: "https://pub-bdcc7c641e344b0b9f401131bebb9a44.r2.dev/K07.webp",
            images: [
                "https://pub-bdcc7c641e344b0b9f401131bebb9a44.r2.dev/K07.webp",
                "https://pub-bdcc7c641e344b0b9f401131bebb9a44.r2.dev/K08.webp",
                "https://pub-bdcc7c641e344b0b9f401131bebb9a44.r2.dev/K09.webp"
            ],
            description: "Enhance your ethnic fashion collection with this premium designer kurta set from the elegant women’s fashion brand Skylee, thoughtfully crafted for modern women who appreciate traditional artistry, luxurious comfort, and contemporary style. This beautifully designed Bandhani printed ethnic wear set combines timeless Indian craftsmanship with modern fashion trends, making it a perfect choice for festive celebrations, office wear, family gatherings, wedding functions, casual outings, and seasonal fashion styling.",
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
            id: 4,
            name: "NARI DREAM Women Tussar Silk Kurta Pant Attached Dupatta Set",
            brand: "NARI DREAM",
            category: "fashion",
            subcategory: "kurti",
            price: 139,
            discount: 90,
            rating: 4.8,
            reviews: 634,
            image: "https://pub-bdcc7c641e344b0b9f401131bebb9a44.r2.dev/K10.webp",
            images: [
                "https://pub-bdcc7c641e344b0b9f401131bebb9a44.r2.dev/K10.webp",
                "https://pub-bdcc7c641e344b0b9f401131bebb9a44.r2.dev/K11.webp",
                "https://pub-bdcc7c641e344b0b9f401131bebb9a44.r2.dev/K12.webp"
            ],
            description: "The matching Viscose Rayon pants are tailored for superior comfort and include a practical pocket design with a half-elastic waistband, ensuring flexibility and ease of movement for everyday wear. Completing the ensemble is a beautifully coordinated red cotton dupatta adorned with classic Bandhani prints that elevate the overall look with added sophistication and cultural richness.",
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
            id: 5,
            name: "Pinfit Women Cotton Blend Kurta Pant Dupatta Set",
            brand: "Pinfit",
            category: "fashion",
            subcategory: "kurti",
            price: 139,
            discount: 90,
            rating: 4.4,
            reviews: 2356,
            image: "https://pub-bdcc7c641e344b0b9f401131bebb9a44.r2.dev/K13.webp",
            images: [
                "https://pub-bdcc7c641e344b0b9f401131bebb9a44.r2.dev/K13.webp",
                "https://pub-bdcc7c641e344b0b9f401131bebb9a44.r2.dev/K14.webp",
                "https://pub-bdcc7c641e344b0b9f401131bebb9a44.r2.dev/K15.webp"
            ],
            description: "Made from high-quality Viscose Rayon fabric, the calf-length kurta delivers an ultra-soft, breathable, and lightweight feel that keeps you comfortable throughout the day while maintaining a polished and graceful appearance. The rich red color palette paired with intricate Bandhani print detailing creates a vibrant ethnic statement, while the elegant embroidery mirror work and delicate lace accents add a luxurious designer-inspired finish. Featuring stylish 3/4th sleeves and a sophisticated round neckline, this outfit perfectly balances traditional charm with modern elegance.",
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
            id: 6,
            name: "Dimonsher Women Khadi Cotton Kurta Palazzo Set",
            brand: "Dimonsher",
            category: "fashion",
            subcategory: "clothing",
            price: 139,
            discount: 90,
            rating: 4.4,
            reviews: 3567,
            image: "https://pub-bdcc7c641e344b0b9f401131bebb9a44.r2.dev/K16.webp",
            images: [
                "https://pub-bdcc7c641e344b0b9f401131bebb9a44.r2.dev/K16.webp",
                "https://pub-bdcc7c641e344b0b9f401131bebb9a44.r2.dev/K17.webp",
                "https://pub-bdcc7c641e344b0b9f401131bebb9a44.r2.dev/K18.webp"
            ],
            description: "Transform your ethnic fashion collection with the premium Rust Orange Khadi Cotton Kurta Set from Dimonsher, thoughtfully designed for women who seek a perfect combination of elegance, comfort, and timeless Indian craftsmanship. Crafted from high-quality breathable khadi cotton fabric, this sophisticated ethnic wear set offers exceptional softness, lightweight comfort, and superior airflow, making it an ideal choice for everyday wear, office fashion, festive occasions, family gatherings, and seasonal celebrations.",
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
            id: 7,
            name: "SHREESHA ENTERPRISE Women Silk Blend Kurta Pant Dupatta Set",
            brand: "SHREESHA ENTERPRISE",
            category: "fashion",
            subcategory: "kurti",
            price: 139,
            discount: 90,
            rating: 4.5,
            reviews: 1234,
            image: "https://pub-bdcc7c641e344b0b9f401131bebb9a44.r2.dev/K19.webp",
            images: [
                "https://pub-bdcc7c641e344b0b9f401131bebb9a44.r2.dev/K19.webp",
                "https://pub-bdcc7c641e344b0b9f401131bebb9a44.r2.dev/K20.webp",
                "https://pub-bdcc7c641e344b0b9f401131bebb9a44.r2.dev/K21.webp"
            ],
            description: "Elevate your festive fashion collection with this premium Women’s Silk Blend Kurta Set, beautifully designed for modern women who appreciate luxury ethnic wear, timeless elegance, and sophisticated traditional styling. Crafted from high-quality silk blend fabric, this designer ethnic outfit offers a rich texture, soft touch, lightweight comfort, and a subtle premium shine that enhances your overall appearance for every special occasion. Perfectly blending traditional craftsmanship with contemporary fashion trends, this elegant kurta set is an ideal choice for festive celebrations, wedding ceremonies, engagement parties, family functions, cultural events, office festivities, and premium ethnic gatherings.",
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
            id: 8,
            name: "DD's creation Women Cotton Blend Kurta Pant Attached Dupatta Set",
            brand: "DD's creation",
            category: "fashion",
            subcategory: "clothing",
            price: 139,
            discount: 90,
            rating: 4.4,
            reviews: 1678,
            image: "https://pub-bdcc7c641e344b0b9f401131bebb9a44.r2.dev/K22.webp",
            images: [
                "https://pub-bdcc7c641e344b0b9f401131bebb9a44.r2.dev/K22.webp",
                "https://pub-bdcc7c641e344b0b9f401131bebb9a44.r2.dev/K23.webp",
                "https://pub-bdcc7c641e344b0b9f401131bebb9a44.r2.dev/K24.webp"
            ],
            description: "Designed for women seeking premium ethnic fashion online, wedding-ready kurta sets, festive Indian wear, designer silk blend suits, embroidered organza dupattas, and elegant traditional outfits, this versatile ensemble combines affordability with luxury-inspired fashion appeal. The breathable and skin-friendly fabric ensures all-day comfort while maintaining a graceful silhouette suitable for every season. Whether styled with statement jewelry, heels, handbags, bangles, or traditional accessories, this sophisticated ethnic outfit creates a refined and confident fashion statement for every celebration.",
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
            name: "his&her Women Pure Cotton Kurta Pant Dupatta Set",
            brand: "his&her",
            category: "fashion",
            subcategory: "kurti",
            price: 139,
            discount: 90,
            rating: 4.4,
            reviews: 654,
            image: "https://pub-bdcc7c641e344b0b9f401131bebb9a44.r2.dev/K25.webp",
            images: [
                "https://pub-bdcc7c641e344b0b9f401131bebb9a44.r2.dev/K25.webp",
                "https://pub-bdcc7c641e344b0b9f401131bebb9a44.r2.dev/K26.webp",
                "https://pub-bdcc7c641e344b0b9f401131bebb9a44.r2.dev/K27.webp"
            ],
            description: "The beautifully tailored silk blend kurta showcases refined detailing and graceful ethnic styling that creates a polished and luxurious designer-inspired look. Paired with a matching silk blend bottom, the outfit delivers superior comfort, flattering structure, and ease of movement, making it suitable for extended wear throughout festive events and celebrations. Completing the ensemble is a stunning lightweight organza dupatta adorned with delicate embroidery work that adds sophistication, elegance, and a touch of modern glamour to the overall outfit.",
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
            id: 10,
            name: "Men Solid Polo Neck Pure Cotton Purple T-Shirt",
            brand: "LOUIS PHILIPPE",
            category: "fashion",
            subcategory: "tshirt",
            price: 129,
            discount: 90,
            rating: 4.3,
            reviews: 2345,
            image: "https://pub-bdcc7c641e344b0b9f401131bebb9a44.r2.dev/P1.webp",
            images: [
                "https://pub-bdcc7c641e344b0b9f401131bebb9a44.r2.dev/P1.webp",
                "https://pub-bdcc7c641e344b0b9f401131bebb9a44.r2.dev/P2.webp",
                "https://pub-bdcc7c641e344b0b9f401131bebb9a44.r2.dev/P3.webp"
            ],
            description: "Upgrade your casual fashion collection with this premium Green Solid Polo T-Shirt from Louis Philippe, expertly designed for men who appreciate sophisticated style, premium comfort, and modern everyday fashion. Crafted from high-quality 100% cotton fabric, this stylish polo t-shirt delivers exceptional softness, breathable comfort, and long-lasting durability, making it an ideal choice for casual wear, office casual styling, weekend outings, travel, smart-casual events, and modern lifestyle fashion.",
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
            id: 11,
            name: "LOUIS Men Solid Polo Neck Pure Cotton Dark Green T-Shirt",
            brand: "LOUIS PHILIPPE",
            category: "fashion",
            subcategory: "tshirt",
            price: 145,
            discount: 90,
            rating: 4.4,
            reviews: 1876,
            image: "https://pub-bdcc7c641e344b0b9f401131bebb9a44.r2.dev/P4.webp",
            images: [
                "https://pub-bdcc7c641e344b0b9f401131bebb9a44.r2.dev/P4.webp",
                "https://pub-bdcc7c641e344b0b9f401131bebb9a44.r2.dev/P5.webp",
                "https://pub-bdcc7c641e344b0b9f401131bebb9a44.r2.dev/P6.webp"
            ],
            description: "Designed with a refined polo neck and stylish half sleeves, this slim-fit t-shirt creates a polished and contemporary silhouette that enhances your overall appearance while ensuring superior comfort throughout the day. The premium knitted cotton fabric offers excellent airflow and moisture absorption, keeping you cool, fresh, and comfortable in every season. Its elegant green solid color adds a versatile and sophisticated touch, allowing effortless pairing with jeans, chinos, trousers, jackets, sneakers, and smart accessories for a complete modern fashion statement.",
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
            id: 12,
            name: "Alan Jones Men Striped Polo Neck Cotton Blend Black T-Shirt",
            brand: "Alan Jones",
            category: "fashion",
            subcategory: "tshirt",
            price: 159,
            discount: 90,
            rating: 4.6,
            reviews: 356,
            image: "https://pub-bdcc7c641e344b0b9f401131bebb9a44.r2.dev/P7.webp",
            images: [
                "https://pub-bdcc7c641e344b0b9f401131bebb9a44.r2.dev/P7.webp",
                "https://pub-bdcc7c641e344b0b9f401131bebb9a44.r2.dev/P8.webp",
                "https://pub-bdcc7c641e344b0b9f401131bebb9a44.r2.dev/P9.webp"
            ],
            description: "Perfect for men searching for premium polo t-shirts online, branded cotton apparel, designer casual wear, slim-fit men’s fashion, luxury everyday clothing, and modern smart-casual outfits, this Louis Philippe Jeans t-shirt combines timeless elegance with practical comfort. The durable stitching, premium fabric quality, and minimalistic designer styling make it a valuable addition to every modern wardrobe.",
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
            id: 13,
            name: "KNOTRIX Men Printed Polo Neck Reversible Cotton Blend Blue T-Shirt",
            brand: "KNOTRIX",
            category: "fashion",
            subcategory: "tshirt",
            price: 139,
            discount: 90,
            rating: 4.8,
            reviews: 1789,
            image: "https://pub-bdcc7c641e344b0b9f401131bebb9a44.r2.dev/P10.webp",
            images: [
                "https://pub-bdcc7c641e344b0b9f401131bebb9a44.r2.dev/P10.webp",
                "https://pub-bdcc7c641e344b0b9f401131bebb9a44.r2.dev/P11.webp",
                "https://pub-bdcc7c641e344b0b9f401131bebb9a44.r2.dev/P12.webp"
            ],
            description: "Whether you’re dressing for office meetings, evening outings, casual gatherings, travel styling, or everyday fashion wear, this premium cotton polo t-shirt delivers a sophisticated blend of style, confidence, and versatility. Ideal for fashion-conscious men seeking affordable luxury clothing, branded men’s fashion, and high-quality cotton apparel, this elegant slim-fit polo t-shirt ensures you always maintain a refined and effortlessly stylish appearance.",
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
            id: 14,
            name: "Dollar Pack of 2 Men Solid Polo Neck Polyester Multicolor T-Shirt",
            brand: "Dollar",
            category: "fashion",
            subcategory: "tshirt",
            price: 139,
            discount: 90,
            rating: 4.1,
            reviews: 1134,
            image: "https://pub-bdcc7c641e344b0b9f401131bebb9a44.r2.dev/P13.webp",
            images: [
                "https://pub-bdcc7c641e344b0b9f401131bebb9a44.r2.dev/P13.webp",
                "https://pub-bdcc7c641e344b0b9f401131bebb9a44.r2.dev/P14.webp",
                "https://pub-bdcc7c641e344b0b9f401131bebb9a44.r2.dev/P15.webp"
            ],
            description: "Enhance your modern wardrobe with this premium Polyester Zipper T-Shirt, thoughtfully designed for men who value contemporary fashion, everyday comfort, and versatile smart-casual styling. Crafted from high-quality performance polyester fabric, this stylish zipper t-shirt delivers a lightweight feel, smooth texture, moisture-wicking comfort, and excellent breathability, making it perfect for daily wear, gym sessions, travel, office casual outfits, outdoor activities, and active lifestyle fashion.",
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
            id: 15,
            name: "Dollar Men Printed Round Neck Cotton Blend Navy Blue T-Shirt",
            brand: "Dollar",
            category: "fashion",
            subcategory: "tshirt",
            price: 139,
            discount: 90,
            rating: 4.2,
            reviews: 7901,
            image: "https://pub-bdcc7c641e344b0b9f401131bebb9a44.r2.dev/P16.webp",
            images: [
                "https://pub-bdcc7c641e344b0b9f401131bebb9a44.r2.dev/P16.webp",
                "https://pub-bdcc7c641e344b0b9f401131bebb9a44.r2.dev/P17.webp",
                "https://pub-bdcc7c641e344b0b9f401131bebb9a44.r2.dev/P18.webp"
            ],
            description: "Immersive 50mm drivers with 20 hours of battery life. Dual connectivity modes with Bluetooth v5.0 and AUX.",
            sizes: null,
            sizeType: null
        },
        {
            id: 16,
            name: "Dollar Men Printed Round Neck Cotton Blend T-Shirt",
            brand: "Dollar",
            category: "fashion",
            subcategory: "tshirt",
            price: 139,
            discount: 90,
            rating: 4.4,
            reviews: 1445,
            image: "https://pub-bdcc7c641e344b0b9f401131bebb9a44.r2.dev/P19.webp",
            images: [
                "https://pub-bdcc7c641e344b0b9f401131bebb9a44.r2.dev/P19.webp",
                "https://pub-bdcc7c641e344b0b9f401131bebb9a44.r2.dev/P20.webp",
                "https://pub-bdcc7c641e344b0b9f401131bebb9a44.r2.dev/P21.webp"
            ],
            description: "The sleek front zipper design adds a sophisticated modern touch while providing adjustable comfort and effortless wearability. Its premium quick-dry polyester material helps maintain freshness throughout the day by improving airflow and reducing sweat retention, making it an ideal choice for warm weather, workouts, and long hours of wear. Designed with wrinkle-resistant technology and durable stitching, this t-shirt retains its shape, texture, and vibrant appearance even after repeated washing, ensuring long-lasting performance and premium quality.",
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
            id: 17,
            name: "HUNTER OUTFITS Men Solid Round Neck Polyester Black T-Shirt",
            brand: "HUNTER OUTFITS",
            category: "fashion",
            subcategory: "tshirt",
            price: 139,
            discount: 10,
            rating: 4.3,
            reviews: 1812,
            image: "https://pub-bdcc7c641e344b0b9f401131bebb9a44.r2.dev/P22.webp",
            images: [
                "https://pub-bdcc7c641e344b0b9f401131bebb9a44.r2.dev/P22.webp",
                "https://pub-bdcc7c641e344b0b9f401131bebb9a44.r2.dev/P23.webp",
                "https://pub-bdcc7c641e344b0b9f401131bebb9a44.r2.dev/P24.webp"
            ],
            description: "A soap-free herbal formulation that cleans impurities and helps clear pimples. Contains Neem and Turmeric.",
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
            id: 18,
            name: "V-MART Men Graphic Print Round Neck Cotton Blend Black T-Shirt",
            brand: "V-MART",
            category: "fashion",
            subcategory: "tshirt",
            price: 139,
            discount: 90,
            rating: 4.3,
            reviews: 1290,
            image: "https://pub-bdcc7c641e344b0b9f401131bebb9a44.r2.dev/P25.webp",
            images: [
                "https://pub-bdcc7c641e344b0b9f401131bebb9a44.r2.dev/P25.webp",
                "https://pub-bdcc7c641e344b0b9f401131bebb9a44.r2.dev/P26.webp",
                "https://pub-bdcc7c641e344b0b9f401131bebb9a44.r2.dev/P27.webp"
            ],
            description: "Perfect for men searching for branded casual t-shirts online, performance activewear, smart-casual fashion, lightweight travel clothing, modern zipper t-shirts, premium polyester apparel, and stylish everyday wear, this versatile outfit combines practicality with contemporary elegance. The clean and modern silhouette pairs effortlessly with jeans, joggers, shorts, chinos, or trousers, allowing you to create multiple fashionable looks suitable for casual outings, fitness routines, airport styling, weekend gatherings, and relaxed office environments.",
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
            name: "KASPY Men Striped Round Neck Polyester Grey T-Shirt",
            brand: "KASPY",
            category: "fashion",
            subcategory: "tshirt",
            price: 139,
            discount: 90,
            rating: 4.3,
            reviews: 2567,
            image: "https://pub-bdcc7c641e344b0b9f401131bebb9a44.r2.dev/P28.webp",
            images: [
                "https://pub-bdcc7c641e344b0b9f401131bebb9a44.r2.dev/P28.webp",
                "https://pub-bdcc7c641e344b0b9f401131bebb9a44.r2.dev/P29.webp",
                "https://pub-bdcc7c641e344b0b9f401131bebb9a44.r2.dev/P30.webp"
            ],
            description: "Ideal for modern men seeking affordable premium fashion, breathable activewear, wrinkle-free clothing, and stylish athletic-inspired outfits, this polyester zipper t-shirt offers the perfect balance of comfort, durability, and trend-forward design. Whether worn for sports activities, urban streetwear styling, travel comfort, or daily casual fashion, this premium t-shirt delivers confidence, flexibility, and sophisticated modern appeal for every occasion.",
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
