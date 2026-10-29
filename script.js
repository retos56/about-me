const contactDialog = document.querySelector(".contact-dialog");

if (contactDialog instanceof HTMLDialogElement) {
    document.querySelectorAll("[data-contact-open]").forEach((button) => {
        button.addEventListener("click", () => contactDialog.showModal());
    });

    document.querySelectorAll("[data-contact-close]").forEach((button) => {
        button.addEventListener("click", () => contactDialog.close());
    });

    contactDialog.addEventListener("click", (event) => {
        if (event.target === contactDialog) {
            contactDialog.close();
        }
    });
}