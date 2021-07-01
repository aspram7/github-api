const fetchApi = require("node-fetch");

 const resolvers = () => {
     return {
             users: async ({ value, per_page, page }, req) => {
               const usersData = await fetchApi(
                 `https://api.github.com/search/users?q=${value}&per_page=${per_page}&page=${page}`
               ).then((res) => res.json());
               return usersData;
             },
             user: async ({ name }, req) => {
               const userData = await fetchApi(`https://api.github.com/users/${name}`).then((res) =>
                 res.json()
               );
               return userData;
             },
             userRepos: async ({ name, per_page, page }, req) => {
               const userReposData = await fetchApi(
                 `https://api.github.com/users/${name}/repos?per_page=${per_page}&page=${page}`
               ).then((res) => res.json());
               return userReposData;
             },
             repos: async ({ value, per_page, page }, req) => {
               const userRepos = await fetchApi(
                 `https://api.github.com/search/repositories?q=${value}&per_page=${per_page}&page=${page}`
               ).then((res) => res.json());
               return userRepos;
             },
         
     }
};

exports.resolvers = resolvers;