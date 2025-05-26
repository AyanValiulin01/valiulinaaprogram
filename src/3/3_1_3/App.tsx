document.addEventListener("DOMContentLoaded", function () {
    const state = {
        isEditing: false,
        firstName: "Jane",
        lastName: "Jacobs",
    };

    function render() {
        const app = document.getElementById("app");
        if (!app) return; // Защита от null

        app.innerHTML = "";

        const form = document.createElement("form");

        // Поле First Name
        const firstNameLabel = document.createElement("label");
        firstNameLabel.textContent = "First name: ";

        const firstNameDisplay: HTMLElement | HTMLInputElement = state.isEditing
            ? document.createElement("input")
            : document.createElement("b");

        if (state.isEditing && firstNameDisplay instanceof HTMLInputElement) {
            firstNameDisplay.value = state.firstName;
            firstNameDisplay.addEventListener("input", (e) => {
                if (!(e.target instanceof HTMLInputElement)) return;
                state.firstName = e.target.value;
                render();
            });
        } else {
            firstNameDisplay.textContent = state.firstName;
        }

        firstNameLabel.appendChild(firstNameDisplay);

        // Поле Last Name
        const lastNameLabel = document.createElement("label");
        lastNameLabel.textContent = "Last name: ";

        const lastNameDisplay: HTMLElement | HTMLInputElement = state.isEditing
            ? document.createElement("input")
            : document.createElement("b");

        if (state.isEditing && lastNameDisplay instanceof HTMLInputElement) {
            lastNameDisplay.value = state.lastName;
            lastNameDisplay.addEventListener("input", (e) => {
                if (!(e.target instanceof HTMLInputElement)) return;
                state.lastName = e.target.value;
                render();
            });
        } else {
            lastNameDisplay.textContent = state.lastName;
        }

        lastNameLabel.appendChild(lastNameDisplay);

        // Кнопка переключения режимов
        const button = document.createElement("button");
        button.textContent = state.isEditing ? "Save" : "Edit Profile";
        button.type = "button";
        button.addEventListener("click", () => {
            state.isEditing = !state.isEditing;
            render();
        });

        // Приветственное сообщение
        const greeting = document.createElement("p");
        greeting.innerHTML = `<i>Hello, ${state.firstName} ${state.lastName}!</i>`;

        // Добавляем элементы в форму
        form.appendChild(firstNameLabel);
        form.appendChild(lastNameLabel);
        form.appendChild(button);

        // Добавляем форму и приветствие в `app`
        app.appendChild(form);
        app.appendChild(greeting);
    }

    render();
});
