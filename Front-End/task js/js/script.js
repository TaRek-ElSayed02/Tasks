
const getBooks = () => {
    let myReq = new XMLHttpRequest();
    let URL = "https://www.googleapis.com/books/v1/volumes?q=1";

    myReq.addEventListener('readystatechange', function () {
        if (this.readyState === 4 && this.status === 200) {
            let myRes = JSON.parse(this.responseText);
            const books = myRes.items;
            let row = document.querySelector(".row");
            let columns = "";
            books.forEach(book => {
                let title = book.volumeInfo.title;
                let imgURL = book.volumeInfo.imageLinks.thumbnail;
                let desc = book.volumeInfo.description;
                
                let linkInfo = book.volumeInfo.infoLink;

                columns += `
                <div class="col-3">
                    <div class="card bg-danger text-center text-white p-3">
                        <img src="${imgURL}" class="w-50 card-img m-auto" alt="">
                        <h4 class="mt-4">${title}</h4>
                        <p>${desc}</p>
                        <a href="${linkInfo}" class="btn btn-primary w-50 auto d-block">more info</a> <!-- Corrected the class name -->
                    </div>
                </div>
                `;
            });

            row.innerHTML = columns;
        }
    });
    myReq.open("GET", URL, true);
    myReq.send();
}

getBooks();