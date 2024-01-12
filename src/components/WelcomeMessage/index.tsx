import { WelcomeMessageContainer, WelcomeMessageTitle } from "./styles";

interface IWelcomeMessageProps {
  name: string;
}

export const WelcomeMessage: React.FC<IWelcomeMessageProps> = ({ name }) => {
  if (!name) return <></>;

  return (
    <WelcomeMessageContainer>
      <WelcomeMessageTitle>
        Bem-vindo, <strong>{name}.</strong>
      </WelcomeMessageTitle>
    </WelcomeMessageContainer>
  );
}