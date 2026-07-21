// import { Settings } from '@mui/icons-material';
// import { colors, Paper, Stack, Typography } from '@mui/material';
import { colors, Paper, Typography } from '@mui/material';

// import Avatar from '../../../ui/Avatar';
// import Dropdown from '../../../ui/Dropdown';
import SidebarLayout from '../../../layouts/SidebarLayout/SidebarLayout';

const DetailProject = () => {
  return (
    <SidebarLayout
      pageTitle="Dashboard"
      breadcrumbs={[
        {
          label: 'Daftar Proyek',
          href: '/projects',
        },
        {
          label: 'Agency Software Engineering',
        }
      ]}
    >
      <Paper
        sx={{
          padding: 2,
          background: colors.lightBlue[100],
        }}
      >
        <Typography>Menampilkan detail proyek di sini</Typography>
      </Paper>
    </SidebarLayout>
    // <Stack
    //   sx={{
    //     height: '100vh',
    //     width: '100%',
    //   }}
    //   justifyContent={'center'}
    //   alignItems={'center'}
    //   direction={'row'}
    //   spacing={2}
    // >
    //   <Avatar
    //     text={'adam abiyu'}
    //     onClick={() => {
    //       console.log('handle click avatar');
    //     }}
    //   />
    //   <Dropdown
    //     icon={<Settings />}
    //     options={[
    //       {
    //         label: 'Tutup proyek ini',
    //         onClick() {
    //           console.log('handle close project');
    //         },
    //       },
    //       {
    //         label: 'Ubah deadline',
    //         onClick() {
    //           console.log('handle update deadline project');
    //         },
    //       },
    //     ]}
    //   />
    // </Stack>
  );
};

export default DetailProject;
