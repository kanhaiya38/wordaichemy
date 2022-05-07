import Typography from "@mui/material/Typography";
import "@fontsource/raleway/500.css";

const Header = () => {
  return (
    <Typography
      variant="h1"
      align="center"
      sx={{
        fontFamily: "Raleway",
        color: '#2b2b4f'
      }}
    >
      WordAIchemy
    </Typography>
  );
};

export default Header;
