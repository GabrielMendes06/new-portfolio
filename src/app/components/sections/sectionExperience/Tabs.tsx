import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import { motion, useInView } from 'framer-motion';
import '../../../resources/css/sections/sectionExperience.css'
import Title from '../../global/Title';
import Paragraph from '../../global/Paragraph';
import { useRef } from 'react';

const Tabs: React.FC = () => {

    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "0px 0px -150px 0px" })
    const viewVerification = isInView ? 'visible' : 'hidden'

    const item = {
        hidden: {
            opacity: 0,
            x: 200 
        },
        visible: (custom: number) => ( {
            opacity: 1,
            x: [100, 0],
            transition: {
                duration: 1.5,
                delay: custom * 0.5,
                times: [0, 1]
            }
        })
    }

    const textVariant = {
        hidden: {
            opacity: 0,
            y: -100 
        },
        visible: (custom: number) => ( {
            opacity: 1,
            y: [-100, 0],
            transition: {
                duration: 1.5,
                delay: custom * 0.5,
                times: [0, 1]
            }
        })
    }

    const titleVariant = {
        hidden: {
            opacity: 0,
            x: -100
        },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 1
            }
        }
    }

    return (
        <motion.div className='bg-card tab-container' id='experience'>
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                <Row className='container m-auto'>
                    <motion.h1
                        className='default-text experiences-title'
                        ref={ref}
                        variants={titleVariant}
                        animate={viewVerification}
                        initial='hidden' >Experiências</motion.h1>
                    <Col lg={3} className='bg-content-style tab-content p-0 border-tab-div'>
                        <motion.div
                            variants={item}
                            initial='hidden'
                            animate={viewVerification}
                            custom={1}>
                            <Nav variant="pills" className="flex-column tab-options">
                                <Nav.Item>
                                    <motion.div
                                    variants={item}
                                    initial='hidden'
                                    animate={viewVerification}
                                    custom={1}>
                                        <Nav.Link eventKey="first" className='bg-transparent p-4 default-text options' >Tracevia</Nav.Link>
                                    </motion.div>
                                </Nav.Item>
                                <Nav.Item>
                                    <motion.div
                                    variants={item}
                                    initial='hidden'
                                    animate={viewVerification}
                                    custom={2}>
                                        <Nav.Link eventKey="second" className='bg-transparent p-4 default-text options'>Greb Studios</Nav.Link>
                                    </motion.div>
                                </Nav.Item>
                                <Nav.Item>
                                    <motion.div
                                    variants={item}
                                    initial='hidden'
                                    animate={viewVerification}
                                    custom={3}>
                                        <Nav.Link eventKey="third" className='bg-transparent p-4 default-text options'>HexaIT</Nav.Link>
                                    </motion.div>
                                </Nav.Item>
                            </Nav>
                        </motion.div>
                    </Col>
                    <Col lg={9}>
                        <Tab.Content className='ms-2'>
                            <Tab.Pane eventKey="first">
                                <motion.div
                                    variants={textVariant}
                                    initial='hidden'
                                    animate={viewVerification}
                                    custom={2}
                                >
                                    <div className='d-flex justify-content-between'>
                                        <Title className='tab-title' text='Desenvolvedor de Software' />
                                        <Paragraph className='text-content ' text='Out 2023 - Atualmente' />
                                    </div>
                                    <Title text='Tracevia' className='span-title industry-subtitle' />
                                    <Paragraph className='text-content ' text='Manutenção e criação de novas funcionalidades do software da empresa utilizando Java, Javascript, Jquery, Rust, Bootstrap. Utilização do framework JSF para construção de interfaces de usuário. Gerenciamento de banco de dados MySQL.' />
                                </motion.div>
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                                <div className='d-flex justify-content-between'>
                                    <Title className='tab-title' text='Desenvolvedor Front-End' />
                                    <Paragraph className='text-content ' text='Nov 2022 - Jun 2023' />
                                </div>
                                <Title text='Greb Studios' className='span-title industry-subtitle' />
                                <Paragraph className='text-content ' text='Criação de interfaces e páginas, consumindo APIs utilizando React.js, testes automatizados utilizando Cypress. Criação de APIs utilizando Node.js. Banco de dados MySQL.' />
                            </Tab.Pane>
                            <Tab.Pane eventKey="third">
                                <div className='d-flex justify-content-between'>
                                    <Title className='tab-title' text='Desenvolvedor Front-End' />
                                    <Paragraph className='text-content ' text='Jan 2022 - Set 2022' />
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