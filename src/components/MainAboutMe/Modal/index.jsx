
// import * as React from 'react';
// import Backdrop from '@mui/material/Backdrop';
// import Box from '@mui/material/Box';
// import Modal from '@mui/material/Modal';
// import Fade from '@mui/material/Fade';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
// import RalewayWoff2 from './fonts/Raleway-Regular.woff2';


// const style = {
//   position: 'absolute',
//   top: '50%',
//   left: '50%',
//   transform: 'translate(-50%, -50%)',
//   width: 400,
//   bgcolor: 'background.paper',
//   border: '2px solid #000',
//   boxShadow: 24,
//   p: 4,
// };

// const theme = createTheme({
//   typography: {
//     fontFamily:'Lato',
//   },
//   components: {
//     MuiCssBaseline: {
//       styleOverrides: `
//         @font-face {
//           font-family: 'Raleway';
//           font-style: normal;
//           font-display: swap;
//           font-weight: 400;
//           src: local('Raleway'), local('Raleway-Regular'), url(${RalewayWoff2}) format('woff2');
//           unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
//         }
//       `,
//     },
//   },
// });

// export default function TransitionsModal() {
//   const [open, setOpen] = React.useState(false);
//   const handleOpen = () => setOpen(true);
//   const handleClose = () => setOpen(false);

//   return (
//     <div>
//       <Button onClick={handleOpen}>Check my Stacks</Button>
//       <Modal
//         aria-labelledby="transition-modal-title"
//         aria-describedby="transition-modal-description"
//         open={open}
//         onClose={handleClose}
//         closeAfterTransition
//         slots={{ backdrop: Backdrop }}
//         slotProps={{
//           backdrop: {
//             timeout: 500,
//           },
//         }}
//       >
//         <Fade in={open}>
//           <ThemeProvider theme={theme}>
//             <CssBaseline />
//               <Box sx={{fontFamily: 'Lato'}}>
//                 <Typography id="transition-modal-title" variant="h6" component="h2">
//                   Text in a modal
//                 </Typography>
//                 <Typography id="transition-modal-description" sx={{ mt: 2 }}>
//                   Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
//                 </Typography>
//               </Box>
//           </ThemeProvider>
//         </Fade>
//       </Modal>
//     </div>
//   );
// }




