<script context="module">
    export async function preload({ params, query }) {

        const response = await this.fetch("http://localhost:3005/logout", {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            credentials: 'include'
        });

        if (response.status === 401) {
            return this.redirect(302, 'login');
        }
    }
</script>
