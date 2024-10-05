// Dữ liệu phim
// Dữ liệu phim
const movies = [
    {
        id: 1,
        title: "How To Create Best UX Design With Adobe XD",
        category: "Mobile",
        date: "28 Sep 2024",
        description: "The sleek mobile phone glowed softly in the dark, its screen reflecting a world at your fingertips.",
        image: "img/post-1.jpg",
        profile: {
            name: "Nguyen Van A",
            image: "img/profile-1.jpg"
        }
    },
    {
        id: 2,
        title: "How To Create Best UX Design With Adobe XD",
        category: "Tech",
        date: "28 Sep 2024",
        description: "The sleek mobile phone glowed softly in the dark, its screen reflecting a world at your fingertips.",
        image: "img/post-2.jpg",
        profile: {
            name: "Nguyen Van A",
            image: "img/profile-2.jpg"
        }
    },
    {
        id: 3,
        title: "How To Create Best UX Design With Adobe XD",
        category: "Design",
        date: "28 Sep 2024",
        description: "The sleek mobile phone glowed softly in the dark, its screen reflecting a world at your fingertips.",
        image: "img/post-3.jpg",
        profile: {
            name: "Nguyen Van A",
            image: "img/profile-3.jpg"
        }
    },
    {
        id: 4,
        title: "How To Create Best UX Design With Adobe XD",
        category: "Mobile",
        date: "28 Sep 2024",
        description: "The sleek mobile phone glowed softly in the dark, its screen reflecting a world at your fingertips.",
        image: "img/post-4.jpg",
        profile: {
            name: "Nguyen Van A",
            image: "img/profile-1.jpg"
        }
    },
    {
        id: 5,
        title: "How To Create Best UX Design With Adobe XD",
        category: "Tech",
        date: "28 Sep 2024",
        description: "The sleek mobile phone glowed softly in the dark, its screen reflecting a world at your fingertips.",
        image: "img/post-5.jpg",
        profile: {
            name: "Nguyen Van A",
            image: "img/profile-2.jpg"
        }
    },
    {
        id: 6,
        title: "How To Create Best UX Design With Adobe XD",
        category: "Design",
        date: "28 Sep 2024",
        description: "The sleek mobile phone glowed softly in the dark, its screen reflecting a world at your fingertips.",
        image: "img/post-6.jpg",
        profile: {
            name: "Nguyen Van A",
            image: "img/profile-3.jpg"
        }
    },
    {
        id: 7,
        title: "How To Create Best UX Design With Adobe XD",
        category: "Mobile",
        date: "28 Sep 2024",
        description: "The sleek mobile phone glowed softly in the dark, its screen reflecting a world at your fingertips.",
        image: "img/post-7.jpg",
        profile: {
            name: "Nguyen Van A",
            image: "img/profile-1.jpg"
        }
    },
    {
        id: 8,
        title: "How To Create Best UX Design With Adobe XD",
        category: "Tech",
        date: "28 Sep 2024",
        description: "The sleek mobile phone glowed softly in the dark, its screen reflecting a world at your fingertips.",
        image: "img/post-8.jpg",
        profile: {
            name: "Nguyen Van A",
            image: "img/profile-2.jpg"
        }
    },
    {
        id: 9,
        title: "How To Create Best UX Design With Adobe XD",
        category: "Design",
        date: "28 Sep 2024",
        description: "The sleek mobile phone glowed softly in the dark, its screen reflecting a world at your fingertips.",
        image: "img/post-9.jpg",
        profile: {
            name: "Nguyen Van A",
            image: "img/profile-3.jpg"
        }
    }
];


// Hàm để hiển thị danh sách phim
function displayMovies() {
    const postContainer = document.getElementById("post-container");
    movies.forEach(movie => {
        const postBox = document.createElement("div");
        postBox.classList.add("post-box", movie.category.toLowerCase()); // Thêm lớp thể loại

        postBox.innerHTML = `
            <img src="${movie.image}" alt="${movie.title}" class="post-img">
            <h2 class="category">${movie.category}</h2>
            <a href="post-page.html?id=${movie.id}" class="post-title">${movie.title}</a>
            <span class="post-date">${movie.date}</span>
            <p class="post-decription">${movie.description}</p>
            <div class="profile">
                <img src="${movie.profile.image}" alt="${movie.profile.name}" class="profile-img">
                <span class="profile-name">${movie.profile.name}</span>
            </div>
        `;

        postContainer.appendChild(postBox);
    });
}

// Gọi hàm để hiển thị phim khi trang được tải
window.onload = displayMovies;

// Chức năng lọc bài viết
$(document).ready(function() {
    $('.filter-item').click(function() {
        const value = $(this).attr('data-filter');
        if (value === 'all') {
            $('.post-box').show(1000);
        } else {
            $('.post-box').not('.' + value).hide(1000);
            $('.post-box').filter('.' + value).show(1000);
        }
        
        // Cập nhật lớp bộ lọc đang hoạt động
        $('.filter-item').removeClass('active-filter');
        $(this).addClass('active-filter');
    });
});

// Thay đổi nền tiêu đề khi cuộn
let header = document.querySelector("header");

window.addEventListener("scroll", () => {
    header.classList.toggle("shadow", window.scrollY > 0);
});




