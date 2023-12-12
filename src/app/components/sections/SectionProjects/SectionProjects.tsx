import { motion, useInView } from 'framer-motion'
import Title from '../../global/Title'
import SolarSystem from '../../../resources/images/sections/sectionProjects/solar-system.png'
import EarthMuseum from '../../../resources/images/sections/sectionProjects/earth-museum.png'
import Login from '../../../resources/images/sections/sectionProjects/login.png'
import Portifolio from '../../../resources/images/sections/sectionProjects/portifolio-legado.png'
import ProjectCard from './ProjectCard'
import TypeScript from "../../../resources/images/sections/SectionSkills/typescript.svg"
import ReactJs from "../../../resources/images/sections/SectionSkills/reactjs.svg"
import Bootstrap from "../../../resources/images/sections/SectionSkills/bootstrap.svg"
import JavaScript from "../../../resources/images/sections/SectionSkills/javascript.svg"
import HTML5 from "../../../resources/images/sections/SectionSkills/html-5.svg"
import CSS3 from "../../../resources/images/sections/SectionSkills/css3.svg"
import NodeJs from "../../../resources/images/sections/SectionSkills/nodejs.svg"
import MySQL from "../../../resources/images/sections/SectionSkills/mysql.svg"

import '../../../resources/css/sections/sectionProject.css'
import Image from 'next/image'
import { useRef } from 'react'

const SectionProjects: React.FC = () => {

    const ref = useRef(null)
    const isInView = useInView(ref, { margin: '0px 0px -250px 0px', once: true })

    const FadeVariant = {
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
        <motion.div
            initial='hidden'
            variants={FadeVariant}
            className="container bg-transparent d-flex flex-column justify-content-center section-projects pb-5"
            animate={isInView ? 'visible' : 'hidden'}
            id='projects'>
            <div>
                <motion.div
                    ref={ref}
                    initial='hidden'
                >
                    <Title text="Projetos" className="text-center mb-5 section-title" />
                </motion.div>
            </div>
            <div className='row responsive-align-row mt-5'>
                <ProjectCard
                    modalTitle='Solar System'
                    description='Projeto criado do 0, tanto seu design, estilização e transições foram criados por mim. Seu conteúdo foi montado através de uma API e também com pesquisas de blogs diversos, principalmente do site da NASA, onde contém as melhores informações sobre nosso sistema solar. Nunca foi tão divertido criar um projeto quanto foi criar o Solar System, além da paixão por desenvolvimento sou fissurado por astronomia, o que me fez ter um carinho especial por esse projeto.'
                    data='24 de Outubro de 2021'
                    image={SolarSystem}
                    projectLink='#'
                    repositoryLink='#'
                    src={SolarSystem}
                    alt='SolarSystem'
                    title='Solar System'
                    tecnologys={
                        <div className='w-100 d-flex justify-content-center mx-2'>
                            <Image
                                src={HTML5}
                                alt='HTML5'
                                width={30}
                                className='mx-1'
                            />
                            <Image
                                src={CSS3}
                                alt='CSS3'
                                width={30}
                                className='mx-1'
                            />
                            <Image
                                src={ReactJs}
                                alt='ReactJs'
                                width={30}
                                className='mx-1'
                            />
                            <Image
                                src={Bootstrap}
                                alt='Bootstrap'
                                width={30}
                                className='mx-1'
                            />
                            <Image
                                src={TypeScript}
                                alt='TypeScript'
                                width={30}
                                className='mx-1'
                            />

                        </div>
                    } />
                <ProjectCard
                    modalTitle='Login'
                    description='A ideia desse projeto foi criar uma aplicação full-stack de um banco digital, contém funcionalidades como criação de conta, saldo bancário, depósito, transferência, extrato bancário entre outras coisas. A aplicação ficou fora do ar pois a nuvem que eu utilizava para hospedar o banco de dados era gratúito apenas por um curto período, em breve o manterei no ar, hoje apenas funciona em localhost. As tecnologias utilizadas foram React, Node.js, MySQL, HTLM5, CSS3, Axios entre outras.'
                    data='24 de Outubro de 2021'
                    image={Login}
                    projectLink='#'
                    repositoryLink='#'
                    src={Login}
                    alt='Login'
                    title='Login(Manutenção)'
                    tecnologys={
                        <div className='w-100 d-flex justify-content-center mx-2'>
                            <Image
                                src={HTML5}
                                alt='HTML5'
                                width={30}
                                className='mx-1'
                            />
                            <Image
                                src={CSS3}
                                alt='CSS3'
                                width={30}
                                className='mx-1'
                            />
                            <Image
                                src={Bootstrap}
                                alt='Bootstrap'
                                width={30}
                                className='mx-1'
                            />
                            <Image
                                src={JavaScript}
                                alt='JavaScript'
                                width={30}
                                className='mx-1'
                            />
                        </div>
                    } />
                <ProjectCard
                     modalTitle='Earth Museum'
                     description='Earth Museum foi um projeto criado majoritariamente em bootstrap, a ideia foi criar um site com um design elegante e intuítivo utilizando a biblioteca css, é um projeto simples de fácil entendimento e agradável.'
                     data='24 de Outubro de 2021'
                     image={EarthMuseum}
                     projectLink='#'
                     repositoryLink='#'
                     src={EarthMuseum}
                     alt='EarthMuseum'
                     title='EarthMuseum'
                    tecnologys={
                        <div className='w-100 d-flex justify-content-center mx-2'>
                            <Image
                                src={HTML5}
                                alt='HTML5'
                                width={30}
                                className='mx-1'
                            />
                            <Image
                                src={CSS3}
                                alt='CSS3'
                                width={30}
                                className='mx-1'
                            />
                            <Image
                                src={JavaScript}
                                alt='JavaScript'
                                width={30}
                                className='mx-1'
                            />
                            <Image
                                src={NodeJs}
                                alt='NodeJs'
                                width={30}
                                className='mx-1'
                            />
                            <Image
                                src={MySQL}
                                alt='MySQL'
                                width={30}
                                className='mx-1'
                            />
                        </div>
                    } />
                <ProjectCard
                     modalTitle='Portifólio (Legado)'
                     description='Esse projeto foi meu primeiro portifólio desenvolvido, decidi deixa-lo em exibição pois é uma ótima maneira de fazer uma comparação com meu portifólio atual, demonstrando o crescimento tanto em conhecimento como em profissionalismo da melhor maneira possível para um front-end, a maneira visual. '
                     data='24 de Outubro de 2021'
                     image={Portifolio}
                     projectLink='#'
                     repositoryLink='#'
                     src={Portifolio}
                     alt='Portifólio(Legado)'
                     title='Portifólio(Legado)'
                    tecnologys={
                        <div className='w-100 d-flex justify-content-center mx-2'>
                            <Image
                                src={HTML5}
                                alt='HTML5'
                                width={30}
                                className='mx-1'
                            />
                            <Image
                                src={CSS3}
                                alt='CSS3'
                                width={30}
                                className='mx-1'
                            />
                            <Image
                                src={ReactJs}
                                alt='ReactJs'
                                width={30}
                                className='mx-1'
                            />
                            <Image
                                src={Bootstrap}
                                alt='Bootstrap'
                                width={30}
                                className='mx-1'
                            />
                        </div>

                    } />
            </div>
        </motion.div>
    )
}

export default SectionProjects