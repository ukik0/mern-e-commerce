import styled from "styled-components";
import {Products} from "../Components/Products";
import {Newsletter} from "../Components/Newsletter";
import {Footer} from "../Components/Footer";
import {Announcement} from "../Components/Announcement";
import {Navbar} from "../Components/Navbar";
import {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";

const Container = styled.div``;

const Title = styled.h1`
  margin: 20px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
`;

const Option = styled.option``;


export const ProductPage = () => {
    const {pathname} = useLocation()
    const category = pathname.split('/')[2]

    const [filter, setFilter] = useState({});
    console.log(filter)

    useEffect(() => {
        window.scroll(0,0)
    }, [])


    return (
        <Container>
            <Announcement/>
            <Navbar/>
            <Title>Dresses</Title>
            <FilterContainer>
                <Filter>
                    <FilterText>Filter Products:</FilterText>
                    <Select name={'color'} onChange={(e) => setFilter({...filter, [e.target.name]: e.target.value})}>
                        <Option disabled selected>
                            Color
                        </Option>
                        <Option>White</Option>
                        <Option>Black</Option>
                        <Option>Red</Option>
                        <Option>Blue</Option>
                        <Option>Yellow</Option>
                        <Option>Green</Option>
                    </Select>
                    <Select name={'size'} onChange={(e) => setFilter({...filter, [e.target.name]: e.target.value})}>
                        <Option disabled selected>
                            Size
                        </Option>
                        <Option>XS</Option>
                        <Option>S</Option>
                        <Option>M</Option>
                        <Option>L</Option>
                        <Option>XL</Option>
                    </Select>
                </Filter>
                <Filter>
                    <FilterText>Sort Products:</FilterText>
                    <Select name={'sort'} onChange={(e) => setFilter({...filter, [e.target.name]: e.target.value})}>
                        <Option value={'newest'} selected>Newest</Option>
                        <Option value={'asc'}>Price (asc)</Option>
                        <Option value={'desc'}>Price (desc)</Option>
                    </Select>
                </Filter>
            </FilterContainer>
            <Products category={category} filter={filter}/>
            <Newsletter/>
            <Footer/>
        </Container>
    )
}