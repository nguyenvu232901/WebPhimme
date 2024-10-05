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


// Hàm để hiển thị chi tiết phim
function displayMovieDetail() {
    const movieId = new URLSearchParams(window.location.search).get('id');
    const movie = movies.find(m => m.id == movieId);
    
    if (movie) {
        const movieDetail = document.getElementById("movie-detail");
        movieDetail.innerHTML = `
            <h2>${movie.title}</h2>
            <img src="${movie.image}" alt="${movie.title}" class="post-img">
            <h3>Category: ${movie.category}</h3>
            <span class="post-date">${movie.date}</span>
            <p>${movie.description}</p>
            <div class="profile">
                <img src="${movie.profile.image}" alt="${movie.profile.name}" class="profile-img">
                <span class="profile-name">${movie.profile.name}</span>
            </div>
        `;
    } else {
        document.getElementById("movie-detail").innerHTML = `<p>Movie not found.</p>`;
    }
}

// Gọi hàm để hiển thị chi tiết phim khi trang được tải
window.onload = displayMovieDetail;
