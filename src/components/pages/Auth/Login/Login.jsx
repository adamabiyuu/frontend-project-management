import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Paper, Stack, Typography } from '@mui/material';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import * as Yup from 'yup';

import AuthLayout from '@/components/layouts/AuthLayout';
import TextField from '@/components/ui/Forms/TextField';
import services from '@/services';
import session from '@/utils/session';

const loginSchema = Yup.object({
  email: Yup.string()
    .required('Email harus diisi')
    .email('Format email tidak valid'),
  password: Yup.string().required('Password harus diisi'),
});

const Login = () => {
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const { control, handleSubmit } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = async (formValues) => {
    setLoading(true);
    const response = await services.auth.login(formValues);
    session.setSession(response.data.data.access_token);
    setLoading(false);
    navigate('/');
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
            <TextField
              id={'email'}
              label={'Email'}
              control={control}
              name="email"
            />
            <TextField
              id={'password'}
              label={'Password'}
              control={control}
              name="password"
              secureText
            />
            <Button
              type="submit"
              variant="contained"
              loading={loading}
              fullWidth
            >
              Masuk ke akun Anda
            </Button>
            <Button
              type="button"
              variant="text"
              onClick={() => navigate('/signup')}
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

// import { Button, Paper, Stack, Typography } from '@mui/material';
// import {  useForm } from 'react-hook-form';
// import { useNavigate } from 'react-router';
// import * as Yup from 'yup';
// import {yupResolver} from '@hookform/resolvers/yup';

// import AuthLayout from '@/components/layouts/AuthLayout';
// import TextField from '@/components/ui/Forms/TextField';
// import session from '@/utils/session';
// import { useState } from 'react';
// import services from '@/services';

// const loginFormSchema = Yup.object({
//   email: Yup.string().email().required(),
//   password: Yup.string().required(),
// });

// const Login = () => {
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();

//   const { control, handleSubmit } = useForm({
//     resolver: yupResolver(loginFormSchema),
//   });

//   const onSubmit = async (formValues) => {
//     console.log('FORM VALUES:', formValues);
//     setLoading(true);
//     try {
//       const response = await services.auth.login(formValues);
//       session.setSession(response.data.data.access_token);
//       navigate('/');
//     } catch (error) {
//       // console.log("login gagal", error);

//       console.log(error);
//       console.log(error.code);
//       console.log(error.message);
//       console.log(error.response);
//       console.log(error.request);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <AuthLayout>
//       <Stack
//         flexDirection={'column'}
//         alignItems={'center'}
//         justifyContent={'center'}
//         height={'100vh'}
//         width={'100%'}
//       >
//         <Paper
//           sx={{
//             padding: 2,
//             width: 500,
//           }}
//         >
//           <Typography
//             variant="h5"
//             component={'h1'}
//             align="center"
//             marginBottom={2}
//           >
//             Masuk
//           </Typography>
//           <Stack
//             flexDirection={'column'}
//             gap={1}
//             component={'form'}
//             onSubmit={handleSubmit(onSubmit)}
//           >
//             <TextField label={'Email'} control={control} name="email" />
//             <TextField label={'Password'} control={control} name="password" />
//             <Button type="submit" variant="contained" loading={loading} fullWidth>
//               Masuk ke akun Anda
//             </Button>

//             <Button
//               onClick={() => navigate('/signup')}
//               type="button"
//               variant="text"
//               fullWidth
//             >
//               Daftar baru
//             </Button>
//           </Stack>
//         </Paper>
//       </Stack>
//     </AuthLayout>
//   );
// };

// export default Login;
