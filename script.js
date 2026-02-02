// ===== Product Data =====
const products = [
    // Shoes
    { id: 1, name: 'Elegant Leather Pumps', price: 89.99, category: 'shoes', emoji: '👠', stock: 15 },
    { id: 2, name: 'Comfortable Running Shoes', price: 119.99, category: 'shoes', emoji: '👟', stock: 23 },
    { id: 3, name: 'Stylish Ankle Boots', price: 99.99, category: 'shoes', emoji: '👢', stock: 18 },
    { id: 4, name: 'Casual Sneakers', price: 79.99, category: 'shoes', emoji: '👟', stock: 27 },
    
    // Clothing
    { id: 5, name: 'Elegant Evening Dress', price: 159.99, category: 'clothing', emoji: '👗', stock: 12 },
    { id: 6, name: 'Casual Summer Blouse', price: 49.99, category: 'clothing', emoji: '👕', stock: 31 },
    { id: 7, name: 'Cozy Winter Cardigan', price: 79.99, category: 'clothing', emoji: '🧥', stock: 19 },
    { id: 8, name: 'Professional Blazer', price: 129.99, category: 'clothing', emoji: '🧥', stock: 14 },
    
    // Perfume
    { id: 9, name: 'Floral Fantasy Perfume', price: 64.99, category: 'perfume', emoji: '💐', stock: 30 },
    { id: 10, name: 'Citrus Burst Fragrance', price: 54.99, category: 'perfume', emoji: '🍋', stock: 25 },
    { id: 11, name: 'Rose Garden Eau de Toilette', price: 59.99, category: 'perfume', emoji: '🌹', stock: 22 },
    { id: 12, name: 'Vanilla Dreams Perfume', price: 69.99, category: 'perfume', emoji: '🌸', stock: 28 },
    
    // Jewelry
    { id: 13, name: 'Gold Pendant Necklace', price: 149.99, category: 'jewelry', emoji: '📿', stock: 11 },
    { id: 14, name: 'Diamond Ring', price: 299.99, category: 'jewelry', emoji: '💍', stock: 8 },
    { id: 15, name: 'Pearl Bracelet', price: 89.99, category: 'jewelry', emoji: '💎', stock: 16 },
    { id: 16, name: 'Crystal Earrings', price: 49.99, category: 'jewelry', emoji: '✨', stock: 35 },
    
    // Home Items
    { id: 17, name: 'Luxury Scented Candles', price: 39.99, category: 'home', emoji: '🔯️', stock: 40 },
    { id: 18, name: 'Silk Pillowcase', price: 44.99, category: 'home', emoji: '🛏️', stock: 24 },
    { id: 19, name: 'Decorative Wall Mirror', price: 79.99, category: 'home', emoji: '🪞', stock: 13 },
    { id: 20, name: 'Ceramic Vase Set', price: 59.99, category: 'home', emoji: '🏺', stock: 17 }
];

// ===== Shopping Cart =====
let cart = [];

// ===== Initialize on Document Ready =====
$(document).ready(function() {
    displayProducts('all');
    attachEventListeners();
    loadCartFromStorage();
});

// ===== Display Products =====
function displayProducts(category = 'all') {
    const productList = $('#product-list');
    productList.empty();
    
    const filteredProducts = category === 'all' 
        ? products 
        : products.filter(p => p.category === category);
    
    if (filteredProducts.length === 0) {
        productList.html('<p class="text-center text-muted col-12">No products found in this category.</p>');
        return;
    }
    
    filteredProducts.forEach(product => {
        const productHTML = `
            <div class="col-md-6 col-lg-4 mb-4">
                <div class="card product-card shadow-sm">
                    <div class="product-image">
                        <span style="font-size: 4rem;">${product.emoji}</span>
                    </div>
                    <div class="card-body">
                        <span class="product-category">${product.category.charAt(0).toUpperCase() + product.category.slice(1)}</span>
                        <h5 class="card-title mt-2">${product.name}</h5>
                        <p class="product-price">$${product.price.toFixed(2)}</p>
                        <p class="text-muted small">Stock: <span class="stock-badge">${product.stock}</span></p>
                        <button class="btn btn-custom w-100" onclick="addToCart(${product.id})"> 
                            <i class="bi bi-cart-plus"></i> Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        `;
        productList.append(productHTML);
    });
}

