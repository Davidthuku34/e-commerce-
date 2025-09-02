// Product data - matches the main page
const products = [
    { 
        id: 1, 
        name: "Premium Wireless Headphones", 
        price: 24999, 
        description: "Experience crystal-clear sound with our premium wireless headphones. Features active noise cancellation, 30-hour battery life, and ultra-comfortable ear cushions for extended listening sessions. Perfect for music lovers and professionals who demand the best audio quality.",
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&h=600&fit=crop"
    },
    { 
        id: 2, 
        name: "Smart Watch Pro", 
        price: 34999, 
        description: "Stay connected and track your fitness with our advanced smartwatch. Features include heart rate monitoring, GPS tracking, sleep analysis, and smartphone notifications. Water-resistant design perfect for workouts and daily wear.",
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&h=600&fit=crop"
    },
    { 
        id: 3, 
        name: "Gaming Laptop Ultra", 
        price: 149999, 
        description: "Dominate the competition with our high-performance gaming laptop. Equipped with the latest graphics card, high refresh rate display, and advanced cooling system. Perfect for both gaming and creative workloads.",
        image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600&h=600&fit=crop"
    },
    { 
        id: 4, 
        name: "4K Action Camera", 
        price: 54999, 
        description: "Capture your adventures in stunning 4K resolution. Waterproof, shockproof, and compact design makes it perfect for any adventure. Includes advanced image stabilization and multiple mounting options.",
        image: "https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=600&h=600&fit=crop"
    },
    { 
        id: 5, 
        name: "Bluetooth Speaker Max", 
        price: 15999, 
        description: "Powerful portable speaker with deep bass and 24-hour battery life. Waterproof and dustproof design makes it perfect for outdoor use. Connect multiple speakers for an immersive audio experience.",
        image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=600&h=600&fit=crop"
    },
    { 
        id: 6, 
        name: "Fitness Tracker Elite", 
        price: 21999, 
        description: "Track your fitness journey with precision. Monitors heart rate, blood oxygen, sleep quality, and more. Long battery life and sleek design make it perfect for 24/7 wear.",
        image: "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=600&h=600&fit=crop"
    },
    { 
        id: 7, 
        name: "Wireless Charging Pad", 
        price: 4999, 
        description: "Fast and convenient wireless charging for all Qi-enabled devices. Sleek, compact design with non-slip surface. Charges through most phone cases up to 5mm thick.",
        image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=600&h=600&fit=crop"
    },
    { 
        id: 8, 
        name: "Gaming Mouse RGB", 
        price: 9999, 
        description: "High-precision gaming mouse with customizable RGB lighting. Features programmable buttons, adjustable DPI up to 16000, and ergonomic design for comfortable extended gaming sessions.",
        image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=600&h=600&fit=crop"
    },
    { 
        id: 9, 
        name: "Mechanical Keyboard", 
        price: 17999, 
        description: "Professional mechanical keyboard with customizable RGB backlighting. Features responsive mechanical switches, N-key rollover, and durable construction for both work and gaming.",
        image: "https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=600&h=600&fit=crop"
    },
    { 
        id: 10, 
        name: "USB-C Hub Pro", 
        price: 10999, 
        description: "Expand your connectivity with this versatile USB-C hub. Features 4K HDMI, USB 3.0 ports, SD card reader, and 100W power delivery. Perfect for laptops with limited ports.",
        image: "https://images.unsplash.com/photo-1625842268584-8f3296236761?w=600&h=600&fit=crop"
    },
    { 
        id: 11, 
        name: "Portable SSD 1TB", 
        price: 24999, 
        description: "Lightning-fast external SSD with read speeds up to 1050MB/s. Shock-resistant metal enclosure and password protection keep your data safe. Perfect for professionals on the go.",
        image: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=600&h=600&fit=crop"
    },
    { 
        id: 12, 
        name: "Smartphone Stand", 
        price: 3499, 
        description: "Adjustable smartphone stand with 360° rotation and sturdy base. Perfect for video calls, watching content, or following recipes hands-free. Compatible with all phone sizes.",
        image: "https://images.unsplash.com/photo-1512499617640-c74ae3a79d37?w=600&h=600&fit=crop"
    }
];

// Function to format price with KSh and commas
function formatPrice(price) {
    return 'KSh ' + price.toLocaleString('en-US');
}

// Load product details when page loads
document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = parseInt(urlParams.get('id'));
    const product = products.find(p => p.id === productId);

    if (product) {
        document.title = `${product.name} - FantaLink`;
        document.getElementById('productName').textContent = product.name;
        document.getElementById('productPrice').textContent = formatPrice(product.price);
        document.getElementById('productDescription').textContent = product.description;
        document.getElementById('productImage').src = product.image;
        document.getElementById('productImage').alt = product.name;
    } else {
        // Redirect to home if product not found
        window.location.href = 'index.html';
    }
});

// Add to cart function
function addToCart() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = parseInt(urlParams.get('id'));
    
    // Send message to parent window to add to cart
    if (window.opener) {
        window.opener.postMessage({
            type: 'ADD_TO_CART',
            productId: productId
        }, '*');
        alert('Product added to cart!');
    } else {
        alert('Please add to cart from the main page.');
    }
}
