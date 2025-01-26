"use client";

import { Button } from "./ui/button";

const ActionButtons = ({  reservation }) => {
    const handleAction = (id, action) => {
        console.log(`Reservation ID: ${id} - Action: ${action}`);
      };
  return (
    <>
      {reservation?.status  && (
        <>
          <Button
            onClick={() => handleAction(reservation?.id, "approve")}
            variant="outline"
            size="sm"
            className="mr-2"
          >
            Approve
          </Button>
          <Button
            onClick={() => handleAction(reservation?.id, "cancel")}
            variant="destructive"
            size="sm"
          >
            Cancel
          </Button>
        </>
      )}
    </>
  );
};

export default ActionButtons;
