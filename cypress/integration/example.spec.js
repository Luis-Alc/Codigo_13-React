// para poder evitar el erro de cy is not defined vamos a definir a cy como global


/* global cy */

// Este archivo sera el que contenga nuestras pruebas
// Para poder iniciar una prueba necesitamos darle un titulo
// en este caso usamos describe para darle un titulo
describe("Mi primera prueba con cypress", () => {
    // dentro de nuestro arrow function vamos a escribir las pruebas
    // que haremos ejemplo
    it("prueba home pokemon", () => {
        //     // aca vamos a verificar si es que nuestro home funciona o no
        //     //cy => cypress
        //     // Esto va a entrar a localhost:3000 y decirno si funciona o no
        //     cy.visit("https://codigo-13-react.vercel.app/");
        //     cy.contains("Pokedex");
        //     cy.contains("Detalle del pokemon").click();
        //     cy.contains("Habilidades").click();
        //     cy.contains("Cerrar").click();
        // });

        // it("Pruebas para banderas", () => {
        //     cy.visit("https://codigo-13-react.vercel.app/flags");
        //     cy.wait(5000)
        //     cy.get("input:first").type("peru");
        //     cy.wait(5000)
        //     cy.contains("Republic of Peru").click();
        //     cy.contains("Lima").click();

        // })

        it("Pruebas para Youtube", () => {
            cy.visit("https://codigo-13-react.vercel.app/youtube");
            cy.wait(5000)
            cy.contains("Batman").click();

        })

        it("Pruebas para login", () => {
            cy.visit("https://codigo-13-react.vercel.app/login");
            cy.get('[name="email"]').type("pepe@gmail.com");
            cy.get('[name="password"]').type("123456");
            cy.contains("Iniciar Session").click();
            cy.url().should("include", "/youtube/administrador");

            cy.contains("Crear Pelicula").click();
            cy.get('[name="name"]').type("Doctor Strange 2");
            cy.get('[name="director"]').type("Scott Derrickson");
            cy.get('[name="gender"]').type("Marvel");
            cy.get('[name="video_link"]').type("https://i.ytimg.com/an_webp/nugHqU8jurA/mqdefault_6s.webp?du=3000&sqp=CIC9rpIG&rs=AOn4CLAFv6MqXJ_feCOXWKlUXzC4ulG9Jw");
            cy.get('[name="wallpaper"]').type("https://i.ytimg.com/an_webp/nugHqU8jurA/mqdefault_6s.webp?du=3000&sqp=CIC9rpI");

            cy.get(".btn-crear-movie").click();

        })
    });
})


