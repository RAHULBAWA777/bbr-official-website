import React from 'react'
import './services.css'
import Leaf from '../../assets/leaf.png'

const Services = () => {
    return (
        <>
            <div id="services-container" className='pad'>
                <h1>Our Services</h1>
                <img style={{ width: '4rem' }} src={Leaf} alt="leaf" />
                <p className="heading-para"> The simplest way to design properties </p>
                <div className="services">
                    
                    <div className="service">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0YVZ_lfHI-sS1i9cZ5j_rkcbuWxkLAFG4yQ&usqp=CAU" alt="" className="icon" />
                        <h3>service 1</h3>
                        <p className="caption">
                            A small river named Duden flows by their place and supplies it with the necessary regelialia.
                        </p>
                    </div>

                    <div className="service">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0YVZ_lfHI-sS1i9cZ5j_rkcbuWxkLAFG4yQ&usqp=CAU" alt="" className="icon" />
                        <h3>service 2</h3>
                        <p className="caption">
                            A small river named Duden flows by their place and supplies it with the necessary regelialia.
                        </p>
                    </div>

                    <div className="service">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0YVZ_lfHI-sS1i9cZ5j_rkcbuWxkLAFG4yQ&usqp=CAU" alt="" className="icon" />
                        <h3>service 3</h3>
                        <p className="caption">
                            A small river named Duden flows by their place and supplies it with the necessary regelialia.
                        </p>
                    </div>

                    <div className="service">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0YVZ_lfHI-sS1i9cZ5j_rkcbuWxkLAFG4yQ&usqp=CAU" alt="" className="icon" />
                        <h3>service 4</h3>
                        <p className="caption">
                            A small river named Duden flows by their place and supplies it with the necessary regelialia.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Services