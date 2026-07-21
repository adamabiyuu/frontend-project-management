import { colors, Paper, Typography } from '@mui/material';

import SidebarLayout from '../../layouts/SidebarLayout/SidebarLayout';
// import SidebarLayout from '@/components/layouts/SidebarLayout';

const Dashboard = () => {
  // const [openModal, setOpenModal] = useState(false);

  // const handleOpen = () => setOpenModal(true);
  // const handleClose = () => setOpenModal(false);

  return (
    <SidebarLayout pageTitle="Dashboard">
      <Paper 
        sx={{ 
          padding: 2,
          background: colors.lightBlue[100],
         }}
      >
        <Typography>Menampilkan dashboard di sini</Typography>
      </Paper>
    </SidebarLayout>
    // <Box>
    //   <Button type="button" variant="contained" onClick={handleOpen}>
    //     Open Modal
    //   </Button>
    //   <Modal open={openModal} handleClose={handleClose} title={'Judul Modal'}>
    //     <Box
    //       sx={{
    //         padding: 2,
    //         width: 500,
    //       }}
    //     >
    //       Isi Modal
    //     </Box>
    //   </Modal>
    // </Box>
  );
};

export default Dashboard;
