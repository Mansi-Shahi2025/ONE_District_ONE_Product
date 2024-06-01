// script.js
const producersContainer = document.getElementById("producers-container");

function getRandomStarRating() {
    return Math.floor(Math.random() * 5) + 1;
}

const randomUserNames = ["User 1", "User 2", "User 3", "User 4", "User 5"];
const randomProfileImages = [
    "user1.jpg",
    "user2.jpg",
    "user3.jpg",
    "user4.jpg",
    "user5.jpg",
];

function getRandomUser() {
    const randomIndex = Math.floor(Math.random() * randomUserNames.length);
    const name = randomUserNames[randomIndex];
    const image = randomProfileImages[randomIndex];
    const rating = getRandomStarRating();

    return { name, image, rating };
}

function createProducerProfile(user) {
    const profileDiv = document.createElement("div");
    profileDiv.classList.add("profile");

    const img = document.createElement("img");
    img.src = user.image;
    img.alt = user.name;

    const nameHeader = document.createElement("h2");
    nameHeader.textContent = user.name;

    const ratingDiv = document.createElement("div");
    ratingDiv.classList.add("rating");
    ratingDiv.textContent = "⭐".repeat(user.rating);

    profileDiv.appendChild(img);
    profileDiv.appendChild(nameHeader);
    profileDiv.appendChild(ratingDiv);

    return profileDiv;
}

function initialize() {
    for (let i = 0; i < 5; i++) {
        const randomUser = getRandomUser();
        const userProfile = createProducerProfile(randomUser);
        producersContainer.appendChild(userProfile);
    }
}

initialize();
