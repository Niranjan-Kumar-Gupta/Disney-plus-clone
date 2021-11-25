import React from 'react'
import styled from 'styled-components';
import Movies from './Movies';
function Detail() {
    return (
        <Container>
             <Background>
                
                <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/472/1080472-h-8d168a956838"/>
            </Background>
            <ImageTitle>
               
                <About>
                   <h5>SUBSCRIBER</h5>
                   <h1>Cash</h1>
                   <h3>1 hr 58 min . 2021 . Comedy . U/A 16+ .Hindi</h3>
                   <p>Admist the chos of demonetisation,down-on-luck Armaan finds a business opportunity in money laundering.Where will this shortcut take him?</p>
                  
                </About>
                <PlayWatchShare>
                       
                       <a>
                            <img src="/images/3669295_ic_white_filled_play_circle_icon.svg"/>
                            <h4>Watch Movie</h4>
                        </a>

                        <WatchShare>
                            <a>
                                <img src="/images/watchlist-icon.svg"/>
                                <h4>WATCHLIST</h4>
                            </a>
                            <a>
                                <img src="data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjZmZmZmZmIiBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik0wIDBoMjR2MjRIMHoiIGZpbGw9Im5vbmUiLz4KICAgIDxwYXRoIGQ9Ik0xOCAxNi4wOGMtLjc2IDAtMS40NC4zLTEuOTYuNzdMOC45MSAxMi43Yy4wNS0uMjMuMDktLjQ2LjA5LS43cy0uMDQtLjQ3LS4wOS0uN2w3LjA1LTQuMTFjLjU0LjUgMS4yNS44MSAyLjA0LjgxIDEuNjYgMCAzLTEuMzQgMy0zcy0xLjM0LTMtMy0zLTMgMS4zNC0zIDNjMCAuMjQuMDQuNDcuMDkuN0w4LjA0IDkuODFDNy41IDkuMzEgNi43OSA5IDYgOWMtMS42NiAwLTMgMS4zNC0zIDNzMS4zNCAzIDMgM2MuNzkgMCAxLjUtLjMxIDIuMDQtLjgxbDcuMTIgNC4xNmMtLjA1LjIxLS4wOC40My0uMDguNjUgMCAxLjYxIDEuMzEgMi45MiAyLjkyIDIuOTIgMS42MSAwIDIuOTItMS4zMSAyLjkyLTIuOTJzLTEuMzEtMi45Mi0yLjkyLTIuOTJ6Ii8+Cjwvc3ZnPg=="/>
                                <h4>SHARE</h4>
                            </a>
                        </WatchShare>
                       
                       </PlayWatchShare>
            </ImageTitle>
            
          <Movies title={"Trailers&Extras"}/> 
          <Movies title={"More Like This"}/> 
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
    top:0;
    width:98%;
    background: linear-gradient(90deg,#030b17 40%,rgba(0,0,0,0.71) 45%,rgba(0,0,0,0.1) 100%);
    min-height:402px;
    margin: 0 auto;
    
       

`

const Background = styled.div`
    position:absolute;
    right:5%;
    z-index:-1;
`

const PlayWatchShare = styled.div`
        z-index:10;
        display:flex;
        align-items:center;
        padding:50px 40px 0px 50px;
        width:55%;  
    a{
        
        flex:1;
        cursor:pointer;
        padding:10px 30px;
        display:flex;
        h4{
            padding-left:5px;
            
            font-size:15px;
        }

        img{
            height:20px;
        }
    
`
const WatchShare = styled.div`
    display:flex;
    
    a{
        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content:center;
        h4{
            font-size:15px;
        }
    }   
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
    h3{
        color:#909999;
    }
    p{
        color:#dadada;
        line-height:25px;
    }
   
`