import React, { useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import {usseEffect, useState} from "react";
import { ArrowRightCircle } from 'react-bootstrap-icons'




export const Banner = () => {
    const [loopnum, setloopnum] = useState(0);
    const [isDeleting, setisDeleting] = useState(false);
    const toRotate = [" Unete!!"];
    const [text, setText] = useState('');
    const tiempo = 1000;
    const [delta, setDelta] = useState(300 - Math.random()*100);
    useEffect (()=>{
        let ticker = setInterval(()=>{
            tick();
        },delta)
        return()=>{clearInterval(ticker)};
    
    },[text])
    
    const tick =()=>{
        let i = loopnum % toRotate.length;
        let fulltext = toRotate[i];
        let updateText = isDeleting ? fulltext.substring(0, text.length-1) : fulltext.substring(0,fulltext.length+1);
        setText(updateText);
        if(isDeleting){
            setDelta(prevDelta => prevDelta/2);
        }
        if(!isDeleting && updateText === fulltext){
            setisDeleting(true);
            setDelta(tiempo);
        }else{
            if(isDeleting && updateText ===''){
                setisDeleting(false);
                setloopnum(loopnum+1);
                setDelta(500);
            }
            
        }
    
    }
  return (
    <section className="banner" id="home">
        <Container>
            <Row className="align-items-center">
                <Col xs={12} md={6} xl={7}>
                    <span className="tagline">Bienvenido Al Refugio Bailey</span>
                    <h1>{'Somos la Esperanza de los peluditos '}<span className="wrap">{text}</span></h1>
                    <p><font color="white" ><h3>La crueldad animal es, por desgracia, uno de los graves problemas que enfrenta el mundo, pues cada vez más se observan estos seres vivos recibiendo maltratos de personas inescrupulosas; pero lo que realmente preocupa es que son los mismos dueños que hacen esto.
                    <br/>
                    <br/>
                    Este problema se observa en la calle, zoológicos, casas, circos e incluso en los diferentes ecosistemas que han dejado de pertenecer a los seres vivos que los habitan.
                    <br/>
                    Por ello, aquí haremos un repaso por las mejores frases sobre el maltrato animal, que animan a cambiar el mundo para mejor.
                    </h3></font></p>
                    <button>Mas Informacion<ArrowRightCircle size={25}/></button>
                </Col>
                <Col xs={20} md={6} xl={5} width="50px">
                    <img src="https://images.vexels.me/media/users/3/202268/isolated/preview/81ec46f768b35a2a23d7a30f7b1d30bf-red-dog-footprint-flat.png" alt="Header"/>
                </Col>
            </Row>
        </Container>
    </section>
  )
}
