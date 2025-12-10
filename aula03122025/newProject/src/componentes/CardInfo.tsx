import { Card, CardContent, Typography } from "@mui/material";

interface CardInfoProps {
  title: string;
  text: string;
}

export default function CardInfo({ title, text }: CardInfoProps) {
  return (
    <Card sx={{ marginBottom: 2 }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body1">
          {text}
        </Typography>
      </CardContent>
    </Card>
  );
}
