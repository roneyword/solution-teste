import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { FormContainer } from './styles';
import { useUser } from '../../hooks/useUser';
import { Button } from '../Button';
import { Input } from '../Input';
import { Textarea } from '../Textarea';

const schema = z.object({
  name: z.string()
    .min(2, { message: 'Nome deve ter pelo menos 2 caracteres' })
    .max(50, { message: 'Nome não pode ter mais de 50 caracteres' }),
  email: z.string()
    .email({ message: 'Insira um endereço de e-mail válido' }),
  message: z.string()
    .min(5, { message: 'A mensagem deve ter pelo menos 5 caracteres' })
    .max(500, { message: 'A mensagem não pode ter mais de 500 caracteres' }),
});

type FormData = z.infer<typeof schema>

export const FormUser: React.FC = () => {
  const {
    handleSubmit,
    register,
    formState: { errors }
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      message: ""
    },
  });
  const { handleChangeUserName } = useUser();


  const onSubmit: SubmitHandler<FormData> = (data: any) => handleChangeUserName(data.name)


  return (
    <FormContainer onSubmit={handleSubmit(onSubmit)}>
      {/* <Controller
        control={control}
        name="name"
        render={({ field: { onBlur, onChange, value, ref } }) => (
          <Input
            id="name"
            label="Nome"
            isRequired
            type="text"
            name="name"
            value={value}
            error={errors.name?.message}
            onChange={onChange}
            onBlur={onBlur}
            ref={ref}
          />
        )}
      /> */}

      {/* <Controller
        control={control}
        name="email"
        render={({ field: { onBlur, onChange, value, ref } }) => (
          <Input
            id="email"
            label="E-mail"
            isRequired
            type="text"
            name="email"
            value={value}
            error={errors.email?.message}
            onChange={onChange}
            onBlur={onBlur}
            ref={ref}
          />
        )}
      /> */}

      {/* <Controller
        control={control}
        name="message"
        render={({ field: { onBlur, onChange, value, ref } }) => (
          <Textarea
            id="message"
            label="Mensagem"
            isRequired
            name="message"
            value={value}
            error={errors.message?.message}
            onChange={onChange}
            onBlur={onBlur}
            ref={ref}
          />
        )}
      /> */}

      <Input
        id="name"
        label="Nome"
        isRequired
        type="text"
        {...register('name')}
        error={errors.name?.message}
      />

      <Input
        id="email"
        label="E-mail"
        isRequired
        type="text"
        {...register('email')}
        error={errors.email?.message}
      />

      <Textarea
        id="message"
        label="Mensagem"
        isRequired
        {...register('message')}
        error={errors.message?.message}
      />


      <Button type="submit">Submit</Button>
    </FormContainer>
  );
};