// 1. Data Source (Mock Database)
const scholarships = [
    {
        id: 1,
        university: "Harvard University",
        location: "Cambridge, USA",
        region: "USA",
        degree: "Masters/PhD",
        amount: "Fully Funded + Stipend",
        deadline: "Dec 15, 2024",
        link: "https://college.harvard.edu/financial-aid"
    },
    {
        id: 2,
        university: "University of Oxford",
        location: "Oxford, UK",
        region: "UK",
        degree: "Undergraduate/Masters",
        amount: "£18,000 / year",
        deadline: "Jan 10, 2025",
        link: "https://www.ox.ac.uk/admissions/undergraduate/fees-and-funding"
    },
    {
        id: 3,
        university: "Stanford University",
        location: "Stanford, USA",
        region: "USA",
        degree: "Knight-Hennessy Scholars",
        amount: "Full Tuition + Living",
        deadline: "Oct 12, 2024",
        link: "https://knight-hennessy.stanford.edu/"
    },
    {
        id: 4,
        university: "ETH Zurich",
        location: "Zurich, Switzerland",
        region: "Europe",
        degree: "Masters Excellence",
        amount: "CHF 12,000 / semester",
        deadline: "Nov 30, 2024",
        link: "https://ethz.ch/students/en/studies/financial.html"
    },
    {
        id: 5,
        university: "University of Toronto",
        location: "Toronto, Canada",
        region: "North America",
        degree: "Lester B. Pearson",
        amount: "Full Ride (4 Years)",
        deadline: "Jan 15, 2025",
        link: "https://future.utoronto.ca/pearson/about/"
    },
    {
        id: 6,
        university: "University of Melbourne",
        location: "Melbourne, Australia",
        region: "Australia",
        degree: "Graduate Research",
        amount: "$110,000 Total Value",
        deadline: "Oct 31, 2024",
        link: "https://scholarships.unimelb.edu.au/"
    },
    {
        id: 7,
        university: "Tsinghua University",
        location: "Beijing, China",
        region: "Asia",
        degree: "Schwarzman Scholars",
        amount: "Fully Funded",
        deadline: "Sep 20, 2024",
        link: "https://www.schwarzmanscholars.org/"
    },
    {
        id: 8,
        university: "University of Cambridge",
        location: "Cambridge, UK",
        region: "UK",
        degree: "Gates Cambridge",
        amount: "Full Cost + Airfare",
        deadline: "Dec 05, 2024",
        link: "https://www.gatescambridge.org/"
    },
    {
        id: 9,
        university: "National University of Singapore",
        location: "Singapore",
        region: "Asia",
        degree: "ASEAN Scholarship",
        amount: "Tuition + S$5,800/yr",
        deadline: "Feb 14, 2025",
        link: "https://www.nus.edu.sg/oam/scholarships"
    },
    {
        id: 10,
        university: "Technical University of Munich",
        location: "Munich, Germany",
        region: "Europe",
        degree: "Deutschlandstipendium",
        amount: "€300 / month",
        deadline: "Jun 30, 2024",
        link: "https://www.tum.de/en/studies/fees-and-financial-aid/scholarships"
    }
];

// 2. Select DOM Elements
const grid = document.getElementById('scholarshipGrid');
const searchInput = document.getElementById('searchInput');
const filterBtns = document.querySelectorAll('.filter-btn');
const noResults = document.getElementById('noResults');

// 3. Render Function
function renderScholarships(data) {
    grid.innerHTML = ''; // Clear existing content

    if (data.length === 0) {
        noResults.classList.remove('hidden');
    } else {
        noResults.classList.add('hidden');
        
        data.forEach(item => {
            const card = document.createElement('div');
            card.classList.add('card');
            
            card.innerHTML = `
                <div class="card-header">
                    <span class="uni-badge">${item.region}</span>
                    <h3 class="card-title">${item.university}</h3>
                    <small style="color: #666"><i class="fas fa-map-marker-alt"></i> ${item.location}</small>
                </div>
                <div class="card-body">
                    <ul class="card-info">
                        <li><i class="fas fa-user-graduate"></i> <strong>Degree:</strong> ${item.degree}</li>
                        <li><i class="fas fa-money-bill-wave"></i> <strong>Value:</strong> ${item.amount}</li>
                        <li><i class="far fa-calendar-alt"></i> <strong>Deadline:</strong> ${item.deadline}</li>
                    </ul>
                </div>
                <div class="card-footer">
                    <a href="${item.link}" target="_blank" class="btn-apply">Apply Now <i class="fas fa-external-link-alt"></i></a>
                </div>
            `;
            grid.appendChild(card);
        });
    }
}

// 4. Initial Render
renderScholarships(scholarships);

// 5. Search Logic
searchInput.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const filtered = scholarships.filter(item => 
        item.university.toLowerCase().includes(searchTerm) || 
        item.location.toLowerCase().includes(searchTerm) ||
        item.degree.toLowerCase().includes(searchTerm)
    );
    renderScholarships(filtered);
});

// 6. Filter Buttons Logic
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all
        filterBtns.forEach(b => b.classList.remove('active'));
        // Add active class to clicked
        btn.classList.add('active');
        
        const filterValue = btn.getAttribute('data-filter');
        
        if (filterValue === 'all') {
            renderScholarships(scholarships);
        } else {
            const filtered = scholarships.filter(item => item.region === filterValue);
            renderScholarships(filtered);
        }
    });
});