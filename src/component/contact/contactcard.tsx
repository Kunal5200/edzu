import { COLORS } from "@/utils/enum";
import { roboto } from "@/utils/fonts";
import { CONTACTCARDPROPS } from "@/utils/types";
import { Box, Card, Typography } from "@mui/material";

const ContactCard = ({ icon, heading, value }: CONTACTCARDPROPS) => {
  return (
    <div>
      <Card
        sx={{
          p: 2,
          boxShadow: "0px 0px 4px 4px rgb(0,0,0,0.10)",
          textAlign: "center",
          ".contact_icon": {
            color: COLORS.PRIMARY,
            transition: "0.5s ease all",
          },
          ":hover": {
            ".contact_icon": {
              color: COLORS.WHITE,
              backgroundColor: COLORS.PRIMARY,
              transform: "translateY(-5px)",
            },
          },
          height: 150,
        }}
      >
        <Box
          sx={{
            borderRadius: "50%",
            boxShadow: "0px 0px 2px 2px rgb(0,0,0,0.10 )",
            width: 50,
            height: 50,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "auto",
          }}
          className="contact_icon"
        >
          {icon}
        </Box>
        <Typography
          sx={{
            textTransform: "capitalize",
            mt: 2,
            fontFamily: roboto.style,
            fontWeight: 550,
            fontSize: 18,
          }}
        >
          {heading}
        </Typography>
        <Typography
          sx={{
            textTransform: "capitalize",
            mt: 1,
            fontFamily: roboto.style,
            fontWeight: 400,
            fontSize: 17,
          }}
        >
          {value}
        </Typography>
      </Card>
    </div>
  );
};

export default ContactCard;
