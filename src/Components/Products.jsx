import styled from "styled-components";
import {popularProducts} from "../Assets/data";
import {Product} from "./Product";

const Container = styled.div`
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

export const Products = ({category, filter}) => {
    console.log(category, filter)


    return (
        <Container>
            {popularProducts.map((item) => (
                <Product item={item} key={item.id}/>
            ))}
        </Container>
    )
}