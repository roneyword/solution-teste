// import { useUser } from "../../hooks/useUser";
import { FormUser } from "../../components/FormUser";
import { Container } from "../../styles/grid";
import { Title, Wrapper } from "./styles";

export default function Home() {
  return (
    <Container>
      <Wrapper>
        <Title>Cadastro de usuários</Title>
        <FormUser />
      </Wrapper>
    </Container>
  );
}
