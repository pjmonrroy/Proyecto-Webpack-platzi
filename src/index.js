const $links = document.getElementById('links');
const $name = document.querySelector('h1');

const data = {
    name: "Pierre Monrroy",
    nickname: "Mr.Robots",
    description: "...",
    avatar: "...",
    social: [
        {
        name: "twitter",
        url: "https://twitter.com/",
        username: "",
        },
        {
            name: "instagram",
            url: "https://instagram.com/",
            username: "",
        },
        ],
        links: [
        {
            name: "CURSOS REALIZADOS",
            url: "https://platzi.com/p/pierremonrroy",
            color: "lime",
            emoji: "📖",
        },
        {
            name: "PROYECTOS",
            url: "https://github.com/pjmonrroy",
            color: "sky",
            emoji: "💬",
        },
    ],
    footer: "Un café y una sonrisa",
};

const main = () => {
    let name = document.createTextNode(data?.name);
    let links = data?.links?.map((link) => {
        return `<div class="bg-${link.color}-300 px-4 py-5 w-full flex justify-between">
                    <a class="text-sm font-bold text-${link.color}-800 text-center hover:text-${link.color}-800 cursor-pointer"
                    href="${link.url}" target="_blank">
                    ${link.name}
                    </a>
                    <span>${link.emoji}</span>
                </div>`;
    }).join('');
    let newItem = document.createElement("section");
    newItem.innerHTML = links;
    $links.appendChild(newItem);
    $name.appendChild(name);
}

main();
