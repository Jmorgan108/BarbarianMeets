import { Box } from "@mui/material";
import EventCard from "./EventCard";

type Props = {
    activities: Activity[];
    selectEvent: (id: string) => void;

}

export default function EventList({ activities, selectEvent }: Props) {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
            {activities.map(activity => (<EventCard key={activity.id} activity={activity} selectEvent={selectEvent} />))}
        </Box>
    )
}
