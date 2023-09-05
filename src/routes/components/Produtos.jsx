import { Link } from "react-router-dom"
import { listaProdutos } from "../../components/listaProdutos"


export default function Produto(){

    return(
        <main>
            <h1>Produto</h1>
            {listaProdutos.map(prod => (
                <div key={prod.id}>
                    <Link to={`/produtos/editar/${prod.id}`}>
                        Editar o produto: {prod.name}
                    </Link>
                </div>
            ))}
        </main>
    )
}