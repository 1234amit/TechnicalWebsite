import React from 'react'
import styled from 'styled-components';
import { NavLink } from "react-router-dom";
import { Button } from '../styles/Button';
import { useGlobalContext } from '../context';

const HeroSection = () => {

  const { name, image } = useGlobalContext();

  return (

    <Wrapper>
        <div className="container grid grid-two-column">
            <div className="section-hero-data">
                <p className="hero-top-data">THIS IS US</p>
                <h1 className="hero-heading">{name}</h1>
                <p className="hero-para">
                Web technology refers to the means by which computers communicate with each other using markup languages and multimedia packages. It gives us a way to interact with hosted information, like websites. Web technology involves the use of hypertext markup language (HTML) and cascading style sheets (CSS). 
                </p>

                <Button className="btn hireme-btn">
                    <NavLink to="/contact"> hire me </NavLink>
                </Button>

            </div>
            <div className='section-hero-image'>
                <picture>
                    <img src={image} alt="hero image" className="hero-img "></img>
                </picture>
            </div>
        </div>

    </Wrapper>
  )
};

const Wrapper = styled.section`
    padding: 9rem 0;

    .section-hero-data{
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .btn {
        max-width: 16rem;
      }

    .hero-top-data{
        text-transform: uppercase;
        font-weight: 500;
        font-size: 1.5rem;
        color: ${({ theme }) => theme.colors.helper};
    }

    .hero-heading {
        text-transform: uppercase;
        font-size: 6.4rem;
      }

      .hero-para {
        margin-top: 1.5rem;
        margin-bottom: 3.4rem;
        max-width: 60rem;
      }

      .section-hero-image {
        display: flex;
        justify-content: center;
        align-items: center;
      }

s
    picture{
        text-align:center;
    }

    .hero-img {
        max-width: 80%;
      }


      @media (max-width: ${({ theme }) => theme.media.mobile}) {
        .grid {
          gap: 7.2rem;
        }
      }

`;

export default HeroSection