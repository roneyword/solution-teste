import { useEffect, useState } from "react";
import { Accordion } from "../../components/Accordion";
import { API } from "../../services/placeholder.service";
import { useUser } from "../../hooks/useUser";
import { WelcomeMessage } from "../../components/WelcomeMessage";
import { Title } from "./styles";
import { Container } from "../../styles/grid";

interface IItem {
  id: number;
  title: string;
  content: string;
}

export default function Posts() {
  const { userName } = useUser();
  const [items, setItems] = useState<IItem[]>([]);
  const [error, setError] = useState<string | null>(null);

  async function onLoadItems() {
    try {
      const data = await API('postss');
      setItems(data.map((item: any) => ({ ...item, content: item.body })));
      setError(null);
    } catch (error) {
      console.error("Erro ao carregar os itens:", error);
      setError("Erro ao carregar os itens. Tente novamente mais tarde.");
    }
  }

  useEffect(() => {
    onLoadItems();

    return () => setItems([]);
  }, []);

  return (
    <Container>
      <WelcomeMessage name={userName} />
      <Title>Lista de posts</Title>
      {error ? (
        <p>{error}</p>
      ) : (
        <Accordion items={items} />
      )}
    </Container>
  );
}
