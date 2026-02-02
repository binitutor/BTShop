// ===== Check Admin Authentication =====
function checkAdminAuth() {
    const adminToken = localStorage.getItem('adminToken');
    if (!adminToken || adminToken !== 'true') {
        // Redirect to login if not authenticated
        window.location.href = 'login.html';
    }
}

// ===== Logout Function =====
function logoutAdmin() {
    if (confirm('Are you sure you want to logout?')) {
        localStorage.removeItem('adminToken');
        localStorage.removeItem('adminUsername');
        localStorage.removeItem('rememberAdmin');
        window.location.href = 'login.html';
    }
}

// ===== Initialize on Document Ready =====
$(document).ready(function() {
    // Check authentication first
    checkAdminAuth();
    
    initializeCharts();
    initializeOrdersTable();
    displayTopProducts();
});

// ===== Initialize Charts =====
function initializeCharts() {
    // Sales Chart
    const salesCtx = document.getElementById('salesChart');
    if (salesCtx) {
        new Chart(salesCtx, {
            type: 'line',
            data: {
                labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
                datasets: [{
                    label: 'Sales ($)',
                    data: [2400, 3200, 2800, 3600, 4200, 3800],
                    borderColor: '#E29B57',
                    backgroundColor: 'rgba(226, 155, 87, 0.1)',
                    borderWidth: 2,
                    tension: 0.4,
                    fill: true,
                    pointBackgroundColor: '#E29B57',
                    pointBorderColor: '#fff',
                    pointBorderWidth: 2,
                    pointRadius: 5
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                plugins: {
                    legend: { display: true },
                    filler: { propagate: true }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        max: 5000
                    }
                }
            }
        });
    }
    
    // Inventory Chart
    const inventoryCtx = document.getElementById('inventoryChart');
    if (inventoryCtx) {
        new Chart(inventoryCtx, {
            type: 'doughnut',
            data: {
                labels: ['Shoes', 'Clothing', 'Perfume', 'Jewelry', 'Home Items'],
                datasets: [{
                    data: [83, 76, 105, 50, 94],
                    backgroundColor: [
                        '#0A221C',
                        '#E29B57',
                        '#F2E2C9',
                        '#F2F0E5',
                        'rgba(226, 155, 87, 0.5)'
                    ],
                    borderColor: '#fff',
                    borderWidth: 2
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                plugins: {
                    legend: {
                        position: 'bottom'
                    }
                }
            }
        });
    }
    
    // Category Sales Chart
    const categorySalesCtx = document.getElementById('categorySalesChart');
    if (categorySalesCtx) {
        new Chart(categorySalesCtx, {
            type: 'bar',
            data: {
                labels: ['Shoes', 'Clothing', 'Perfume', 'Jewelry', 'Home Items'],
                datasets: [{
                    label: 'Sales ($)',
                    data: [4200, 3800, 3200, 5600, 2100],
                    backgroundColor: [
                        '#0A221C',
                        '#E29B57',
                        '#F2E2C9',
                        'rgba(226, 155, 87, 0.7)',
                        '#F2F0E5'
                    ],
                    borderColor: '#0A221C',
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                indexAxis: 'y',
                plugins: {
                    legend: { display: false }
                },
                scales: {
                    x: {
                        beginAtZero: true,
                        max: 6000
                    }
                }
            }
        });
    }
}

// ===== Display Top Products =====
function displayTopProducts() {
    const topProducts = [
        { name: 'Diamond Ring', sales: 156, revenue: '$46,544' },
        { name: 'Professional Blazer', sales: 134, revenue: '$17,414' },
        { name: 'Comfortable Running Shoes', sales: 128, revenue: '$15,359' },
        { name: 'Elegant Evening Dress', sales: 115, revenue: '$18,388' },
        { name: 'Gold Pendant Necklace', sales: 98, revenue: '$14,689' }
    ];
    
    const topProductsDiv = $('#topProducts');
    topProductsDiv.empty();
    
    topProducts.forEach((product, index) => {
        const progressPercentage = ((index + 1) / topProducts.length) * 100;
        const productHTML = `
            <div class="mb-4">
                <div class="d-flex justify-content-between align-items-center mb-2">
                    <span class="fw-600">${index + 1}. ${product.name}</span>
                    <span class="badge bg-custom">${product.sales} sold</span>
                </div>
                <div class="progress" style="height: 8px;">
                    <div class="progress-bar bg-custom" role="progressbar" style="width: ${progressPercentage}%; background-color: #E29B57;"></div>
                </div>
                <small class="text-muted">${product.revenue}</small>
            </div>
        `;
        topProductsDiv.append(productHTML);
    });
}

// ===== Initialize Orders Table =====
function initializeOrdersTable() {
    const sampleOrders = [
        { id: 'ORD-001', customer: 'Sarah Johnson', product: 'Elegant Evening Dress', quantity: 1, amount: '$159.99', status: 'Delivered', date: '2026-01-28' },
        { id: 'ORD-002', customer: 'Emma Davis', product: 'Gold Pendant Necklace', quantity: 1, amount: '$149.99', status: 'Shipped', date: '2026-01-29' },
        { id: 'ORD-003', customer: 'Jessica Brown', product: 'Professional Blazer', quantity: 2, amount: '$259.98', status: 'Processing', date: '2026-01-30' },
        { id: 'ORD-004', customer: 'Maria Garcia', product: 'Rose Garden Eau de Toilette', quantity: 1, amount: '$59.99', status: 'Delivered', date: '2026-01-31' },
        { id: 'ORD-005', customer: 'Anna Wilson', product: 'Ceramic Vase Set', quantity: 3, amount: '$179.97', status: 'Shipped', date: '2026-02-01' },
        { id: 'ORD-006', customer: 'Sophie Taylor', product: 'Diamond Ring', quantity: 1, amount: '$299.99', status: 'Processing', date: '2026-02-02' },
        { id: 'ORD-007', customer: 'Rachel Adams', product: 'Comfortable Running Shoes', quantity: 2, amount: '$239.98', status: 'Delivered', date: '2026-02-02' },
        { id: 'ORD-008', customer: 'Lisa Chen', product: 'Floral Fantasy Perfume', quantity: 1, amount: '$64.99', status: 'Processing', date: '2026-02-02' }
    ];
    
    const ordersBody = $('#orders-body');
    ordersBody.empty();
    
    sampleOrders.forEach(order => {
        const statusBadgeClass = order.status === 'Delivered' ? 'bg-success' : 
                                 order.status === 'Shipped' ? 'bg-info' : 'bg-warning';
        
        const rowHTML = `
            <tr>
                <td><strong>${order.id}</strong></td>
                <td>${order.customer}</td>
                <td>${order.product}</td>
                <td><span class="badge bg-light text-dark">${order.quantity}</span></td>
                <td>${order.amount}</td>
                <td><span class="badge ${statusBadgeClass}">${order.status}</span></td>
                <td>${order.date}</td>
                <td>
                    <button class="btn btn-sm btn-outline-custom" title="Edit"><i class="bi bi-pencil"></i></button>
                    <button class="btn btn-sm btn-outline-danger" title="Delete"><i class="bi bi-trash"></i></button>
                </td>
            </tr>
        `;
        ordersBody.append(rowHTML);
    });
    
    // Initialize DataTable
    if (!$.fn.dataTable.isDataTable('#ordersTable')) {
        $('#ordersTable').DataTable({
            pageLength: 10,
            lengthChange: false,
            searching: true,
            ordering: true,
            info: true,
            paging: true
        });
    }
}
