import styled from "styled-components";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {checkIsAuth, LOGIN} from "../redux/authSlice";
import {Link, useNavigate} from "react-router-dom";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(rgba(255, 255, 255, 0.5),
  rgba(255, 255, 255, 0.5)),
  url("https://images.hdqwalls.com/wallpapers/chloe-bennet-2019-4k-g9.jpg") no-repeat center fixed;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
`;

const Linked = styled.div`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

export const Login = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const isAuth = !!useSelector(checkIsAuth)

    const [usernameValue, setUsernameValue] = useState('');
    const [passwordValue, setPasswordValue] = useState('');

    const handleLogin = (e) => {
        e.preventDefault()
        dispatch(LOGIN({username: usernameValue, password: passwordValue}))
    }

    useEffect(() => {
        if (isAuth) navigate('/')
    }, [isAuth]);


    return (
        <Container>
            <Wrapper>
                <Title>SIGN IN</Title>
                <Form>
                    <Input onChange={(e) => setUsernameValue(e.target.value)} placeholder="username"/>
                    <Input type={'password'} onChange={(e) => setPasswordValue(e.target.value)} placeholder="password"/>
                    <Button onClick={handleLogin}>LOGIN</Button>
                    <Link><Linked>DO NOT YOU REMEMBER THE PASSWORD?</Linked></Link>
                    <Link to={'/register'}><Linked>CREATE A NEW ACCOUNT</Linked></Link>
                </Form>
            </Wrapper>
        </Container>
    )
}