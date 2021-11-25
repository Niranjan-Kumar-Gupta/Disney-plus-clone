import React from 'react'
import styled from 'styled-components';

function Detail() {
    return (
        <Container>
             <Background>
                
                <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/472/1080472-h-8d168a956838"/>
               </Background>
            <ImageTitle>
               
                <About>
                   <h5>SUBSCRIBER</h5>
                   <h1>CASH</h1>
                   <h3>1 hr 58 min . 2021 . Comedy . U/A 16+ .Hindi</h3>
                   <p>Admist the chos of demonetisation,down-on-luck Armaan finds a business opportunity in money laundering. wWhere will this shortcut take him?</p>
                  
                </About>
                <PlayWatchShare>
                       
                       <a>
                            <img src="/images/watchlist-icon.svg"/>
                            <span>WATCHLIST</span>
                        </a>

                        <WatchShare>
                            <a>
                                <img src="/images/watchlist-icon.svg"/>
                                <h4>SHARE</h4>
                            </a>
                            <a>
                                <img src="/images/watchlist-icon.svg"/>
                                <h4>SHARE</h4>
                            </a>
                        </WatchShare>
                       
                       </PlayWatchShare>
            </ImageTitle>
           
        </Container>
    )
}

export default Detail
const Container = styled.div`
    min-height:calc(100vh - 70px);
    padding:0 calc(3.5vw + 5px);
    position:relative;

`

const ImageTitle = styled.div`
    width:98%;
    background: linear-gradient(90deg, rgba(0,0,0,1) 40%,rgba(0,0,0,0.71) 45%,rgba(0,0,0,0.1) 100%);
    min-height:402px;
    margin: 0 auto;
    
       

`

const Background = styled.div`
    position:fixed;
    right:5%;
    z-index:-1;
`

const PlayWatchShare = styled.div`
        display:flex;
        align-items:center;
        padding:50px 40px 0px 50px;
        width:55%;  
    a{
        
        flex:1;
        cursor:pointer;
        padding:0 30px;

        img{
            height:20px;
        }
    
`
const WatchShare = styled.div`
    display:flex;
    
        
    img{
        height:20px;
        margin:5px 15px;
    }
        
    
`
const About = styled.div`
    margin:20px;
    
    h5{
        color:#db882a;
        padding:50px 40px 0px 50px;
    } 
    h1,h3,p{
        padding-left:50px; 
        margin-top:20px;
        width:40%;
    } 
   
`