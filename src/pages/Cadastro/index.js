import './estilo.css'
import { IMaskInput } from 'react-imask';
import Form from 'react-bootstrap/Form';
import Container from "react-bootstrap/esm/Container";
import Button from "react-bootstrap/esm/Button";


function Cadastro() {

    function handleCadastro() {
        alert(`CADASTRO FEITO COM SUCESSO`)
    }



    return (
        <Container fluid>
            <div className='cabecalho' ><h1>CADASTRO</h1></div>
            <Form onSubmit={handleCadastro}>
                <div className="compra">
                    <br />
                    <Form.Group className="mb-3">
                        <Form.Label>Nome</Form.Label>
                        <Form.Control
                            as={IMaskInput}

                             placeholder="Digite seu nome"
                        />
                    </Form.Group><br />


                    <Form.Group className="mb-3">
                          <Form.Label>Data de Nascimento</Form.Label>
                        <Form.Control
                            as={IMaskInput}
                            mask="00/00/0000"
                            placeholder="Digite sua Data de Nascimento"
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>CPF</Form.Label>
                        <Form.Control
                            as={IMaskInput}
                            mask="000.000.000-00"
                            placeholder="Digite seu CPF"
                        />
                    </Form.Group>
                </div>

                <div className="comprar">
                    <Form.Group className="mb-3">
                    <Form.Label>E-mail</Form.Label>
                        <Form.Control
                            as={IMaskInput}
                            
                            placeholder="Digite seu E-mail"
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Senha</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Digite sua Senha"
                        />
                    </Form.Group>
                  
                    <p>   <Button variant='secondary' type="submit">Enviar</Button></p> 
                    </div>
              
            </Form>
        </Container>
    )
}


export default Cadastro