import "../styles/main.css";

const tech = [
    "bash",
    "html",
    "css",
    "sass",
    "tailwindcss",
    "javascript",
    "typescript",
    "reactivex",
    "react",
    "next",
    "angular",
    "jest",
    "nest",
    "nodejs",
    "express",
    "java",
    "spring",
    "go",
    "rabbitmq",
    "prisma",
    "mysql",
    "postgres",
    "supabase",
    "mongodb",
    "docker",
    "aws",
    "gcp",
    "linux",
    "ubuntu",
    "vscode",
    "vscodium",
    "idea",
    "figma",
    "vercel",
    "vite",
    "git",
    "github",
    "npm",
    "yarn",
    "pnpm"
]

function onInit() {
    for (let i = 0; i < tech.length; i++) {

        const el = document.createElement("img");
        el.setAttribute("loading", "lazy")
        el.setAttribute("src", `https://skillicons.dev/icons?i=${tech[i]}`)
        el.setAttribute("title", `${tech[i]}`);
    
        document.querySelector("#tech").appendChild(el)
    }
}

onInit();