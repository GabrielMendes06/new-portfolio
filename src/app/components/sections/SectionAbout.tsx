import { Card } from 'react-bootstrap'
import '../../resources/css/sections/sectionAbout.css'
import Cartoon from '../../resources/images/sections/sectionAbout/cartoon.webp'
import Image from 'next/image'
import Paragraph from '../global/Paragraph'

const SectionAbout: React.FC = () => {
    return (
        <div className="container bg-transparent section-content d-flex align-items-center section-about">
            <div className='bg-transparent row d-flex'>
                <div className='col-sm-6'>
                    <Image
                    src={Cartoon}
                    alt='Dev Cartoon'
                   />
                </div>
                <div className='col-sm-6'> 
                    <Paragraph text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure earum nostrum quis possimus itaque laborum saepe dignissimos tenetur consequatur minima. Obcaecati, rem nemo! Deleniti magnam itaque voluptatem, id iste laborum!'/>
                </div>
            </div>
        </div>
    )
}

export default SectionAbout