// ===== Add to Cart =====
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    
    updateCartUI();
    saveCartToStorage();
    
    Swal.fire({
        title: 'Added to Cart!',
        text: `${product.name} has been added to your cart.`,
        icon: 'success',
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 2000
    });
}

// ===== Remove from Cart =====
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartUI();
    saveCartToStorage();
}

// ===== Update Cart Quantity =====
function updateQuantity(productId, quantity) {
    const item = cart.find(i => i.id === productId);
    if (item) {
        if (quantity <= 0) {
            removeFromCart(productId);
        } else {
            item.quantity = quantity;
            updateCartUI();
            saveCartToStorage();
        }
    }
}

// ===== Update Cart UI =====
function updateCartUI() {
    $('#cart-count').text(cart.length);
    
    const cartItemsDiv = $('#cart-items');
    cartItemsDiv.empty();
    
    if (cart.length === 0) {
        cartItemsDiv.html('<p class="text-muted">Your cart is empty</p>');
        $('#cart-total').text('0.00');
        return;
    }
    
    let total = 0;
    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
        
        const cartItemHTML = `
            <div class="card mb-2">
                <div class="card-body d-flex justify-content-between align-items-center">
                    <div class="flex-grow-1">
                        <h6 class="mb-1">${item.name}</h6>
                        <p class="text-muted small mb-0">$${item.price.toFixed(2)} x ${item.quantity} = $${itemTotal.toFixed(2)}</p>
                    </div>
                    <div class="ms-3">
                        <input type="number" class="form-control form-control-sm" style="width: 60px;" 
                               value="${item.quantity}" min="1" max="${item.stock}" 
                               onchange="updateQuantity(${item.id}, this.value)">
                        <button class="btn btn-sm btn-danger mt-2" onclick="removeFromCart(${item.id})"> 
                            <i class="bi bi-trash"></i>
                        </button>
                    </div>
                </div>
            </div>
        `;
        cartItemsDiv.append(cartItemHTML);
    });
    
    $('#cart-total').text(total.toFixed(2));
}

// ===== Checkout =====
$('#checkout-btn').on('click', function() {
    if (cart.length === 0) {
        Swal.fire('Empty Cart', 'Please add items to your cart before checkout.', 'warning');
        return;
    }
    
    // Close cart modal and open checkout modal
    const cartModal = bootstrap.Modal.getInstance(document.getElementById('cartModal'));
    cartModal.hide();
    
    setTimeout(() => {
        new bootstrap.Modal(document.getElementById('checkoutModal')).show();
    }, 300);
});

// ===== Cart Modal =====
$('#cart-btn').on('click', function() {
    new bootstrap.Modal(document.getElementById('cartModal')).show();
});

// ===== Category Filter =====
function attachEventListeners() {
    $('.category-btn').on('click', function() {
        $('.category-btn').removeClass('active');
        $(this).addClass('active');
        const category = $(this).data('category');
        displayProducts(category);
    });
    
    // Set 'all' as active by default
    $('.category-btn[data-category="all"]').addClass('active');
}

// ===== Scroll to Products =====
function scrollToProducts() {
    $('html, body').animate({
        scrollTop: $('#products').offset().top - 50
    }, 800);
}

// ===== Local Storage Functions =====
function saveCartToStorage() {
    localStorage.setItem('btshop_cart', JSON.stringify(cart));
}

function loadCartFromStorage() {
    const savedCart = localStorage.getItem('btshop_cart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
        updateCartUI();
    }
}

// ===== Checkout Navigation Functions =====
function moveToPayment() {
    const firstName = $('#firstName').val().trim();
    const lastName = $('#lastName').val().trim();
    const email = $('#email').val().trim();
    const address = $('#address').val().trim();
    const city = $('#city').val().trim();
    const state = $('#state').val().trim();
    const zip = $('#zip').val().trim();
    const phone = $('#phone').val().trim();
    
    if (!firstName || !lastName || !email || !address || !city || !state || !zip || !phone) {
        Swal.fire('Missing Information', 'Please fill in all shipping fields.', 'warning');
        return;
    }
    
    // Store shipping info
    localStorage.setItem('checkoutShipping', JSON.stringify({
        firstName, lastName, email, address, city, state, zip, phone
    }));
    
    const paymentTab = new bootstrap.Tab(document.getElementById('payment-tab'));
    paymentTab.show();
}

