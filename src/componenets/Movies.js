import React from 'react'
import styled from 'styled-components';

function Movies(props) {
    return (
        <Container>
            <h4>{props.title}</h4>
            <Content>
                
                <Wrap>
                    <a href="/detail"><img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/473/1080473-v-d97e637cb29d"  /></a>
                </Wrap>
                <Wrap>
                <a href="/detail"><img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/473/1080473-v-d97e637cb29d"  /></a>
                </Wrap>
                <Wrap>
                    <a href="/detail"><img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/473/1080473-v-d97e637cb29d"  /></a>
                </Wrap>
                <Wrap>
                <a href="/detail"><img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/473/1080473-v-d97e637cb29d"  /></a>
                </Wrap>
                <Wrap>
                    <a href="/detail"><img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/473/1080473-v-d97e637cb29d"  /></a>
                </Wrap>
                <Wrap>
                <a href="/detail"><img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/473/1080473-v-d97e637cb29d"  /></a>
                </Wrap>
                <Wrap>
                    <a href="/detail"><img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/473/1080473-v-d97e637cb29d"  /></a>
                </Wrap>
                <Wrap>
                <a href="/detail"><img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/473/1080473-v-d97e637cb29d"  /></a>
                </Wrap>
              
            </Content>
        </Container>
    )
}

export default Movies


const Container = styled.div`
   margin-top:20px;
`

const Content = styled.div`
    display:grid;
    padding:30px 0 30px;
    grid-template-columns:repeat(8,minmax(0,1fr));
    grid-gap:25px;
`

const Wrap = styled.div`
    overflow:hidden;
    border-radius:10px;
    border:3px solid rgba(249,249,249,0.1);
    box-shadow:rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    cursor:pointer;
    transition: all 250ms cubic-bezier(0.25,0.46,0.45,0.94) 0s;
    img{
        width:100%;
        height:100%;
        object-fit:cover;
       
    }
    &:hover{
        transform:scale(1.05);
        border-color:rgba(249,249,249,0.8);
        box-shadow:rgb(0 0 0 / 80%) 0px 40px 58px -16px,
        rgb(0 0 0 / 73%) 0px 30px 22px -10px;
    }

`