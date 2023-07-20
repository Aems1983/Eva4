
export default function Galeria() {
    return(
        <section>
            <h1> Perrito</h1>
            <Imagen />
            <Imagen />
            <Imagen />
        </section>
    );
}

function Imagen() {
    return(
        <img
            src="https://images.pexels.com/photos/2745150/pexels-photo-2745150.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Perrito"
        />
    );
}