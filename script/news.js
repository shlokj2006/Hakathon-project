// Sample data for trending and recent news
const trendingNews = [
    {
        title: "Innovative Water Management Solutions for 2023",
        description: "Explore the latest technologies in water management that are making waves in 2023.",
        date: "2023-10-01"
    },
    {
        title: "How Smart Sensors are Revolutionizing Water Conservation",
        description: "Learn how smart sensors are helping cities conserve water and reduce waste.",
        date: "2023-09-28"
    }
];

const recentNews = [
    {
        title: "New Regulations for Water Quality Standards",
        description: "The government has announced new regulations to improve water quality across the nation.",
        date: "2023-10-05"
    },
    {
        title: "Community Initiatives for Sustainable Water Use",
        description: "Local communities are coming together to promote sustainable water usage practices.",
        date: "2023-10-03"
    },
    {
        title: "The Impact of Climate Change on Water Resources",
        description: "A deep dive into how climate change is affecting global water resources.",
        date: "2023-09-30"
    }
];

// Function to display news articles
function displayNews() {
    const trendingNewsContainer = document.getElementById('trendingNewsContainer');
    const recentNewsContainer = document.getElementById('recentNewsContainer');

    // Display trending news
    trendingNews.forEach(news => {
        const newsItem = document.createElement('div');
        newsItem.className = 'news-item';
        newsItem.innerHTML = `<h3>${news.title}</h3><p>${news.description}</p><small>${news.date}</small>`;
        trendingNewsContainer.appendChild(newsItem);
    });

    // Display recent news
    recentNews.forEach(news => {
        const newsItem = document.createElement('div');
        newsItem.className = 'news-item';
        newsItem.innerHTML = `<h3>${news.title}</h3><p>${news.description}</p><small>${news.date}</small>`;
        recentNewsContainer.appendChild(newsItem);
    });
}

// Call the function to display news on page load
window.onload = displayNews;