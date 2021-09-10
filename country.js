const URLGET = "https://restcountries.eu/rest/v2/regionalbloc/eu"


$ (document).ready(() => {
    $.get(URLGET, function (hola,chau){
        if (chau === "success") {
          let misdatos = hola
            for (const dato of misdatos) {
                $(".country").append(`
                    <Option>${dato.name}</Option>
                    `)
                }
        }
    })
    })
