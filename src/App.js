import styled from "styled-components";

// 'As' and Attrs

const Father = styled.div`
  display: flex;
`;

const Btn = styled.button`
  color: white;
  background-color: tomato;
  border: 0;
  border-radius: 15px;
`;

const Input = styled.input.attrs({ required: true, minLength: 10 })`
  background-color: tomato;
`;
function App() {
  return (
    <Father>
      <Input />
      <Input />
      <Input />
      <Btn as="a" href="/">
        Login
      </Btn>
    </Father>
  );
}

export default App;
