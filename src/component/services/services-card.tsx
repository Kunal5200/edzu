import { COLORS } from "@/utils/enum";
import { SERVICE_PROPS } from "@/utils/types";
import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";
const ServicesCard = ({ img, label }: SERVICE_PROPS) => {
  return (
    <div>
      <Box
        sx={{
          border: `2px solid ${COLORS.PRIMARY}`,
          borderRadius: 3,
          p: 3,
          height: 50,
        }}
      >
        <Stack direction={"row"} alignItems={"center"} spacing={4}>
          <Image src={img} alt="" width={50} />
          <Typography sx={{ fontSize: 20 }}>{label}</Typography>
        </Stack>
      </Box>
    </div>
  );
};

export default ServicesCard;
