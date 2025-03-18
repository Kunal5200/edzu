import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import logo from "@/logo/new-logo.png";
import Image from "next/image";
import { Close, ExpandMore, Menu } from "@mui/icons-material";
import { data } from "@/assest/data";
import { useRouter } from "next/router";
const MobileHeader = () => {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const changePath = (path: string) => {
    router.push(path);
    setOpen(false);
  };
  return (
    <div>
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
        p={1}
        // sx={{ position: "relative", top: 40 }}
      >
        <Image src={logo} alt="" width={100} />
        <IconButton onClick={() => setOpen(true)}>
          <Menu sx={{ fontSize: 30 }} />
        </IconButton>
      </Stack>

      <Drawer
        open={open}
        onClose={() => setOpen(false)}
        sx={{
          "& .MuiPaper-root": {
            width: "70%",
          },
        }}
      >
        <Box sx={{ textAlign: "end" }}>
          <IconButton onClick={() => setOpen(false)}>
            <Close />
          </IconButton>
        </Box>
        <List sx={{ mt: 5 }}>
          {data.headerLinks.map((val, i) =>
            val.icon ? (
              <Accordion
                sx={{
                  boxShadow: "none !important",
                  "::before": {
                    backgroundColor: "transparent",
                  },
                }}
              >
                <AccordionSummary expandIcon={<ExpandMore />}>
                  <Typography
                    sx={{
                      textAlign: "center",
                      fontSize: 25,
                      textTransform: "uppercase",
                    }}
                  >
                    {val.label}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails></AccordionDetails>
              </Accordion>
            ) : (
              <>
                <ListItemButton key={i} onClick={() => changePath(val.url)}>
                  <ListItemText
                    primary={
                      <Typography
                        sx={{
                          textAlign: "start",
                          fontSize: 25,
                          textTransform: "uppercase",
                        }}
                      >
                        {val.label}
                      </Typography>
                    }
                  />
                </ListItemButton>
              </>
            )
          )}
        </List>
      </Drawer>
    </div>
  );
};

export default MobileHeader;
