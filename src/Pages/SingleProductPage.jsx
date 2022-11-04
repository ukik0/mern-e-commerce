import styled from "styled-components";
import {Navbar} from "../Components/Navbar";
import {Announcement} from "../Components/Announcement";
import {Add, Remove} from "@mui/icons-material";
import {Newsletter} from "../Components/Newsletter";
import {Footer} from "../Components/Footer";
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import useFetching from "../Hooks/useFetching";
import {useDispatch, useSelector} from "react-redux";
import {addProduct} from "../redux/cartSlice";
import {checkIsAuth} from "../redux/authSlice";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
`;

const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Desc = styled.p`
  margin: 20px 0px;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
  border: 1px solid orange;
`;

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const Button = styled.button`
  padding: 15px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;
  
  &:disabled{
    background: #4cd964;
  }

  &:hover {
    background-color: #f8f4f4;
  }
`;

export const SingleProductPage = () => {
    const dispatch = useDispatch()
    const {id} = useParams()
    const isAuth = !!useSelector(checkIsAuth)

    const [quantity, setQuantity] = useState(1);
    const [color, setColor] = useState('white');
    const [size, setSize] = useState('XS');


    useEffect(() => {
        window.scroll(0, 0)
    }, [])

    const {data, loading} = useFetching(`/product/find/${id}`)

    const quantityProduct = (value) => {
        switch (value) {
            case 'inc':
                if (quantity < 5 && quantity >= 1) {
                    setQuantity(prev => prev += 1)
                }
                break
            case 'dec':
                if (quantity <= 10 && quantity > 1) {
                    setQuantity(prev => prev -= 1)
                }
                break
        }
    }


    function addProductCart() {
        dispatch(addProduct({...data, color, size, quantity}))
    }

    return (<Container>
        <Announcement/>
        <Navbar/>
        <Wrapper>
            <ImgContainer>
                <Image src={data.img}/>
            </ImgContainer>
            <InfoContainer>
                <Title>{data.title}</Title>
                <Desc>
                    {data.desc}
                </Desc>
                <Price>$ {data.price}</Price>
                <FilterContainer>
                    <Filter>
                        <FilterTitle>Color</FilterTitle>
                        {data.color?.map((color) => (
                            <FilterColor onClick={() => setColor(color)} key={color} color={color}/>))}
                    </Filter>
                    <Filter>
                        <FilterTitle>Size</FilterTitle>
                        <FilterSize onChange={(e) => setSize(e.target.value)}>
                            {data.size?.map((size) => (
                                <FilterSizeOption key={size}>{size}</FilterSizeOption>))}
                        </FilterSize>
                    </Filter>
                </FilterContainer>
                <AddContainer>
                    <AmountContainer>
                        <Remove sx={{cursor: 'pointer'}} onClick={() => quantityProduct('dec')}/>
                        <Amount>{quantity}</Amount>
                        <Add sx={{cursor: 'pointer'}} onClick={() => quantityProduct('inc')}/>
                    </AmountContainer>
                    <Button disabled={!isAuth} onClick={addProductCart}>ADD TO CART</Button>
                </AddContainer>
            </InfoContainer>
        </Wrapper>
        <Newsletter/>
        <Footer/>
    </Container>)
}