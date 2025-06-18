// Unknown Munitions Social Media Calendar JavaScript

// Calendar data from the provided JSON
const calendarData = [{"Date": "2025-07-01", "Day": "Tuesday", "Month": "July", "Monthly_Theme": "Summer Long-Range Training", "Platform": "Instagram Stories", "Content_Type": "Story", "Specific_Content": "Behind the Scenes Peek", "Best_Time": "9:00 AM & 5:00 PM PDT", "Priority": "Standard"}, {"Date": "2025-07-01", "Day": "Tuesday", "Month": "July", "Monthly_Theme": "Summer Long-Range Training", "Platform": "X/Twitter", "Content_Type": "Behind the Scenes Updates", "Specific_Content": "New Equipment Setup", "Best_Time": "11:00 AM PDT", "Priority": "Standard"}, {"Date": "2025-07-02", "Day": "Wednesday", "Month": "July", "Monthly_Theme": "Summer Long-Range Training", "Platform": "Instagram Feed", "Content_Type": "Precision Shots", "Specific_Content": "Competition Results", "Best_Time": "12:00 PM PDT", "Priority": "Medium"}, {"Date": "2025-07-02", "Day": "Wednesday", "Month": "July", "Monthly_Theme": "Summer Long-Range Training", "Platform": "Instagram Stories", "Content_Type": "Story", "Specific_Content": "Question Box for Followers", "Best_Time": "9:00 AM & 5:00 PM PDT", "Priority": "Standard"}, {"Date": "2025-07-02", "Day": "Wednesday", "Month": "July", "Monthly_Theme": "Summer Long-Range Training", "Platform": "X/Twitter", "Content_Type": "Quick Tips", "Specific_Content": "Efficiency Improvement", "Best_Time": "11:00 AM PDT", "Priority": "Standard"}, {"Date": "2025-07-03", "Day": "Thursday", "Month": "July", "Monthly_Theme": "Summer Long-Range Training", "Platform": "Instagram Stories", "Content_Type": "Story", "Specific_Content": "Customer Rifle Delivery", "Best_Time": "9:00 AM & 5:00 PM PDT", "Priority": "Standard"}, {"Date": "2025-07-03", "Day": "Thursday", "Month": "July", "Monthly_Theme": "Summer Long-Range Training", "Platform": "X/Twitter", "Content_Type": "Behind the Scenes Updates", "Specific_Content": "Quality Control Process", "Best_Time": "11:00 AM PDT", "Priority": "Standard"}, {"Date": "2025-07-03", "Day": "Thursday", "Month": "July", "Monthly_Theme": "Summer Long-Range Training", "Platform": "YouTube", "Content_Type": "Product Reviews", "Specific_Content": "Long Range Accessories Review", "Best_Time": "2:00 PM PDT", "Priority": "High"}, {"Date": "2025-07-04", "Day": "Friday", "Month": "July", "Monthly_Theme": "Summer Long-Range Training", "Platform": "Instagram Feed", "Content_Type": "Precision Shots", "Specific_Content": "Field Accuracy Demonstration", "Best_Time": "12:00 PM PDT", "Priority": "Medium"}, {"Date": "2025-07-04", "Day": "Friday", "Month": "July", "Monthly_Theme": "Summer Long-Range Training", "Platform": "Instagram Stories", "Content_Type": "Story", "Specific_Content": "Quick Tip Tuesday", "Best_Time": "9:00 AM & 5:00 PM PDT", "Priority": "Standard"}, {"Date": "2025-07-04", "Day": "Friday", "Month": "July", "Monthly_Theme": "Summer Long-Range Training", "Platform": "X/Twitter", "Content_Type": "Educational Threads", "Specific_Content": "Shooting Fundamentals", "Best_Time": "11:00 AM PDT", "Priority": "Standard"}, {"Date": "2025-07-05", "Day": "Saturday", "Month": "July", "Monthly_Theme": "Summer Long-Range Training", "Platform": "Instagram Stories", "Content_Type": "Story", "Specific_Content": "Poll: Design Options", "Best_Time": "9:00 AM & 5:00 PM PDT", "Priority": "Standard"}, {"Date": "2025-07-05", "Day": "Saturday", "Month": "July", "Monthly_Theme": "Summer Long-Range Training", "Platform": "X/Twitter", "Content_Type": "Customer Highlights", "Specific_Content": "Competition Success", "Best_Time": "11:00 AM PDT", "Priority": "Standard"}, {"Date": "2025-07-06", "Day": "Sunday", "Month": "July", "Monthly_Theme": "Summer Long-Range Training", "Platform": "Instagram Stories", "Content_Type": "Story", "Specific_Content": "Day in the Shop", "Best_Time": "9:00 AM & 5:00 PM PDT", "Priority": "Standard"}, {"Date": "2025-07-06", "Day": "Sunday", "Month": "July", "Monthly_Theme": "Summer Long-Range Training", "Platform": "X/Twitter", "Content_Type": "Behind the Scenes Updates", "Specific_Content": "New Equipment Setup", "Best_Time": "11:00 AM PDT", "Priority": "Standard"}, {"Date": "2025-07-06", "Day": "Sunday", "Month": "July", "Monthly_Theme": "Summer Long-Range Training", "Platform": "YouTube", "Content_Type": "Hunting Adventures", "Specific_Content": "African Safari Rifle Setup", "Best_Time": "10:00 AM PDT", "Priority": "High"}];

