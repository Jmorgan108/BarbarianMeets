import { Card, CardContent, CardMedia, Typography } from "@mui/material";

type Props = {
    activity: Activity;
}

export default function EventDetails({ activity }: Props) {
    return (
        <Card sx={{ borderRadius: 3 }}>
            <CardMedia component='img' src={`/images/categoryImages/${activity.category}`} />
            <CardContent>
                <Typography variant="h5">{activity.title}</Typography>
                <Typography variant="subtitle1" sx={{ fontWeight: 'light' }}>{activity.date}</Typography>
                <Typography variant="body1">{activity.description}</Typography>
            </CardContent>
        </Card >
    )
}