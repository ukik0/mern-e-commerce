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
    const [sort, setSort] = useState("newest");

    const handleFilters = (e) => {
        const value = e.target.value;
        setFilter({
            ...filter,
            [e.target.name]: value,
        });
    };

    useEffect(() => {
        window.scroll(0,0)
    }, [])


    return (
        <Container>
            <Announcement/>
            <Navbar/>
            <Title>{category}</Title>
            <FilterContainer>
                <Filter>
                    <FilterText>Filter Products:</FilterText>
                    <Select name="color" onChange={handleFilters}>
                        <Option disabled>
                            Color
                        </Option>
                        <Option>white</Option>
                        <Option>black</Option>
                        <Option>red</Option>
                        <Option>blue</Option>
                        <Option>yellow</Option>
                        <Option>green</Option>
                    </Select>
                    <Select name="size" onChange={handleFilters}>
                        <Option disabled>
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
                    <Select onChange={(e) => setSort(e.target.value)}>
                        <Option value={'newest'}>Newest</Option>
                        <Option value={'asc'}>Price (asc)</Option>
                        <Option value={'desc'}>Price (desc)</Option>
                    </Select>
                </Filter>
            </FilterContainer>
            <Products category={category} filter={filter} sort={sort}/>
            <Newsletter/>
            <Footer/>
        </Container>
    )
}