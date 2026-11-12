to use shad cn ui
first install tail wind css
update vite.config:
path from 'path'

// https://vite.dev/config/
export default defineConfig({
plugins: [react(), tailwindcss()],
resolve: {
alias: {
"@": path.resolve(\_\_dirname, "./src"),
},
},
})

and on tsconfig.app:
on the compiler option add:
"baseUrl": ".",
"paths": {
"@/_": ["./src/_"]
},

trouble connecting to the database:
Your Node.js application cannot resolve MongoDB's SRV records using your router's default DNS (192.168.1.1), but it works perfectly with Google's DNS (8.8.8.8).

import dns from "node:dns";

dotenv.config();

// Fix MongoDB SRV DNS resolution
dns.setServers(["8.8.8.8", "8.8.4.4"]);
