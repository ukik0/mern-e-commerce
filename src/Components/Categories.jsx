import styled from "styled-components";
import {categories} from "../Assets/data";
import {CategoryItem} from "./CategoryItem";
import {mobile} from "../utils/responsive";

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  ${mobile({ padding: "0px", flexDirection:"column" })}
`;


export function Categories() {

    return (
        <Container>
            {categories.map((category) => (
                <CategoryItem key={category.id} item={category}/>
            ))}
        </Container>
    )
}