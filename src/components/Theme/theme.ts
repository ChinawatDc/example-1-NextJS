import { Prompt } from 'next/font/google';
import { createTheme } from '@mui/material/styles';

// const colorPrimary = "linear-gradient(180deg, #26A2FF 64.06%, #036 100%, #036 100%)";

const prompt = Prompt({
    weight: ['300', '400', '500', '700'],
    subsets: ['latin'],
    display: 'swap',
});

const theme = createTheme({
    palette: {
        primary: {
            main: '#26A2FF',
        },
    },
    typography: {
        fontFamily: prompt.style.fontFamily,
    },
    components: {
        MuiAlert: {
            styleOverrides: {
                root: ({ ownerState }) => ({
                    ...(ownerState.severity === 'info' && {
                        backgroundColor: '#60a5fa',
                    }),
                }),
            },
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    fontWeight: 600,
                },
            },
        },
        MuiDrawer: {
            styleOverrides: {
                paper: {
                    background: '#ffff',
                }
            }
        }
    },
});


export default theme;
