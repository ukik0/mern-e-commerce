import styled from "styled-components";
import {popularProducts} from "../Assets/data";
import {Product} from "./Product";
import {useEffect, useState} from "react";
import axios from "../utils/axios";

const Container = styled.div`
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

export const Products = ({category, filter, sort}) => {

    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
        const getProduct = async () => {
            const {data} = await axios.get(category ? `/product?category=${category}` : `/product`)

            setProducts(data)
        }

        getProduct()
    }, [category])


    useEffect(() => {
        category &&
        setFilteredProducts(
            products.filter((item) =>
                Object.entries(filter).every(([key, value]) =>
                    item[key].includes(value)
                )
            )
        );
    }, [category, filter, products]);

    useEffect(() => {
        if (sort === "newest") {
            setFilteredProducts((prev) =>
                [...prev].sort((a, b) => a.createdAt - b.createdAt)
            );
        } else if (sort === "asc") {
            setFilteredProducts((prev) =>
                [...prev].sort((a, b) => a.price - b.price)
            );
        } else {
            setFilteredProducts((prev) =>
                [...prev].sort((a, b) => b.price - a.price)
            );
        }

    }, [sort])



    return (
        <Container>
            {category ? filteredProducts.map((item) => (
                <Product item={item} key={item._id}/>)) : products.map((item) => (
                <Product item={item} key={item._id}/>))}
        </Container>
    )
}