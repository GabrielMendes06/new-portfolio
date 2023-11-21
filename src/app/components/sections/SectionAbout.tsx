import '../../resources/css/sections/sectionAbout.css'
import Cartoon from '../../resources/images/sections/sectionAbout/cartoon.webp'
import Image from 'next/image'
import Paragraph from '../global/Paragraph'
import Title from '../global/Title'

const SectionAbout: React.FC = () => {
    return (
        <div className="container bg-transparent section-content d-flex align-items-center justify-content-center section-about">
            <div className='bg-card card-content row d-flex p-4'>
                <div className='col-sm-6'>
                    <Image
                        src={Cartoon}
                        alt='Dev Cartoon'
                    />
                </div>
                <div className='col-sm-6 d-flex flex-column align-items-start justify-content-center'>
                    <Title
                        text='Quem sou'
                        className='about-subtitle span-title' />
                    <Title
                        text='Gabriel Mendes'
                        className='about-title' />
                    <Title
                        text='Front-end Developer'
                        className='about-subtitle2' />
                    <Paragraph text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure earum nostrum quis possimus itaque laborum saepe dignissimos tenetur consequatur minima. Obcaecati, rem nemo! Deleniti magnam itaque voluptatem, id iste laborum!' />
                </div>
            </div>
        </div>
    )
}

export default SectionAbout