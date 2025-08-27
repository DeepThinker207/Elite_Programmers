document.addEventListener("DOMContentLoaded", function () {
    const registerForm = document.querySelector("form")

    if (registerForm) {
        registerForm.addEventListener("submit", function (event) {
            let valid = true
            const inputs = registerForm.querySelectorAll("input[type='text'], input[type='email'], input[type='password']")

            for (let input of inputs) {
                if (input.value.trim() === "") {
                    alert(`${input.name || "Field"} cannot be empty!`)
                    valid = false
                    break
                }
            }

            if (!valid) {
                event.preventDefault()
            }
        })
    }

    const heroBtn = document.querySelector(".hero .btn")
    if (heroBtn) {
        heroBtn.addEventListener("click", function () {
            alert("🚀 Thanks for clicking! Start exploring Elite Programmers.")
        })
    }

    const flashMessages = document.querySelectorAll(".flash-messages .alert")
    if (flashMessages.length > 0) {
        setTimeout(() => {
            flashMessages.forEach(msg => msg.remove())
        }, 4000)
    }
})
