import { Grid } from "@mui/material";
import EventList from "./EventList";

type Props = {
    activities: Activity[];
}

export default function eventDashboard({ activities }: Props) {
    return (
        <Grid container>
            <Grid size={9}>
                <EventList activities={activities} />
            </Grid>
        </Grid>
    )
}
