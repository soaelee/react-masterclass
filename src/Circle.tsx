import styled from "styled-components";
interface CircleProps {
  bgColor: string;
  borderColor?: string;
  text?: string;
}

interface ContainerProps {
  bgColor: string;
  borderColor: string;
}
const Container = styled.div<ContainerProps>`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: ${(props) => props.bgColor};
  border: 10px solid ${(props) => props.borderColor};
`;

const Circle = ({
  bgColor,
  borderColor,
  text = "default text",
}: CircleProps) => {
  return (
    <Container bgColor={bgColor} borderColor={borderColor ?? "white"}>
      {text}
    </Container>
  );
};

export default Circle;
