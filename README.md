# BTShop - E-Commerce Platform

A modern, fully-featured women's e-commerce website built with HTML5, CSS3, and JavaScript. Features a customer-facing storefront and a secure admin dashboard with comprehensive sales analytics.

## 📋 Overview

BTShop is a premium online destination for high-quality women's products including shoes, clothing, perfumes, jewelry, and home essentials. The platform features a responsive design optimized for all devices with an intuitive shopping experience and secure admin management system.

---

## ✨ Features

### **Customer Features**
- 🛍️ **20 Premium Products** across 5 categories
  - Shoes (4 products)
  - Clothing (4 products)
  - Perfume (4 products)
  - Jewelry (4 products)
  - Home Items (4 products)

- 🔍 **Category Filtering** - Browse products by category
- 🛒 **Shopping Cart** - Add/remove items, update quantities
- 💾 **Cart Persistence** - LocalStorage saves cart data
- ✅ **Three-Step Checkout Process**
  - Shipping Information
  - Payment Details
  - Order Review & Confirmation
- 📦 **Order Management** - Track order number and details
- 📱 **Responsive Design** - Mobile-friendly interface
- 🎨 **Modern UI** - Bootstrap 5.3 with custom styling

### **Admin Features**
- 🔐 **Secure Login System** - Authentication with demo credentials
- 📊 **Sales Dashboard** with real-time metrics
  - Total Sales: $23,450
  - Total Orders: 342
  - Total Inventory: 1,408 units
  - Customer Count: 567
- 📈 **Advanced Analytics**
  - Monthly Sales Trend (Line Chart)
  - Inventory by Category (Doughnut Chart)
  - Sales by Category (Bar Chart)
  - Top 5 Selling Products List
- 📋 **Orders Management**
  - DataTables integration for searching/sorting
  - Order status tracking (Processing, Shipped, Delivered)
  - Customer information display
  - Edit/Delete actions
- 🔒 **Session Management** - Login/Logout functionality

---

## 🛠️ Technologies Used

### **Frontend**
- **HTML5** - Semantic markup
- **CSS3** - Custom styling with CSS variables
- **JavaScript** - ES6+ for interactivity
- **jQuery** - DOM manipulation
- **Bootstrap 5.3** - Responsive grid system

### **Libraries & Tools**
- **Chart.js** - Data visualization (Sales & Inventory charts)
- **SweetAlert2** - Beautiful notifications & dialogs
- **DataTables** - Advanced table features (sorting, searching, pagination)
- **Bootstrap Icons** - Icon library

### **Storage**
- **LocalStorage** - Cart and authentication persistence

---

## 📁 Project Structure

```
btshop/
├── index.html              # Customer store homepage
├── admin.html              # Admin dashboard
├── login.html              # Admin login page
├── styles.css              # Global styles & themes
├── script.js               # Customer functionality
├── admin.js                # Admin dashboard logic
├── login.js                # Authentication system
└── README.md               # Project documentation
```

---

## 📄 File Descriptions

### **index.html** (Customer Store)
- Navigation bar with shopping cart
- Hero section with call-to-action
- Category filter buttons (All, Shoes, Clothing, Perfume, Jewelry, Home)
- Product grid display (20 items)
- Shopping cart modal
- Three-step checkout process
- About section
- Footer with contact info

### **admin.html** (Admin Dashboard)
- Admin navigation with logout
- Statistics cards (Sales, Orders, Inventory, Customers)
- Monthly sales trend chart
- Inventory distribution chart
- Sales by category chart
- Top 5 best-selling products
- Recent orders DataTable

### **login.html** (Admin Login)
- Professional login interface
- Username/password validation
- Remember me checkbox
- Demo credentials display
- Redirect to admin dashboard on success
- Link to customer store

### **styles.css** (Global Styling)
- CSS custom properties (--primary-bg, --secondary-bg, etc.)
- Color scheme: 
  - Primary Background: #F2F0E5 (light cream)
  - Secondary Background: #F2E2C9 (light tan)
  - Primary Text: #0A221C (dark green-black)
  - Secondary Text: #E29B57 (warm amber/gold)
- Navigation styling
- Hero section design
- Product card styles
- Admin dashboard styles
- Checkout form styling
- Login page design
- Responsive breakpoints

### **script.js** (Customer Functionality)
- **Product Data** - 20 products with details
- **Display Products** - Dynamic rendering with category filter
- **Shopping Cart** - Add, remove, update quantity
- **Cart UI** - Modal display with totals
- **Checkout Flow**
  - Shipping form validation
  - Payment form validation
  - Order review with calculations
  - Order confirmation
- **Local Storage** - Cart persistence
- **Event Listeners** - Category filtering, cart actions
- **Utilities** - Scroll animation, price formatting

### **admin.js** (Admin Dashboard Logic)
- **Authentication Check** - Verify admin login
- **Charts Initialization**
  - Line chart for monthly sales
  - Doughnut chart for inventory
  - Horizontal bar chart for category sales
- **Top Products Display** - List with sales metrics
- **Orders Table** - DataTable with sample orders
- **Logout Function** - Session cleanup

### **login.js** (Authentication System)
- **Demo Credentials** - admin / password123
- **Login Validation** - Username/password verification
- **Session Management** - Token storage in LocalStorage
- **Remember Me** - Optional session persistence
- **Logout Function** - Session cleanup
- **Auto-Redirect** - Already logged-in check

