import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";

const Footer = () => (
  <Box
    component="footer"
    sx={{
      py: 3,
      px: 2,
      mt: "auto",
      backgroundColor: '#f0f3f5'
    }}
  >
    <Container maxWidth="sm">
      <Typography variant="body1" align="center">
      Made with ❤️ by Team WordAIchemy
      </Typography>
    </Container>
  </Box>
);

export default Footer;
