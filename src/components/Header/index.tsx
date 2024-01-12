import { Link } from "react-router-dom";
import { Container, ListItem } from "./styles";

export const Header: React.FC = () => {
  return (
    <Container>
      <ListItem>
        <Link to="/">Home</Link>
      </ListItem>
      <ListItem>
        <Link to="/users">Usuários</Link>
      </ListItem>
      <ListItem>
        <Link to="/posts">Posts</Link>
      </ListItem>
      <ListItem>
        <Link to="/comments">Comments</Link>
      </ListItem>
    </Container>
  );
}