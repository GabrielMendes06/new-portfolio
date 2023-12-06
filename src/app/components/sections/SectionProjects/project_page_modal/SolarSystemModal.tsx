import Image from 'next/image'
import SolarSystem from '../../../../resources/images/sections/sectionProjects/solar-system.png'

const SolarSystemModal: React.FC = () => {
    return (
        <div className='card-modal-content'>
            <div className='row'>
                <div className='col-md-6'>
                    <Image src={SolarSystem} alt='SolarSystem' />
                </div>
                <div className='text-light col-md-6'>
                    <div className='d-flex justify-content-between'>
                        <h1 className='card-modal-title'>Solar System</h1>
                        <i className="bi bi-x close-button-modal"></i>
                    </div>
                    <p className='description-modal'>Projeto criado do 0, tanto seu design, estilização e transições foram criados por mim. Seu conteúdo foi montado através de uma API e também com pesquisas de blogs diversos, principalmente do site da NASA, onde contém as melhores informações sobre nosso sistema solar. Nunca foi tão divertido criar um projeto quanto foi criar o Solar System, além da paixão por desenvolvimento sou fissurado por astronomia, o que me fez ter um carinho especial por esse projeto.</p>
                    <p className='info-text info-modal-color'> 24 de Outrubro de 2021</p>
                </div>
            </div>
            <div className='mt-4'>
                <a href="#" className="text-light info-button modal-redirect-button">Acessar projeto</a>
                <a href="#" className="text-light info-button modal-redirect-button">Acessar repositório</a>
            </div>
        </div>
    )
}

export default SolarSystemModal