import { Link } from 'react-router-dom'
import './medica.css'
import carbocisteína from '../imagens/carbocisteína.png'
import Container from 'react-bootstrap/esm/Container'
import Button from 'react-bootstrap/esm/Button'
import Card from 'react-bootstrap/Card'

export default function Acetilcisteína() {
    return (
        <Container >
        <Card className='m-2, p-2'>
            <Card.Img className='detail' variant="top" src={carbocisteína} alt="Carbocisteína" />

            <h4>Carbocisteína 50mg/ml Xarope 100ml Prati Donaduzzi Genérico Ems</h4> <br />
            A carbocisteína é indicada em afecções agudas ou crônicas do trato
            respiratório, nas quais a secreção abundante e/ou viscosa do muco seja
            considerado agravante; além de ser indicada nos casos de bronquites agudas e
            crônicas, insuficiência respiratória crônica, rinites, sinusites e laringites.
            Se persistirem os sintomas, o médico deverá ser consultado.
            Carbocisteína 50mg/ml é um medicamento. Seu uso pode trazer
            Riscos. Procure o médico e o farmacêutico. Leia a bula.
            <h1>
                R$ 19,97
            </h1> <br />

            <div className='Container llog'>
                    <Link to='/Compra'> <Button variant="secondary">COMPRAR</Button></Link>
                </div>
            </Card>
        </Container>
    )
}