---

## 🚀 Getting Started

### **Installation**
1. Clone or download the BTShop project
2. All files are self-contained (no build process needed)
3. Open `index.html` in a web browser to access the customer store

### **Accessing Admin Dashboard**
1. Open `login.html` in your browser
2. Use demo credentials:
   - **Username:** `admin`
   - **Password:** `password123`
3. Click "Login" to access the admin dashboard

### **No Server Required**
- All functionality works client-side
- Perfect for local testing and development
- No backend server setup needed

---

## 📊 Color Palette

| Element | Color | Hex Code |
|---------|-------|----------|
| Primary Background | Light Cream | #F2F0E5 |
| Secondary Background | Light Tan | #F2E2C9 |
| Primary Text | Dark Green-Black | #0A221C |
| Secondary Text | Warm Amber | #E29B57 |
| Navigation | Dark Background | #0A221C |
| Success | Green | #28a745 |
| Info | Blue | #17a2b8 |
| Warning | Yellow | #ffc107 |
| Danger | Red | #dc3545 |

---

## 🛍️ Product Catalog

### **Shoes** (4 products)
- Elegant Leather Pumps - $89.99
- Comfortable Running Shoes - $119.99
- Stylish Ankle Boots - $99.99
- Casual Sneakers - $79.99

### **Clothing** (4 products)
- Elegant Evening Dress - $159.99
- Casual Summer Blouse - $49.99
- Cozy Winter Cardigan - $79.99
- Professional Blazer - $129.99

### **Perfume** (4 products)
- Floral Fantasy Perfume - $64.99
- Citrus Burst Fragrance - $54.99
- Rose Garden Eau de Toilette - $59.99
- Vanilla Dreams Perfume - $69.99

### **Jewelry** (4 products)
- Gold Pendant Necklace - $149.99
- Diamond Ring - $299.99
- Pearl Bracelet - $89.99
- Crystal Earrings - $49.99

### **Home Items** (4 products)
- Luxury Scented Candles - $39.99
- Silk Pillowcase - $44.99
- Decorative Wall Mirror - $79.99
- Ceramic Vase Set - $59.99

---

## 🔐 Admin Login

**Demo Account:**
- Username: `admin`
- Password: `password123`

**Access URL:** `login.html`

**Features Available:**
- Sales analytics dashboard
- Inventory management
- Order tracking
- Customer statistics
- Charts and visualizations

---

## 💳 Checkout Process

### **Step 1: Shipping Information**
- First & Last Name
- Email address
- Street Address
- City, State, ZIP code
- Phone number

### **Step 2: Payment Details**
- Cardholder name
- Card number (demo: any 13-19 digit number)
- Expiry date (MM/YY format)
- CVV code
- Demo mode - accepts any valid format

### **Step 3: Order Review**
- Item-by-item summary
- Subtotal calculation
- Shipping cost ($9.99)
- Tax calculation (8%)
- Final total price
- Shipping address confirmation

### **Order Confirmation**
- Unique order number generation
- Customer details display
- Email confirmation notice
- Automatic cart clearing

---

## 🎨 Design Features

### **Responsive Design**
- Mobile-first approach
- Tablet optimization
- Desktop enhancements
- Breakpoints: 576px, 768px, 992px, 1200px

### **User Experience**
- Smooth scrolling animations
- Hover effects on cards and buttons
- Toast notifications for actions
- Form validation with clear messages
- Confirmation dialogs

### **Accessibility**
- Semantic HTML structure
- ARIA labels where applicable
- Keyboard navigation support
- Color contrast compliance

---

## 📱 Browser Compatibility

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

---

## 🔄 Data Persistence

### **LocalStorage Implementation**
- **Shopping Cart** - Persists between sessions
- **Admin Token** - Maintains login session
- **Checkout Data** - Temporarily stores order information
- **Remember Me** - Optional admin session extension

---

## 🚀 Future Enhancement Ideas

- Backend integration for real data
- User account creation and login
- Product reviews and ratings
- Wishlist functionality
- Multiple payment methods
- Inventory management updates
- Email notifications
- Order history tracking
- Product recommendations
- Search functionality
- Discount codes
- Shipping method selection

---

## 📞 Contact

**BTShop E-Commerce Platform**
- Email: info@btshop.com
- Phone: +1 (555) 123-4567
- Hours: Monday - Friday, 9AM - 5PM

---

## 📝 License

This project is created for educational and demonstration purposes.

---

## ✅ Checklist

- [x] Customer storefront with 20 products
- [x] Product browsing and filtering
- [x] Shopping cart with persistent storage
- [x] Three-step checkout simulation
- [x] Order confirmation with order number
- [x] Admin login system with authentication
- [x] Admin dashboard with analytics
- [x] Sales charts (Line, Doughnut, Bar)
- [x] Inventory management display
- [x] Orders table with DataTables
- [x] Responsive mobile design
- [x] Beautiful notifications (SweetAlert2)
- [x] Professional styling with color scheme
- [x] LocalStorage for data persistence
- [x] Session management

---

## 📚 Version History

**v1.0** - February 2, 2026
- Initial release
- Full e-commerce functionality
- Admin dashboard
- Login system
- Checkout simulation

---

**Last Updated:** February 2, 2026