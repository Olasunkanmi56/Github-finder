class Github {
    constructor() {
       this .Client_id = '309746856bf854c40226';
       this.client_sercet = 'd9d695b8579a1979777b759917248c8754925b09';
       this.repos_count = 5;
       this.repos_sort = 'created: asc';
    }
    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_sercet=${this.client_secret}`);
        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_sercet=${this.client_secret}`);

        
        const profile = await profileResponse.json();
        const repos = await repoResponse.json();
        return {
            profile,
            repos
        }
    }

}