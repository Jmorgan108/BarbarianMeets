import { Grid } from "@mui/material";
import EventList from "./EventList";
import EventDetails from "../details/EventDetails";

type Props = {
    activities: Activity[];
    selectEvent: (id: string) => void;
    cancelEvent: () => void;
    selectedEvent?: Activity;
}

export default function eventDashboard({ activities, selectEvent, cancelEvent, selectedEvent }: Props) {
    return (
        <Grid container spacing={3} >
            <Grid size={7}>
                <EventList
                    activities={activities}
                    selectEvent={selectEvent}
                />
            </Grid>
            <Grid size={5}>
                {
                    selectedEvent && <EventDetails activity={selectedEvent}
                        cancelEvent={cancelEvent}
                    />
                }
            </Grid>
        </Grid >
    )
}
