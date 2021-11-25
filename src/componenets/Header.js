import React from 'react'
import styled from 'styled-components';

function Header() {
    return (
      <Nav>
          <Logo src="/images/logo.svg"/>
          <NavMenu>
              <a href="/">
                  <img src="/images/home-icon.svg"/>
                  <span>HOME</span>
              </a>
              <a>
                  <img src="/images/search-icon.svg"/>
                  <span>SEARCH</span>
              </a>
              <a>
                  <img src="/images/watchlist-icon.svg"/>
                  <span>WATCHLIST</span>
              </a>
              <a>
                  <img src="/images/original-icon.svg"/>
                  <span>ORIGINALS</span>
              </a>
              <a>
                  <img src="/images/movie-icon.svg"/>
                  <span>MOVIES</span>
              </a>
              <a>
                  <img src="/images/series-icon.svg"/>
                  <span>SERIES</span>
              </a>
          </NavMenu>
          <LogIn>
              <a href="/login">Login</a>
          </LogIn>
          {/* <UserImg src="https://lh3.googleusercontent.com/ogw/ADea4I7s4LPSsdMQrBJBYl2izutOZQtoWqPpvJUBwojbXg=s32-c-mo"/> */}
      </Nav>
    )
}

export default Header

const Nav = styled.nav`
   height:70px;
   background:#090b13;
   display:flex;
   align-items:center;
   padding:0 36px;
   overflow-x:hidden;
`
const Logo = styled.img`
   width:80px;

`
const LogIn = styled.div`
    width:100px;
    height:50px;
    z-index:1;
    background-color: #dbfff4;
    border-radius: 10px;
    background: #606c88;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #3f4c6b, #606c88);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #3f4c6b, #606c88); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    display:flex;
    align-items:center;
    justify-content:center;

    a{
         
        padding:0 12px; 
        cursor:pointer; 
       text-decoration: none;
   }
`

const NavMenu = styled.div`
   display:flex;
   flex:1;
   margin-left:20px;
   align-items:center;
   a{
    display:flex;
    align-items:center;
    padding:0 12px; 
    cursor:pointer;

    img{
        height:20px;
    }
    span{
        font-size:20px;
        letter-spacing:1.42px;
        position:relative;
        &:after{
            content:"";
            height:2px;
            background:white;
            position:absolute;
            left:0;
            right:0; 
            bottom:-6px;
            opacity:0;
            transition: all 250ms cubic-bezier(0.25,0.46,0.45,0.94) 0s;
            transform:scaleX(0);
        }
    }
    &:hover{
        span:after{
            opacity:1;
            transform:scaleX(1);
        }
    }

   }

}
`
const UserImg = styled.img`
    border-radius:50%;
    cursor:pointer;
`