function moveToShipping() {
    const shippingTab = new bootstrap.Tab(document.getElementById('shipping-tab'));
    shippingTab.show();
}

function moveToReview() {
    const cardName = $('#cardName').val().trim();
    const cardNumber = $('#cardNumber').val().trim();
    const expiry = $('#expiry').val().trim();
    const cvv = $('#cvv').val().trim();
    
    if (!cardName || !cardNumber || !expiry || !cvv) {
        Swal.fire('Missing Information', 'Please fill in all payment fields.', 'warning');
        return;
    }
    
    // Validate card number format
    const cleanCardNumber = cardNumber.replace(/\s/g, '');
    if (!/^\d{13,19}$/.test(cleanCardNumber)) {
        Swal.fire('Invalid Card', 'Please enter a valid card number.', 'warning');
        return;
    }
    
    // Update review tab with order details
    updateReviewTab();
    
    const reviewTab = new bootstrap.Tab(document.getElementById('review-tab'));
    reviewTab.show();
}

function updateReviewTab() {
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const shipping = 9.99;
    const tax = parseFloat((subtotal * 0.08).toFixed(2));
    const total = subtotal + shipping + tax;
    
    // Update totals
    $('#reviewSubtotal').text(subtotal.toFixed(2));
    $('#reviewTax').text(tax.toFixed(2));
    $('#reviewTotal').text(total.toFixed(2));
    
    // Update order summary
    let summaryHTML = '';
    cart.forEach(item => {
        const itemTotal = (item.price * item.quantity).toFixed(2);
        summaryHTML += `
            <div class="d-flex justify-content-between align-items-center mb-2 pb-2 border-bottom">
                <div>
                    <p class="mb-0 fw-500">${item.name}</p>
                    <small class="text-muted">Qty: ${item.quantity}</small>
                </div>
                <span class="fw-bold">$${itemTotal}</span>
            </div>
        `;
    });
    $('#orderSummary').html(summaryHTML);
    
    // Update shipping info
    const shipping_info = JSON.parse(localStorage.getItem('checkoutShipping') || '{}');
    const shippingHTML = `
        <div class="card mb-3">
            <div class="card-body">
                <h6 class="card-title mb-3">Shipping Address</h6>
                <p class="mb-1"><strong>${shipping_info.firstName} ${shipping_info.lastName}</strong></p>
                <p class="mb-1">${shipping_info.address}</p>
                <p class="mb-1">${shipping_info.city}, ${shipping_info.state} ${shipping_info.zip}</p>
                <p class="mb-0">${shipping_info.phone}</p>
            </div>
        </div>
    `;
    $('#shippingInfo').html(shippingHTML);
}

function placeOrder() {
    // Generate order number
    const orderNumber = 'ORD-' + Date.now().toString().slice(-6);
    
    // Get customer info
    const shipping_info = JSON.parse(localStorage.getItem('checkoutShipping') || '{}');
    
    // Close modal
    const checkoutModal = bootstrap.Modal.getInstance(document.getElementById('checkoutModal'));
    checkoutModal.hide();
    
    // Clear cart
    cart = [];
    updateCartUI();
    saveCartToStorage();
    
    // Clear checkout data
    localStorage.removeItem('checkoutShipping');
    
    // Show success message
    setTimeout(() => {
        Swal.fire({
            title: 'Order Placed Successfully!',
            html: `
                <div style="text-align: left; margin: 20px 0;">
                    <p><strong>Order Number:</strong> ${orderNumber}</p>
                    <p><strong>Customer Name:</strong> ${shipping_info.firstName} ${shipping_info.lastName}</p>
                    <p><strong>Email:</strong> ${shipping_info.email}</p>
                    <p><strong>Shipping To:</strong> ${shipping_info.address}, ${shipping_info.city}, ${shipping_info.state} ${shipping_info.zip}</p>
                    <hr>
                    <p style="color: #28a745; font-weight: bold;">Thank you for your purchase!</p>
                    <p style="font-size: 0.9em; color: #666;">You will receive an order confirmation email shortly.</p>
                </div>
            `,
            icon: 'success',
            confirmButtonColor: '#E29B57',
            confirmButtonText: 'Continue Shopping'
        }).then(() => {
            // Scroll to top
            $('html, body').animate({ scrollTop: 0 }, 'fast');
        });
    }, 500);
}