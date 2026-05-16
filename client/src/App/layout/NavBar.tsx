import { Group } from "@mui/icons-material";
import { Box, AppBar, Toolbar, Container, MenuItem, Typography, Button, MenuList } from "@mui/material";

export default function NavBar() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{
                backgroundImage: 'linear-gradient(135deg,  #A63E00 0%, #D95F02 20%, #F47A20 50%)'
            }}>
                <Container maxWidth='xl'>
                    <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <MenuList>
                            <Button sx={{ display: 'flex', gap: 2 }}>
                                <Group fontSize="large" sx={{ color: 'white' }} />
                                <Typography variant="h4" sx={{ fontWeight: "bold", color: "white" }}>BarbarianMeets</Typography>
                            </Button >
                        </MenuList>
                        <MenuList sx={{ display: 'flex' }}>
                            <MenuItem sx={{ fontSize: '1rem', fontWeight: 'bold', textTransform: 'uppercase' }}>
                                Events
                            </MenuItem>
                            <MenuItem sx={{ fontSize: '1rem', fontWeight: 'bold', textTransform: 'uppercase' }}>
                                About
                            </MenuItem>
                            <MenuItem sx={{ fontSize: '1rem', fontWeight: 'bold', textTransform: 'uppercase' }}>
                                Contact
                            </MenuItem>
                        </MenuList>
                        <Button size="large" variant="contained" color="warning">Create Event</Button>
                    </Toolbar>
                </Container>

            </AppBar>
        </Box>


    )
}
