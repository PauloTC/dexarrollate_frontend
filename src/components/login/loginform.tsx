"use client";
import { useForm, SubmitHandler, SubmitErrorHandler, Controller } from "react-hook-form"
import { DlButton, DlSelect, DlInput, DlHelperText } from "@alicorpdigital/dali-react";
import { useRouter } from "next/navigation";
import { Auth } from "@/api";
import { useState } from "react";
import { useAuth } from "@/hooks";

const authCtrl = new Auth();
type Inputs = {
  documentType: string
  identifier: string
  password: string
}

const LoginForm = () => {
  const router = useRouter();
  const { login } = useAuth();
  const [loading, setLoading] = useState(false);
  const [errorAuth, setErrorAuth] = useState(false);
  const { register, handleSubmit, control } = useForm<Inputs>({
    defaultValues: {
      documentType: 'dni',
      identifier: '',
      password: ''
    },
  })

  const onError: SubmitErrorHandler<Inputs> = (data) => console.log('bbbb', data);
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    setLoading(true);

    try {
      const response = await authCtrl.login(data);

      login(response.jwt);
      router.push("/inicio");
    } catch (error) {
      setErrorAuth(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="dl-flex dl-flex-col dl-gap-6">
      <DlSelect
        size="lg"
        items={[
          { value: "dni", label: "DNI" },
          { value: "ce", label: "CE" },
        ]}
        {...register('documentType')}
      />
      <Controller
        name='identifier'
        control={control}
        rules={{ required: 'Este campo es requerido.' }}
        render={({ field, formState: { errors } }) => {
          return (
            <DlInput
              placeholder='Documento'
              size="lg"
              helperText={errors.identifier?.message}
              status={errors.identifier ? 'error' : undefined}
              {...field}
              onChange={event => {
                const value = event.target.value.replace(/[^0-9,.]+/g, '');
                setErrorAuth(false);
                field.onChange(value);
              }}
            />
          )
        }}
      />
      <Controller
        name='password'
        control={control}
        rules={{ required: 'Este campo es requerido.' }}
        render={({ field, formState: { errors } }) => {
          return (
            <DlInput
              helperText={errors.password?.message}
              status={errors.password ? 'error' : undefined}
              placeholder="Contraseña"
              type='password'
              size="lg"
              {...field}
              onChange={event => {
                const value = event.target.value.replace(/[^0-9,.]+/g, '');
                setErrorAuth(false);
                field.onChange(value);
              }}
            />
          )
        }}
      />
      <div>
        {errorAuth &&
          <DlHelperText className='dl-mb-4 dl-text-sm' status='error'>
            Usuario o contraseña incorrectos. Por favor, inténtalo de nuevo.
          </DlHelperText>
        }
        <DlButton
          className="dl-mb-6"
          variant='highlight'
          size='lg'
          block
          loading={loading}
          onClick={handleSubmit(onSubmit, onError)}
        >
          Ingresar
        </DlButton>
      </div>
    </div>
  );
};

export default LoginForm;
