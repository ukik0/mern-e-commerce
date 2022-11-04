import styled from "styled-components";
import SearchIcon from '@mui/icons-material/Search';
import {Badge} from "@mui/material";
import {ShoppingCartOutlined} from "@mui/icons-material";
import {mobile} from "../utils/responsive";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {checkIsAuth, logout} from "../redux/authSlice";

const Container = styled.div`
  height: 60px;
  ${mobile({height: "50px"})}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({padding: "10px 0px"})}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({display: "none"})}
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
  ${mobile({width: "50px"})}
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  ${mobile({fontSize: "24px"})}
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({flex: 2, justifyContent: "center"})}
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({fontSize: "12px", marginLeft: "10px"})}
`;


export function Navbar() {
    const dispatch = useDispatch()
    const quantity = useSelector((state) => state?.cart.products)
    const isAuth = !!useSelector(checkIsAuth)

    const handleLogout = () => {
        dispatch(logout())
        localStorage.removeItem('token')
    }

    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>En</Language>
                    <SearchContainer>
                        <Input placeholder="Search"/>
                        <SearchIcon style={{color: "gray", fontSize: 16}}/>
                    </SearchContainer>
                </Left>
                <Center>
                    <Link to={'/'} style={{color: 'inherit', border: 'none', textDecoration: 'none'}}>
                        <Logo>E-Commerce.</Logo>
                    </Link>
                </Center>
                <Right>
                    {isAuth ? <MenuItem onClick={handleLogout}>Выйти</MenuItem>: (
                        <>
                            <Link style={{textDecoration: 'none', color: 'inherit'}} to={'/register'}>
                                <MenuItem>REGISTER</MenuItem>
                            </Link>
                            <Link style={{textDecoration: 'none', color: 'inherit'}} to={'/login'}>
                                <MenuItem>SIGN IN</MenuItem>
                            </Link>
                        </>
                    )}
                    <Link to={'/cart'}>
                        <MenuItem>
                            <Badge badgeContent={quantity.length} color="primary">
                                <ShoppingCartOutlined/>
                            </Badge>
                        </MenuItem>
                    </Link>
                </Right>
            </Wrapper>
        </Container>
    )
}