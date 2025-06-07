// Mobile Menu Toggle
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

mobileMenuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    mobileMenuBtn.classList.toggle('active');
});

// Menu Items Data
const menuItems = [
    {
        name: 'Pulled Pork',
        price: '$19.00',
        description: 'Chips, Cheese, Pulled Pork & Coleslaw'
    },
    {
        name: 'Fish & Chips',
        price: '$19.00',
        description: 'Served with Coleslaw, Lemon Wedge & Tartare Sauce'
    },
    {
        name: 'Sweet Potatoe Nachos',
        price: '$19.00',
        description: '**placeholder text TBA**'
    },
    {
        name: 'Chilli Con Carne',
        price: '$18.00',
        description: 'Chips, Cheese, Chilli Con Carne, Sour Cream & Jalapeños'
    },
    {
        name: 'Satay Chicken',
        price: '$18.00',
        description: 'Chips, Cheese & Satay Chicken'
    },
    {
        name: 'Sweet Chilli & Sour Cream',
        price: '$13.50',
        description: 'Served on a tray of chips'
    },
    {
        name: 'Cheese & Gravy',
        price: '$13.50',
        description: 'Served on a tray of chips'
    },
    {
        name: 'Chips & Gravy',
        price: '$13.00'
    },
    {
        name: '4 x Chicken Nuggets',
        price: '$12.00',
        description: 'Served with chips'
    },
    {
        name: 'Tray of Chips',
        price: '$12.00'
    },
    {
        name: 'Cup of Chips',
        price: '$6.50'
    },
    {
        name: 'Mozzarella Sticks',
        price: '$8.50',
        description: 'Served with Garlic Aioli'
    },
    {
        name: '2 x Jam Donuts',
        price: '$8.00',
        description: 'Top with Nutella OR Cinnamon Sugar'
    }
];

// Load Menu Items
function loadMenuItems() {
    const menuGrid = document.querySelector('.menu-grid');
    if (!menuGrid) return; // Exit if menu grid doesn't exist
    
    menuGrid.innerHTML = ''; // Clear existing items
    
    menuItems.forEach(item => {
        const menuItem = document.createElement('div');
        menuItem.className = 'menu-item';
        menuItem.innerHTML = `
            <h3>${item.name}</h3>
            <div class="price">${item.price}</div>
            ${item.description ? `<div class="description">${item.description}</div>` : ''}
        `;
        menuGrid.appendChild(menuItem);
    });
}

// Reviews Data (Example reviews - replace with actual Facebook reviews)
const reviews = [
    {
        text: "Amazing food and service! The pulled pork is to die for!",
        author: "Sarah M."
    },
    {
        text: "Best food truck in Adelaide! Their fish and chips are always perfect.",
        author: "John D."
    },
    {
        text: "Great catering service for our company event. Everyone loved it!",
        author: "Michael R."
    }
];

// Reviews Slider
let currentReview = 0;

function loadReviews() {
    const reviewsSlider = document.querySelector('.reviews-slider');
    if (!reviewsSlider) return; // Exit if reviews slider doesn't exist
    
    reviewsSlider.innerHTML = ''; // Clear existing reviews
    
    reviews.forEach((review, index) => {
        const reviewElement = document.createElement('div');
        reviewElement.className = 'review';
        reviewElement.style.display = index === 0 ? 'block' : 'none';
        reviewElement.innerHTML = `
            <p>${review.text}</p>
            <strong>- ${review.author}</strong>
        `;
        reviewsSlider.appendChild(reviewElement);
    });
}

function rotateReviews() {
    const reviewElements = document.querySelectorAll('.review');
    if (reviewElements.length === 0) return;
    
    reviewElements[currentReview].style.display = 'none';
    currentReview = (currentReview + 1) % reviewElements.length;
    reviewElements[currentReview].style.display = 'block';
}

// Form Submission
document.addEventListener('DOMContentLoaded', () => {
    const cateringForm = document.getElementById('cateringForm');
    if (cateringForm) {
        cateringForm.addEventListener('submit', (e) => {
            e.preventDefault();
            // Here you would typically handle the form submission
            // For now, we'll just show an alert
            alert('Thank you for your enquiry! We will get back to you within 2 business days.');
            cateringForm.reset();
        });
    }
});

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    loadMenuItems();
    loadReviews();
    setInterval(rotateReviews, 5000); // Rotate reviews every 5 seconds
    
    // Smooth Scroll for Navigation Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
                // Close mobile menu if open
                if (navLinks) {
                    navLinks.classList.remove('active');
                }
                if (mobileMenuBtn) {
                    mobileMenuBtn.classList.remove('active');
                }
            }
        });
    });
}); 