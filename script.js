// Course Data
const courses = [
    {
        id: 1,
        title: "Complete Web Development Bootcamp",
        category: "web",
        instructor: "Bijay Kumar",
        instructorImg: "bijay.jpg",
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80",
        rating: 4.8,
        students: 1250,
        price: 99.99,
        duration: "32 hours",
        badge: "Bestseller"
    },
    {
        id: 2,
        title: "Python for Data Science and ML",
        category: "data",
        instructor: "Bijay Kumar",
        instructorImg: "bijay.jpg",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        rating: 4.7,
        students: 980,
        price: 89.99,
        duration: "28 hours",
        badge: "Popular"
    },
    {
        id: 3,
        title: "UI/UX Design Fundamentals",
        category: "design",
        instructor: "bijay kumar",
        instructorImg: "bijay.jpg",
        image: "https://images.unsplash.com/photo-1541462608143-67571c6738dd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        rating: 4.6,
        students: 750,
        price: 79.99,
        duration: "20 hours",
        badge: "New"
    },
    {
        id: 4,
        title: "Advanced JavaScript Concepts",
        category: "web",
        instructor: "bijay kumar",
        instructorImg: "bijay.jpg",
        image: "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        rating: 4.9,
        students: 1100,
        price: 109.99,
        duration: "25 hours",
        badge: "Bestseller"
    },
    {
        id: 5,
        title: "Machine Learning A-Z",
        category: "data",
        instructor: "bijay kumar",
        instructorImg: "bijay.jpg",
        image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1476&q=80",
        rating: 4.8,
        students: 1500,
        price: 119.99,
        duration: "40 hours",
        badge: "Hot"
    },
    {
        id: 6,
        title: "Adobe XD Masterclass",
        category: "design",
        instructor: "bijay kumar",
        instructorImg: "bijay.jpg",
        image: "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        rating: 4.7,
        students: 620,
        price: 69.99,
        duration: "18 hours",
        badge: null
    }
];

// DOM Elements
const courseContainer = document.getElementById('courseContainer');
const filterButtons = document.querySelectorAll('.filter-btn');

// Display all courses initially
displayCourses(courses);

// Filter courses based on category
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
        button.classList.add('active');
        
        const filter = button.dataset.filter;
        if (filter === 'all') {
            displayCourses(courses);
        } else {
            const filteredCourses = courses.filter(course => course.category === filter);
            displayCourses(filteredCourses);
        }
    });
});

// Function to display courses
function displayCourses(coursesToDisplay) {
    courseContainer.innerHTML = '';
    
    if (coursesToDisplay.length === 0) {
        courseContainer.innerHTML = '<p class="no-courses">No courses found in this category.</p>';
        return;
    }
    
    coursesToDisplay.forEach(course => {
        const courseCard = document.createElement('div');
        courseCard.className = 'course-card';
        courseCard.setAttribute('data-category', course.category);
        
        let badgeHTML = '';
        if (course.badge) {
            badgeHTML = `<span class="course-badge">${course.badge}</span>`;
        }
        
        courseCard.innerHTML = `
            <img src="${course.image}" alt="${course.title}" class="course-img">
            ${badgeHTML}
            <div class="course-info">
                <span class="course-category">${getCategoryName(course.category)}</span>
                <h3 class="course-title">${course.title}</h3>
                <div class="course-instructor">
                    <img src="${course.instructorImg}" alt="${course.instructor}" class="instructor-img">
                    <span>${course.instructor}</span>
                </div>
                <div class="course-meta">
                    <div class="course-rating">
                        <i class="fas fa-star"></i>
                        <span>${course.rating}</span>
                        <span>(${course.students.toLocaleString()})</span>
                    </div>
                    <div class="course-duration">${course.duration}</div>
                </div>
                <div class="course-meta">
                    <div class="course-price">$${course.price}</div>
                    <button class="btn enroll-btn">Enroll Now</button>
                </div>
            </div>
        `;
        
        courseContainer.appendChild(courseCard);
    });
    
    // Add hover effect to enroll buttons
    const enrollButtons = document.querySelectorAll('.enroll-btn');
    enrollButtons.forEach(button => {
        button.addEventListener('mouseenter', () => {
            button.style.backgroundColor = 'var(--secondary-color)';
        });
        button.addEventListener('mouseleave', () => {
            button.style.backgroundColor = 'var(--primary-color)';
        });
    });
}

// Helper function to get category name
function getCategoryName(category) {
    switch(category) {
        case 'web':
            return 'Web Development';
        case 'data':
            return 'Data Science';
        case 'design':
            return 'Design';
        default:
            return category;
    }
}

// Add animation to category cards on scroll
const categoryCards = document.querySelectorAll('.category-card');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1 });

categoryCards.forEach((card, index) => {
    card.style.opacity = 0;
    card.style.transform = 'translateY(20px)';
    card.style.transition = `opacity 0.5s ease ${index * 0.1}s, transform 0.5s ease ${index * 0.1}s`;
    observer.observe(card);
});