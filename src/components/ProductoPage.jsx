import Header from './Header'

function ProductoPage(){
    const Producto = [
    { cod: 1, titulo: "Laptop", precio: "12", img: "Laptop.png" },
    { cod: 2, titulo: "Lavadora", precio: "11", img: "Lavadora.png" },
    { cod: 3, titulo: "SAPOLIO", precio: "15", img: "SAPOLIO.png" },
    { cod: 4, titulo: "MICROONDAS", precio: "12", img: "stranger-things.png" },
    { cod: 5, titulo: "ACEITE", precio: "15", img: "dr-house.png" },
    { cod: 6, titulo: "Galleta", precio: "12", img: "the-x-files.png" },
      ];
      
      return (
        <>
        <Header></Header>
            <div className="container mt-3">
                <div className="border-bottom pb-3 mb-3">
                    <h3>Producto</h3>
                </div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th className="text-center">Precio</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Producto.map((item)=>(
                            <tr key={item.cod}>
                                <td>{item.titulo}</td>
                                <td className="text-center">{item.precio}</td>
                                <td className="text-center">
                                    <img
                                        src={`https://dummyimage.com/180x320/000/fff&text=${Producto.img}`}
                                        alt={`${Producto.nom} poster`}
                                        width="180"
                                        height="320"
                                        loading="lazy"
                                        className="card__image"
                                        />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
      )
}


export default ProductoPage
