let main = document.querySelector('main');

async function changeView(view) {
    let currentView = await view;

    if (currentView != undefined) {
        main.querySelectorAll('.view')
            .forEach(v => v.remove());

        main.appendChild(await view);
    }

}

let viewController = {
    changeView,
}

export default viewController;