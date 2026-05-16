import { Paper, Typography, TextField, Box } from "@mui/material"

export default function EventForm() {
    return (
        <Paper sx={{ borderRadius: 3, padding: 3 }}>
            <Typography variant="h5" gutterBottom color="primary">
                Create Event
            </Typography>
            <Box component='form' sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                <TextField label='Title' />
            </Box>
        </Paper >
    )
}