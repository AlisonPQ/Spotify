import { Button, ButtonProps } from "@mui/material";
import { styled } from "@mui/system";

const StyledButton = styled(Button)<ButtonProps>(({ variant }) => ({
  textTransform: "none",
  fontWeight: 600,
  fontSize: "16px",
  borderRadius: "30px",
  padding: "10px 24px",
  transition: "0.3s",
  backgroundColor: variant === "outlined" ? "transparent" : "#1DB954",
  color: variant === "outlined" ? "#1DB954" : "#fff",
  border: variant === "outlined" ? "2px solid #1DB954" : "none",
  "&:hover": {
    backgroundColor: variant === "outlined" ? "#1DB954" : "#1AAE4F",
    color: "#fff",
  },
}));

interface SpotifyButtonProps extends ButtonProps {
  children: React.ReactNode;
}

export default function SpotifyButton({ children, ...props }: SpotifyButtonProps) {
  return <StyledButton {...props}>{children}</StyledButton>;
}
