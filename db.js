const users = [
    { id: "1", name: "Alice", email: "alice@example.com", profileId: "1", groupIds: ["1", "2"] },
    { id: "2", name: "Bob", email: "bob@example.com", profileId: "2", groupIds: ["1"] },
    { id: "3", name: "Charlie", email: "charlie@example.com", profileId: "3", groupIds: ["2", "3"] },
    { id: "4", name: "David", email: "david@example.com", profileId: "4", groupIds: ["3"] },
    { id: "5", name: "Eve", email: "eve@example.com", profileId: "5", groupIds: ["1", "3"] }
];

const profiles = [
    { id: "1", bio: "Software Engineer", userId: "1" },
    { id: "2", bio: "Data Scientist", userId: "2" },
    { id: "3", bio: "Backend Developer", userId: "3" },
    { id: "4", bio: "UI/UX Designer", userId: "4" },
    { id: "5", bio: "Cybersecurity Analyst", userId: "5" }
];

const posts = [
    { id: "1", title: "GraphQL Basics", content: "GraphQL is awesome!", userId: "1" },
    { id: "2", title: "Apollo Server", content: "Apollo makes GraphQL easy!", userId: "1" },
    { id: "3", title: "Data Science", content: "Exploring machine learning", userId: "2" },
    { id: "4", title: "REST vs GraphQL", content: "Comparing APIs", userId: "3" },
    { id: "5", title: "UI/UX Principles", content: "Designing better experiences", userId: "4" },
    { id: "6", title: "Cybersecurity Trends", content: "Latest trends in security", userId: "5" },
    { id: "7", title: "Machine Learning", content: "Introduction to ML", userId: "2" },
    { id: "8", title: "GraphQL Advanced", content: "Pagination and Authentication", userId: "3" }
];

const groups = [
    { id: "1", name: "Developers", memberIds: ["1", "2", "5"] },
    { id: "2", name: "GraphQL Enthusiasts", memberIds: ["1", "3"] },
    { id: "3", name: "Tech Innovators", memberIds: ["3", "4", "5"] },
    { id: "4", name: "Cybersecurity Experts", memberIds: ["5"] }
];

module.exports = { users, profiles, posts, groups };
