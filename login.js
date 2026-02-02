// ===== Demo Credentials =====
const ADMIN_USERNAME = 'admin';
const ADMIN_PASSWORD = 'password123';

// ===== Initialize on Document Ready =====
$(document).ready(function() {
    // Check if already logged in
    checkLoginStatus();
    
    // Handle login form submission
    $('#loginForm').on('submit', function(e) {
        e.preventDefault();
        handleLogin();
    });
});

// ===== Check Login Status =====
function checkLoginStatus() {
    const adminToken = localStorage.getItem('adminToken');
    if (adminToken && adminToken === 'true') {
        // Redirect to admin dashboard if already logged in
        window.location.href = 'admin.html';
    }
}

// ===== Handle Login =====
function handleLogin() {
    const username = $('#username').val().trim();
    const password = $('#password').val();
    const rememberMe = $('#rememberMe').is(':checked');

    // Validate credentials
    if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
        // Store auth token
        localStorage.setItem('adminToken', 'true');
        localStorage.setItem('adminUsername', username);
        
        if (rememberMe) {
            localStorage.setItem('rememberAdmin', 'true');
        }

        // Show success message
        showSuccessMessage();
        
        // Redirect to admin dashboard after 1 second
        setTimeout(() => {
            window.location.href = 'admin.html';
        }, 1000);
    } else {
        // Show error message
        showErrorMessage();
        $('#password').val(''); // Clear password field
    }
}

// ===== Show Success Message =====
function showSuccessMessage() {
    const messageDiv = $('#loginMessage');
    messageDiv.removeClass('alert-warning d-none').addClass('alert-success d-block');
    messageDiv.text('✓ Login successful! Redirecting...');
}

// ===== Show Error Message =====
function showErrorMessage() {
    const messageDiv = $('#loginMessage');
    messageDiv.removeClass('d-none alert-success').addClass('d-block alert-warning');
    messageDiv.text('✗ Invalid credentials. Please try again. (Demo: admin / password123)');
}

// ===== Logout Function (called from admin.js) =====
function logoutAdmin() {
    localStorage.removeItem('adminToken');
    localStorage.removeItem('adminUsername');
    localStorage.removeItem('rememberAdmin');
    window.location.href = 'login.html';
}
