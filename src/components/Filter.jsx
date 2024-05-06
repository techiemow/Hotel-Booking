import {
    Accordion,
    AccordionSummary,
    AccordionDetails,
    FormGroup,
     FormControlLabel,
    Checkbox,
  } from "@mui/material";
  
  import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
  import { amenities } from "./constants";
  

  export default function Filter({ filteredTags = [], setFilteredTags }) {
    const handleFilterChange = (event) => {
      if (event.target.checked) {
        
        setFilteredTags([...filteredTags, event.target.value]);
      } else {
        const filteredItem = filteredTags.filter(
          (filter) => filter != event.target.value
        );
  
        setFilteredTags(filteredItem);
      }
    };
  
    return (
      <div style={
        { width: "100%" }

        }>
        <Accordion defaultExpanded>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            Quick Filters
          </AccordionSummary>
          <AccordionDetails>
            <FormGroup>
              {amenities.map((filter, index) => (
                <FormControlLabel 
                  key={index}
                  name={filter}
                  control={<Checkbox />}
                  label={filter}
                  value={filter}
                  onChange={handleFilterChange}
                />
              ))}
            </FormGroup>
          </AccordionDetails>
        </Accordion>
        
      </div>
    );
  }