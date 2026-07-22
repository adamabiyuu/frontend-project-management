import { Button, Paper, Stack, Typography } from '@mui/material';
import {  useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';

import AuthLayout from '@/components/layouts/AuthLayout';
import TextField from '@/components/ui/Forms/TextField';
import session from '@/utils/session';
import { useState } from 'react';
import services from '@/services';


const Login = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const { control, handleSubmit } = useForm({});

  const onSubmit = async (formValues) => {
    console.log('FORM VALUES:', formValues);
    setLoading(true);
    try {
      const response = await services.auth.login(formValues);
      session.setSession(response.data.data.access_token);
      navigate('/');
    } catch (error) {
      // console.log("login gagal", error);

      console.log(error);
      console.log(error.code);
      console.log(error.message);
      console.log(error.response);
      console.log(error.request);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout>
      <Stack
        flexDirection={'column'}
        alignItems={'center'}
        justifyContent={'center'}
        height={'100vh'}
        width={'100%'}
      >
        <Paper
          sx={{
            padding: 2,
            width: 500,
          }}
        >
          <Typography
            variant="h5"
            component={'h1'}
            align="center"
            marginBottom={2}
          >
            Masuk
          </Typography>
          <Stack
            flexDirection={'column'}
            gap={1}
            component={'form'}
            onSubmit={handleSubmit(onSubmit)}
          >
            <TextField label={'Email'} control={control} name="email" />
            <TextField label={'Password'} control={control} name="password" />
            <Button type="submit" variant="contained" loading={loading} fullWidth>
              Masuk ke akun Anda
            </Button>

            <Button
              onClick={() => navigate('/signup')}
              type="button"
              variant="text"
              fullWidth
            >
              Daftar baru
            </Button>
          </Stack>
        </Paper>
      </Stack>
    </AuthLayout>
  );
};

export default Login;
