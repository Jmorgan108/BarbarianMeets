import { Box } from "@mui/material";
import EventCard from "./EventCard";

type Props = {
    activities: Activity[];
}

export default function EventList({ activities }: Props) {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
            {activities.map(activity => (<EventCard key={activity.id} activity={activity} />))}
        </Box>
    )
}
