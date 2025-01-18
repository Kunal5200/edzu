import { FAQDATA } from "@/assest/faqData";
import { COLORS } from "@/utils/enum";
import { roboto } from "@/utils/fonts";
import { ExpandMore } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Container,
  Grid2,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

const Faq = () => {
  const [expanded, setExpanded] = useState<string | false>();
  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };
  return (
    <div>
      <Box sx={{ backgroundColor: COLORS.FAQBG, pt: 10, pb: 10 }}>
        <Typography
          sx={{
            textAlign: "center",
            fontSize: 30,
            fontFamily: roboto.style,
            fontWeight: 600,
          }}
        >
          FAQ’s
        </Typography>

        <Container sx={{ mt: 4 }}>
          <Grid2 container>
            <Grid2 size={{ lg: 10, xs: 12 }} margin={"auto"}>
              <Grid2 container spacing={2}>
                {FAQDATA.map((val, i) => (
                  <Grid2 size={12} key={i}>
                    <Accordion
                      onChange={handleChange(`panel${i}`)}
                      expanded={expanded === `panel${i}`}
                    >
                      <AccordionSummary expandIcon={<ExpandMore />}>
                        <Typography
                          sx={{
                            fontSize: { lg: 16, xs: 14 },
                            fontFamily: roboto.style,
                          }}
                        >
                          {val.label}{" "}
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography
                          sx={{ fontSize: 14, fontFamily: roboto.style }}
                        >
                          {val.value}
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                  </Grid2>
                ))}
              </Grid2>
            </Grid2>
          </Grid2>
        </Container>
      </Box>
    </div>
  );
};

export default Faq;
