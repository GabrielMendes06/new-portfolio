import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import { motion } from 'framer-motion';
import '../../../resources/css/sections/sectionExperience.css'
import Title from '../../global/Title';
import Paragraph from '../../global/Paragraph';

const Tabs: React.FC = () => {
    return (
        <motion.div className='bg-card tab-container'>
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                
                <Row className='container m-auto'>
                    <h1 className='default-text experiences-title'>Experiências</h1>
                    <Col lg={3} className='bg-content-style tab-content p-0'>
                            <Nav variant="pills" className="flex-column tab-options">
                                <Nav.Item className='p-4 ps-0'>
                                    <Nav.Link eventKey="first" className='bg-transparent default-text options' >Tracevia</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second" className='bg-transparent p-4 default-text options'>Greb Studios</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third" className='bg-transparent p-4 default-text options'>HexaIT</Nav.Link>
                                </Nav.Item>
                            </Nav>    
                    </Col>
                    <Col lg={9}>
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                                <div className='d-flex justify-content-between'>
                                    <Title className='tab-title' text='Desenvolvedor de Software' />
                                    <Paragraph className='text-content ' text='Out 2023 - Atualmente' />
                                </div>
                                <Title text='Tracevia' className='span-title industry-subtitle' />
                                <Paragraph className='text-content ' text='Manutenção e criação de novas funcionalidades do software da empresa utilizando Java, Javascript, Jquery, Rust, Bootstrap. Utilização de frameworks para construção de interfaces de usuário utilizando JSV (JavaServer Faces). Gerenciamento de banco de dados MySQL.' />
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                                <div className='d-flex justify-content-between'>
                                    <Title className='tab-title' text='Desenvolvedor Front-end' />
                                    <Paragraph className='text-content ' text='Out 2023 - Atualmente' />
                                </div>
                                <Title text='Greb Studios' className='span-title industry-subtitle' />
                                <Paragraph className='text-content ' text='Criação de interfaces e páginas, consumindo APIs utilizando React.js, testes automatizados utilizando Cypress. Criação de APIs utilizando node.js. Banco de dados MySQL.' />
                            </Tab.Pane>
                            <Tab.Pane eventKey="third">
                                <div className='d-flex justify-content-between'>
                                    <Title className='tab-title' text='Desenvolvedor Full Stack Jr.' />
                                    <Paragraph className='text-content ' text='Out 2023 - Atualmente' />
                                </div>
                                <Title text='HexaIT' className='span-title industry-subtitle' />
                                <Paragraph className='text-content ' text='Responsável pela criação de interfaces e layouts utilizando React.js, Bootstrap, MaterialUI, Tailwind. Design elaborado de acordo com as especificações do cliente' />
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        </motion.div>
    )
}

export default Tabs