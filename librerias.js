let buy = document.getElementsByClassName("buy");

for (let i = 0; i < buy.length; i++) {
    buy[i].addEventListener("click", () => {
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Su producto a sido agregado exitosamente',
            showConfirmButton: false,
            timer: 1500
        });
    });
}


