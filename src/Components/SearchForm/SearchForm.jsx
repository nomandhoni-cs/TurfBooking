import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import { Button, InputLabel } from "@mui/material";

const SearchForm = () => {
  const selectors = [
    { id: 1, value: "Dhaka", text: "Dhaka" },
    { id: 2, value: "Chattogram", text: "Chattogram" },
  ];
  const slotDuration = [
    { id: 1, value: "1", text: "1 Hour" },
    { id: 2, value: "2", text: "2 Hour" },]
    const suitableTime = [
        { id: 1, value: "1", text: "Peak Hour (6PM - 2AM)" },
        { id: 2, value: "2", text: "Off Peak Hour (6AM - 6PM)" },]
  return (
    <>
      <Box
        sx={{
          width: "80%",
          maxWidth: "600px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "-80px",
          marginLeft: "auto",
          marginRight: "auto",
          boxShadow: "0px 46px 80px rgba(0, 0, 0, 0.07), 0px 10.2747px 17.869px rgba(0, 0, 0, 0.0417275), 0px 3.05905px 5.32008px rgba(0, 0, 0, 0.0282725)",
          padding: "20px",
          borderRadius: "10px",
          backgroundColor:"#ffffff"
        }}
      >
        <form style={{ width: "100%",  }} action="">
          <FormControl fullWidth>
            <FormControl>
                <InputLabel>City</InputLabel>
                <Select required name="sector" label="Sectors" displayEmpty>
                    {selectors.map((selector) => (
                    <MenuItem
                        sx={{
                        borderRadius: "10px",
                        ":hover": { backgroundColor: "#169A13", color: "#fff" },
                        marginLeft: "2%",
                        marginRight: "2%",
                        }}
                        key={selector.id}
                        value={selector.value}
                        name={selector.text}
                    >
                        {selector.text}
                    </MenuItem>
                    ))}
                </Select>
            </FormControl>
            <br />
            <FormControl>
                <InputLabel>Slot Duration</InputLabel>
                <Select required name="sector" label="Sectors" displayEmpty>
                    {slotDuration.map((slot) => (
                    <MenuItem
                        sx={{
                        borderRadius: "10px",
                        ":hover": { backgroundColor: "#169A13", color: "#fff" },
                        marginLeft: "2%",
                        marginRight: "2%",
                        }}
                        key={slot.id}
                        value={slot.value}
                        name={slot.text}
                    >
                        {slot.text}
                    </MenuItem>
                    ))}
                </Select>
            </FormControl>
            <br />
            <FormControl>
                <InputLabel>Suitable Time</InputLabel>
                <Select required name="sector" label="Sectors" displayEmpty>
                    {suitableTime.map((time) => (
                    <MenuItem
                        sx={{
                        borderRadius: "10px",
                        ":hover": { backgroundColor: "#169A13", color: "#fff" },
                        marginLeft: "2%",
                        marginRight: "2%",
                        }}
                        key={time.id}
                        value={time.value}
                        name={time.text}
                    >
                        {time.text}
                    </MenuItem>
                    ))}
                </Select>
            </FormControl>
            <br />
            {/* <FormHelperText sx={{ marginBottom: "7px" }} required>
              Select a Sector*
            </FormHelperText> */}
            <Button
              sx={{
                backgroundColor: "#169A13",
                "&:hover": {
                  border: "2px solid #169A13",
                  backgroundColor: "#fff",
                  color: "#169A13",
                },
                padding: "0.5rem 1rem",
                fontWeight: 500,
                textTransform: "uppercase",
              }}
              type="submit"
              variant="contained"
            >
              Search Slot
            </Button>
          </FormControl>
        </form>
      </Box>
    </>
  );
};

export default SearchForm;
