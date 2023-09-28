
import {Dialog,styled,} from "@mui/material";

const Text= styled('li')`
    font-size: 13px;
    padding: 5px;
  `;

const TermsDialog = ({ open, setOpen }) => {
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Dialog open={open} onClose={handleClose}>
    <ul>
      <Text>This offer is valid until stocks last or for a limited period only.</Text>
      <Text>Cancellation of individual items in an offer will cancel all other items this offer is applied on.
Returns/replacement is allowed as per the Returns Policy.</Text>
      <Text>Replacement is allowed in case of damaged or defective items. In the event the user returns any/all products 
      in the order placed during the Offer Period, thereby not maintaining the minimum purchase value,
       as required to avail the Offer, he/she shall not be eligible for the Offer.</Text>
       </ul>
    </Dialog>
  )
}

export default TermsDialog


