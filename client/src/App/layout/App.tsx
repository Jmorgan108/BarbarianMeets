import { Box, Container, CssBaseline } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import NavBar from "./NavBar";
import EventDashboard from "../../Features/events/dashboard/EventDashboard";

function App() {
  const [activities, setActivities] = useState<Activity[]>([]);

  useEffect(() => {
    axios.get<Activity[]>('https://localhost:5067/api/activities')
      .then(response => setActivities(response.data))

    return () => { }
  }, [])

  return (
    <Box sx={{ bgcolor: '#eee' }}>
      {/* Makes Navbar take up all space around it and not leave an outline. */}
      <CssBaseline />
      <NavBar />
      <Container maxWidth='xl' sx={{ mt: 3 }}>
        <EventDashboard activities={activities} />
      </Container>

    </Box>
  )
}

export default App
