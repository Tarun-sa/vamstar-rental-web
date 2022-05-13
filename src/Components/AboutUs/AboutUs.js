import React from 'react'
import './AboutUs.css';
import about1 from '../../images/aboutUs1.png';
import about2 from '../../images/aboutUs2.png';
import about3 from '../../images/aboutUs3.png';
import about4 from '../../images/aboutUs4.png';
import chapterLayer from '../../images/rectangle-16@2x.svg';

const AboutUs = () => {
    return (
        <div className="about">
            <div className="about-heading ">About Us</div>
            <div className="about-desc">
                Allow us to tell you a short story...
            </div>
            <div className='about-image-container'>
                <img alt='about1' className=" aboutImg about1" src={about1} />
                <img alt='about2' className=" aboutImg about2" src={about2} />
                <img alt='about3' className="aboutImg about3" src={about3} />
                <img alt='about4' className="aboutImg about4" src={about4} />
            </div>

            <div className='chapterLayer1'>
                <img alt='img' className='chapterLayerImg1 chapterImg' src={chapterLayer} />
                <div className='chapter-detail'>
                    <h4>Chapter 1</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun</p>
                </div>
            </div>

            <div className='chapterLayer2'>
                <img alt='img' className='chapterLayerImg2 chapterImg' src={chapterLayer} />
                <div className='chapter-detail'>
                    {window.matchMedia("max-width: 900px") && <h4>Chapter 2</h4>}

                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun</p>
                </div>
            </div>

            <div className='chapterLayer3'>
                <img alt='img' className='chapterLayerImg3 chapterImg' src={chapterLayer} />
                <div className='chapter-detail'>
                    {window.matchMedia("max-width: 900px") && <h4>Chapter 3</h4>}

                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun</p>
                </div>
            </div>

            <div className='chapterLayer4'>
                <img alt='img' className='chapterLayerImg4 chapterImg' src={chapterLayer} />
                <div className='chapter-detail'>
                    {window.matchMedia("max-width: 900px") && <h4>Chapter 4</h4>}

                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun</p>
                </div>
            </div>
        </div>

    )
}

export default AboutUs