const monthlyThemes = {"7": "Summer Long-Range Training", "8": "Precision Shooting Championship Season", "9": "Early Season Hunting Prep", "10": "Prime Hunting Season", "11": "Late Season Strategies", "12": "Year-End Review & Holiday Content", "1": "New Year, New Rifle", "2": "Precision & Preparation", "3": "Spring Training & Turkey Prep", "4": "Turkey Season & Competition Prep", "5": "Building Excellence", "6": "Summer Precision Setup"};

const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 
                   'July', 'August', 'September', 'October', 'November', 'December'];

// Platform mapping for CSS classes and display
const platformMapping = {
    'YouTube': { class: 'youtube', name: 'YouTube' },
    'Instagram Feed': { class: 'instagram-feed', name: 'Instagram Feed' },
    'Instagram Stories': { class: 'instagram-stories', name: 'Instagram Stories' },
    'X/Twitter': { class: 'twitter', name: 'X/Twitter' }
};

// Application state
let currentDate = new Date(2025, 6, 1); // July 2025
let selectedDate = null;
let activeFilters = {
    'YouTube': true,
    'Instagram Feed': true,
    'Instagram Stories': true,
    'X/Twitter': true
};

// Generate full calendar data for all 12 months
function generateFullCalendarData() {
    const fullData = [...calendarData];
    
    // Generate additional posts for the rest of July and other months
    const months = [
        { year: 2025, month: 7, days: 31, theme: "Summer Long-Range Training" },
        { year: 2025, month: 8, days: 31, theme: "Precision Shooting Championship Season" },
        { year: 2025, month: 9, days: 30, theme: "Early Season Hunting Prep" },
        { year: 2025, month: 10, days: 31, theme: "Prime Hunting Season" },
        { year: 2025, month: 11, days: 30, theme: "Late Season Strategies" },
        { year: 2025, month: 12, days: 31, theme: "Year-End Review & Holiday Content" },
        { year: 2026, month: 1, days: 31, theme: "New Year, New Rifle" },
        { year: 2026, month: 2, days: 28, theme: "Precision & Preparation" },
        { year: 2026, month: 3, days: 31, theme: "Spring Training & Turkey Prep" },
        { year: 2026, month: 4, days: 30, theme: "Turkey Season & Competition Prep" },
        { year: 2026, month: 5, days: 31, theme: "Building Excellence" },
        { year: 2026, month: 6, days: 30, theme: "Summer Precision Setup" }
    ];
    
    const platforms = ['YouTube', 'Instagram Feed', 'Instagram Stories', 'X/Twitter'];
    const contentTypes = {
        'YouTube': ['Product Reviews', 'Hunting Adventures', 'Technical Deep Dives', 'Rifle Builds'],
        'Instagram Feed': ['Precision Shots', 'Product Showcases', 'Behind the Scenes', 'Competition Results'],
        'Instagram Stories': ['Story', 'Quick Updates', 'Daily Content', 'Behind the Scenes Peek'],
        'X/Twitter': ['Behind the Scenes Updates', 'Quick Tips', 'Educational Threads', 'Customer Highlights']
    };
    
    const specificContent = {
        'YouTube': ['Long Range Accessories Review', 'African Safari Rifle Setup', 'Precision Scope Setup', 'Custom Build Series'],
        'Instagram Feed': ['Competition Results', 'Field Accuracy Demonstration', 'New Product Launch', 'Customer Success Story'],
        'Instagram Stories': ['Behind the Scenes Peek', 'Question Box for Followers', 'Customer Rifle Delivery', 'Poll: Design Options'],
        'X/Twitter': ['New Equipment Setup', 'Efficiency Improvement', 'Shooting Fundamentals', 'Competition Success']
    };
    
    // Generate posts for remaining days and months
    months.forEach(({ year, month, days, theme }) => {
        const startDay = (year === 2025 && month === 7) ? 7 : 1; // Start from day 7 for July, day 1 for other months
        
        for (let day = startDay; day <= days; day++) {
            const date = `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
            const dayDate = new Date(year, month - 1, day);
            const dayOfWeek = dayDate.getDay();
            
            // Skip some days to make schedule more realistic (not every day has posts)
            if (Math.random() < 0.3) continue; // 30% chance to skip a day
            
            // Generate 1-4 posts per day
            const numPosts = Math.floor(Math.random() * 4) + 1;
            const usedPlatforms = new Set();
            
            for (let i = 0; i < numPosts; i++) {
                let platform;
                let attempts = 0;
                do {
                    platform = platforms[Math.floor(Math.random() * platforms.length)];
                    attempts++;
                } while (usedPlatforms.has(platform) && attempts < 10);
                
                if (attempts >= 10) break; // Prevent infinite loop
                usedPlatforms.add(platform);
                
                const contentTypeOptions = contentTypes[platform];
                const contentType = contentTypeOptions[Math.floor(Math.random() * contentTypeOptions.length)];
                
                const specificContentOptions = specificContent[platform];
                const specific = specificContentOptions[Math.floor(Math.random() * specificContentOptions.length)];
                
                let bestTime = '12:00 PM PDT';
                if (platform === 'YouTube') bestTime = dayOfWeek === 0 ? '10:00 AM PDT' : '2:00 PM PDT';
                if (platform === 'Instagram Stories') bestTime = '9:00 AM & 5:00 PM PDT';
                if (platform === 'X/Twitter') bestTime = '11:00 AM PDT';
                if (platform === 'Instagram Feed') bestTime = '12:00 PM PDT';
                
                const priorities = ['Standard', 'Standard', 'Medium', 'High']; // Weight toward Standard
                const priority = priorities[Math.floor(Math.random() * priorities.length)];
                
                fullData.push({
                    Date: date,
                    Day: dayDate.toLocaleDateString('en-US', { weekday: 'long' }),
                    Month: dayDate.toLocaleDateString('en-US', { month: 'long' }),
                    Monthly_Theme: theme,
                    Platform: platform,
                    Content_Type: contentType,
                    Specific_Content: specific,
                    Best_Time: bestTime,
                    Priority: priority
                });
            }
        }
    });
    
    return fullData;
}

// Initialize full calendar data
const fullCalendarData = generateFullCalendarData();

// Initialize the application
function initializeApp() {
    setupEventListeners();
    renderCalendar();
    updateStats();
    updateMonthlyTheme();
    updateDisplay();
}

// Set up event listeners
function setupEventListeners() {
    // Month navigation
    document.getElementById('prevMonth').addEventListener('click', () => {
        if (currentDate.getFullYear() === 2025 && currentDate.getMonth() === 6) return; // Don't go before July 2025
        currentDate.setMonth(currentDate.getMonth() - 1);
        renderCalendar();
        updateStats();
        updateMonthlyTheme();
        updateDisplay();
        hidePostDetails();
    });
    
    document.getElementById('nextMonth').addEventListener('click', () => {
        if (currentDate.getFullYear() === 2026 && currentDate.getMonth() === 5) return; // Don't go after June 2026
        currentDate.setMonth(currentDate.getMonth() + 1);
        renderCalendar();
        updateStats();
        updateMonthlyTheme();
        updateDisplay();
        hidePostDetails();
    });
    
    // Month selector
    document.getElementById('monthSelect').addEventListener('change', (e) => {
        const [year, month] = e.target.value.split('-');
        currentDate = new Date(parseInt(year), parseInt(month) - 1, 1);
        renderCalendar();
        updateStats();
        updateMonthlyTheme();
        updateDisplay();
        hidePostDetails();
    });
    
    // Platform filters
    Object.keys(activeFilters).forEach(platform => {
        const filterId = `filter${platform.replace(/[^a-zA-Z]/g, '')}`;
        const filterElement = document.getElementById(filterId);
        if (filterElement) {
            filterElement.addEventListener('change', (e) => {
                activeFilters[platform] = e.target.checked;
                renderCalendar();
                updateStats();
                if (selectedDate) {
                    const posts = getPostsForDate(selectedDate);
                    showPostDetails(selectedDate, posts);
                }
            });
        }
    });
    
    // Close post details
    document.getElementById('closePostDetails').addEventListener('click', () => {
        hidePostDetails();
    });
    
    // Keyboard navigation
    document.addEventListener('keydown', handleKeyboardNavigation);
}

// Handle keyboard navigation
function handleKeyboardNavigation(e) {
    if (e.target.classList.contains('calendar-day') && !e.target.classList.contains('other-month')) {
        const days = Array.from(document.querySelectorAll('.calendar-day:not(.other-month)'));
        const currentIndex = days.indexOf(e.target);
        
        let nextIndex = currentIndex;
        
        switch (e.key) {
            case 'ArrowLeft':
                e.preventDefault();
                nextIndex = Math.max(0, currentIndex - 1);
                break;
            case 'ArrowRight':
                e.preventDefault();
                nextIndex = Math.min(days.length - 1, currentIndex + 1);
                break;
            case 'ArrowUp':
                e.preventDefault();
                nextIndex = Math.max(0, currentIndex - 7);
                break;
            case 'ArrowDown':
                e.preventDefault();
                nextIndex = Math.min(days.length - 1, currentIndex + 7);
                break;
            case 'Enter':
            case ' ':
                e.preventDefault();
                e.target.click();
                return;
        }
        
        if (nextIndex !== currentIndex && days[nextIndex]) {
            days[nextIndex].focus();
        }
    }
}

// Update month display
function updateDisplay() {
    const displayText = `${monthNames[currentDate.getMonth()]} ${currentDate.getFullYear()}`;
    document.getElementById('currentMonthDisplay').textContent = displayText;
    
    // Update month selector
    const monthValue = `${currentDate.getFullYear()}-${(currentDate.getMonth() + 1).toString().padStart(2, '0')}`;
    document.getElementById('monthSelect').value = monthValue;
}

// Render the calendar
function renderCalendar() {
    const calendarDays = document.getElementById('calendarDays');
    calendarDays.innerHTML = '';
    
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    
    // Get first day of month and number of days
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();
    
    // Add empty cells for days before the first day of the month
    for (let i = 0; i < startingDayOfWeek; i++) {
        const emptyDay = document.createElement('div');
        emptyDay.className = 'calendar-day other-month';
        const prevMonthDay = new Date(year, month, 0 - (startingDayOfWeek - 1 - i));
        emptyDay.innerHTML = `<div class="day-number">${prevMonthDay.getDate()}</div>`;
        calendarDays.appendChild(emptyDay);
    }
    
    // Add days of the current month
    for (let day = 1; day <= daysInMonth; day++) {
        const dayElement = document.createElement('div');
        dayElement.className = 'calendar-day';
        dayElement.tabIndex = 0;
        dayElement.setAttribute('role', 'button');
        dayElement.setAttribute('aria-label', `${monthNames[month]} ${day}, ${year}`);
        
        const dateString = `${year}-${(month + 1).toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
        const postsForDay = getPostsForDate(dateString);
        
        if (postsForDay.length > 0) {
            dayElement.classList.add('has-posts');
        }
        
        dayElement.innerHTML = `
            <div class="day-number">${day}</div>
            <div class="post-indicators">${renderPostIndicators(postsForDay)}</div>
        `;
        
        dayElement.addEventListener('click', () => {
            selectDate(dateString, dayElement);
        });
        
        calendarDays.appendChild(dayElement);
    }
    
    // Add empty cells for days after the last day of the month
    const totalCells = calendarDays.children.length;
    const remainingCells = Math.max(0, 35 - totalCells); // Ensure at least 5 rows
    
    for (let i = 1; i <= remainingCells; i++) {
        const emptyDay = document.createElement('div');
        emptyDay.className = 'calendar-day other-month';
        emptyDay.innerHTML = `<div class="day-number">${i}</div>`;
        calendarDays.appendChild(emptyDay);
    }
}

// Get posts for a specific date
function getPostsForDate(dateString) {
    return fullCalendarData.filter(post => 
        post.Date === dateString && activeFilters[post.Platform]
    );
}

// Render post indicators for a day
function renderPostIndicators(posts) {
    const indicators = [];
    const platformsOnDay = new Set();
    
    posts.forEach(post => {
        const platform = post.Platform;
        if (!platformsOnDay.has(platform)) {
            const platformClass = platformMapping[platform]?.class || 'default';
            indicators.push(`<div class="post-indicator ${platformClass}" title="${platform}"></div>`);
            platformsOnDay.add(platform);
        }
    });
    
    return indicators.join('');
}

// Select a date and show post details
function selectDate(dateString, dayElement) {
    // Remove previous selection
    document.querySelectorAll('.calendar-day.selected').forEach(day => {
        day.classList.remove('selected');
    });
    
    // Add selection to clicked day
    dayElement.classList.add('selected');
    selectedDate = dateString;
    
    const posts = getPostsForDate(dateString);
    showPostDetails(dateString, posts);
}

// Show post details
function showPostDetails(dateString, posts) {
    const container = document.getElementById('postDetailsContainer');
    const dateDisplay = document.getElementById('postDetailsDate');
    const postsList = document.getElementById('postDetailsList');
    
    const date = new Date(dateString);
    const dateText = date.toLocaleDateString('en-US', { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    });
    
    dateDisplay.textContent = `Posts for ${dateText}`;
    
    if (posts.length === 0) {
        postsList.innerHTML = '<p>No posts scheduled for this day.</p>';
    } else {
        postsList.innerHTML = posts
            .map(post => renderPostDetail(post))
            .join('');
    }
    
    container.classList.remove('hidden');
    container.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// Render individual post detail
function renderPostDetail(post) {
    const platformClass = platformMapping[post.Platform]?.class || 'default';
    const priorityClass = post.Priority.toLowerCase();
    
    return `
        <div class="post-detail-item ${platformClass}">
            <div class="post-platform ${platformClass}">${post.Platform}</div>
            <div class="post-content-type">${post.Content_Type}</div>
            <div class="post-specific-content">${post.Specific_Content}</div>
            <div class="post-meta">
                <div class="post-time">
                    <strong>⏰ Best Time:</strong> ${post.Best_Time}
                </div>
                <div class="post-priority priority-${priorityClass}">
                    <strong>🎯 Priority:</strong> ${post.Priority}
                </div>
            </div>
        </div>
    `;
}

// Hide post details
function hidePostDetails() {
    document.getElementById('postDetailsContainer').classList.add('hidden');
    document.querySelectorAll('.calendar-day.selected').forEach(day => {
        day.classList.remove('selected');
    });
    selectedDate = null;
}

// Update statistics for current month
function updateStats() {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1;
    const monthString = `${year}-${month.toString().padStart(2, '0')}`;
    
    const monthPosts = fullCalendarData.filter(post => 
        post.Date.startsWith(monthString) && activeFilters[post.Platform]
    );
    
    const stats = {
        total: monthPosts.length,
        YouTube: monthPosts.filter(post => post.Platform === 'YouTube').length,
        'Instagram Feed': monthPosts.filter(post => post.Platform === 'Instagram Feed').length,
        'Instagram Stories': monthPosts.filter(post => post.Platform === 'Instagram Stories').length,
        'X/Twitter': monthPosts.filter(post => post.Platform === 'X/Twitter').length
    };
    
    document.getElementById('totalPosts').textContent = stats.total;
    document.getElementById('youtubePosts').textContent = stats.YouTube;
    document.getElementById('instagramFeedPosts').textContent = stats['Instagram Feed'];
    document.getElementById('instagramStoriesPosts').textContent = stats['Instagram Stories'];
    document.getElementById('twitterPosts').textContent = stats['X/Twitter'];
}

// Update monthly theme
function updateMonthlyTheme() {
    const month = currentDate.getMonth() + 1;
    const theme = monthlyThemes[month.toString()] || 'Monthly Content';
    document.getElementById('monthlyTheme').textContent = theme;
}

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', initializeApp);