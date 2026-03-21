const galleryData = [
    { img: "Images/gallery-image-01.jpg", title: "Air Compressor" },
    { img: "Images/gallery-image-02.jpg", title: "Industrial Equipment" },
    { img: "Images/gallery-image-03.jpg", title: "Rental Machine" },
    { img: "Images/gallery-image-04.jpg", title: "Compressor Service" },
    { img: "Images/gallery-image-05.jpg", title: "Air Compressor Setup" },
    { img: "Images/gallery-image-06.jpg", title: "Industrial Compressor" },
    { img: "Images/gallery-image-07.jpg", title: "Compressor Rental" },
    { img: "Images/gallery-image-08.jpg", title: "Machine Installation" },
    { img: "Images/gallery-image-09.jpg", title: "Air System" },
    { img: "Images/gallery-image-10.jpg", title: "Heavy Equipment" },
    { img: "Images/gallery-image-11.jpg", title: "Industrial Work" },
    { img: "Images/gallery-image-12.jpg", title: "Machine Operation" },
    { img: "Images/gallery-image-13.jpg", title: "Air Compressor Unit" },
    { img: "Images/gallery-image-14.jpg", title: "Compressor Work" },
    { img: "Images/gallery-image-15.jpg", title: "Equipment Service" },
    { img: "Images/gallery-image-16.jpg", title: "Rental Equipment" },
    { img: "Images/gallery-image-17.jpg", title: "Industrial Setup" },
    { img: "Images/gallery-image-18.jpg", title: "Compressor Machine" },
    { img: "Images/gallery-image-19.jpg", title: "Air Compressor Work" },
    { img: "Images/gallery-image-20.jpg", title: "Heavy Machine" },
    { img: "Images/gallery-image-21.jpg", title: "Compressor Project" },
    { img: "Images/gallery-image-22.jpg", title: "Industrial Unit" },
    { img: "Images/gallery-image-23.jpg", title: "Air System Work" },
    { img: "Images/gallery-image-24.jpg", title: "Compressor Installation" },
    { img: "Images/gallery-image-25.jpg", title: "Equipment Rental" },
    { img: "Images/gallery-image-26.jpg", title: "Machine Service" },
    { img: "Images/gallery-image-27.jpg", title: "Air Compressor Setup" },
    { img: "Images/gallery-image-28.jpg", title: "Industrial Equipment" },
    { img: "Images/gallery-image-29.jpg", title: "Machine Rental" },
    { img: "Images/gallery-image-30.jpg", title: "Compressor System" },
    { img: "Images/gallery-image-31.jpg", title: "Industrial Work" },
    { img: "Images/gallery-image-32.jpg", title: "Equipment Setup" },
    { img: "Images/gallery-image-33.jpg", title: "Compressor Machine" },
    { img: "Images/gallery-image-34.jpg", title: "Air Compressor" },
    { img: "Images/gallery-image-35.jpg", title: "Industrial Project" },
    { img: "Images/gallery-image-36.jpg", title: "Machine Installation" }
];

const galleryRow = document.getElementById("galleryRow");
const pagination = document.getElementById("galleryPagination");

const itemsPerPage = 9;
let currentPage = 1;

function displayGallery(page) {

    galleryRow.innerHTML = "";

    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;

    const paginatedItems = galleryData.slice(start, end);

    paginatedItems.forEach(item => {

        galleryRow.innerHTML += `
<div class="col-lg-4 col-md-6 mb-4">
<div class="gallery-card">

<img src="${item.img}" alt="${item.title}">

<div class="gallery-overlay">
<h5>${item.title}</h5>
</div>

</div>
</div>
`;

    });
}

function setupPagination() {

    const pageCount = Math.ceil(galleryData.length / itemsPerPage);

    pagination.innerHTML = "";

    for (let i = 1; i <= pageCount; i++) {

        pagination.innerHTML += `
<li class="page-item">
<a class="page-link" href="#" onclick="changePage(${i})">${i}</a>
</li>
`;

    }

}

function changePage(page) {
    currentPage = page;
    displayGallery(currentPage);
}

displayGallery(currentPage);
setupPagination();