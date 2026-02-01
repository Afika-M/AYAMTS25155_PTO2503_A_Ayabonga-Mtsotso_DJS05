
# Podcast App

A responsive React application for browsing and viewing podcasts. Users can search, filter, sort, and paginate podcast previews, and navigate to a dedicated show detail page for each podcast. The app demonstrates dynamic routing, state management, and asynchronous data fetching.

#### 📝 Project Overview

In this project, you will build a podcast show detail page as part of a larger browsing app. Selecting a podcast from the homepage navigates to a unique detail page that displays all available information about that show.

#### Key features include:

Dynamic routing for each show

Data fetching by show ID

Loading, error, and empty states handling

Season navigation with episode lists

State preservation (filters, search, pagination) when navigating back

This project demonstrates your ability to handle asynchronous API calls, manage state across routes, and build a modular, maintainable React codebase.

#### 🚀 Core Objectives

Implement dynamic routing for unique show pages.

Pass show ID via route parameters and fetch specific show data.

Gracefully handle loading, error, and empty states.

Display detailed show information: title, image, description, genres, last updated date.

Preserve filters and search state when returning to the homepage.

Create season navigation to expand/collapse seasons and browse episodes efficiently.

Display episode info: number, title, image, shortened description.

Maintain high code quality with JSDoc and consistent formatting.

#### 🌍 API Endpoints
URL	Description
https://podcast-api.netlify.app	Returns an array of podcast previews
https://podcast-api.netlify.app/genre/<ID>	Returns a genre object
https://podcast-api.netlify.app/id/<ID>	Returns a show object with embedded seasons and episodes

Genre Mapping (ID → Title)

ID	Title
1	Personal Growth
2	Investigative Journalism
3	History
4	Comedy
5	Entertainment
6	Business
7	Fiction
8	News
9	Kids and Family

#### 🎯 Features
Homepage / Listing Page

Podcast previews with clickable cards navigating to detail pages.

Search podcasts by title.

Filter by genre using dropdown.

Sort by newest, oldest, or alphabetical order.

Pagination adapts to screen size.

Dynamic card count based on device viewport.

Show Detail Page

Unique URL per show using dynamic routing (/podcast/:id).

Fetch and display podcast data: title, description, large image, genres, last updated.

Loading spinner and error messages.

Season selector dropdown to switch between seasons.

Episodes display number, title, season image, and shortened description.

State Preservation

Filters, search queries, and page number persist when returning to homepage.

Responsive Design

Smooth UI adjustments across mobile, tablet, and desktop screens.

#### 🧱 Tech Stack

React (functional components + hooks)

Context API for global state management

CSS Modules for modular styling

JavaScript (ES6+)

JSDoc for documentation

#### 📁 Folder Structure
src/
├── api/
│   └── fetchData.js          # Fetch all podcasts and single show by ID
├── components/
│   ├── Filters/
│   │   ├── SearchBar.jsx
│   │   ├── GenreFilter.jsx
│   │   └── SortSelect.jsx
│   ├── Podcasts/
│   │   ├── PodcastCard.jsx
│   │   ├── PodcastGrid.jsx
│   │   └── PodcastDetails.jsx
│   ├── UI/
│   │   ├── Loading.jsx
│   │   ├── Error.jsx
│   │   └── Pagination.jsx
│   └── Header.jsx
├── context/
│   └── PodcastContext.js    # Global state for filters, search, pagination
├── utils/
│   └── formatDate.js        # ISO date → human-readable format
├── data.js                  # Static genre mapping
├── App.jsx
├── main.jsx
├── index.css
└── App.css

#### 🧠 Global State (PodcastContext)

search / setSearch – current search term

genre / setGenre – selected genre filter

sortKey / setSortKey – sorting method

page / setPage, pageSize, totalPages – pagination info

podcasts – filtered, sorted, paginated list

allPodcastsCount – total podcasts after filters

genres – static genre metadata

#### 🛠️ Setup Instructions

Clone the repository

git clone https://github.com/Afika-M/AYAMTS25155_PTO2503_A_Ayabonga-Mtsotso_DJS03.git


Navigate to project folder

cd podcast-app


Install dependencies

npm install


Start development server

npm run dev


Open the app in your browser

http://localhost:5173

#### 🖱️ How to Use the App

Search & Filter

Type a keyword in the search bar to filter by title.

Select a genre from the dropdown to filter shows.

Sort & Pagination

Choose sort order (newest, oldest, alphabetical).

Navigate through pages using pagination controls.

View Show Details

Click a podcast card to open its detail page.

Observe loading spinner during fetch.

Switch between seasons using the dropdown.

Browse episodes: number, title, season image, short description.

Return to Homepage

Use browser back or app navigation. Previous filters and page state are preserved.

Error Handling

User-friendly messages display if fetch fails.

“Podcast not found” appears for invalid IDs.
