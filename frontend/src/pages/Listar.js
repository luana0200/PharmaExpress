import Container from "react-bootstrap/Container";
import api from "../services/apiBack";
import { useState, useEffect } from "react";


export default function ListarCategoria() {

    const [categorias, setCategorias] = useState([''])
    const [categoriaId, setCategoriaId] = useState('')
    const [id, setId] = useState('')

    useEffect(() => {
        async function listarCategorias() {
            const resposta = await api.get('/ListarCategoriasUnico', {
                id
            })
            console.log(resposta.data) // retorna oq esta dentro de DATA
        }
        listarCategorias()
    }, [])
    return (
        <Container>
          {categorias.map((item) => { //mapear os seus itens
                return (
                    <div>
                        <h2>{item.name}</h2>
                    </div>
                )
            })}
            <div></div>
        </Container>
    )
}