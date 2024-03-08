import styled from "styled-components";

interface ContainerProps {
  bgColor: string;
}
const Container = styled.div<ContainerProps>`
  width: 200px;
  height: 200px;
  border-radius: 100px;
  background-color: ${(props) => props.bgColor};
`;

interface CircleProps {
  bgColor: string;
}
const Circle = ({ bgColor }: CircleProps) => {
  return <Container bgColor={bgColor} />;
};

export default Circle;

interface PlayerShape {
  name: string;
  age: number;
}

const sayHello = (player: PlayerShape) =>
  `Hello ${player.name} you are ${player.age} years old.`;

sayHello({ name: "soae", age: 365 });
