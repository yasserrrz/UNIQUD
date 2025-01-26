'use client';

import React from 'react';
import { Button } from 'your-button-library';

const ActionButtons = ({ reservationId, handleAction }) => {
  return (
    <>
      <Button
        onClick={() => handleAction(reservationId, "approve")}
        variant="outline"
        size="sm"
        className="mr-2"
      >
        Approve
      </Button>
      <Button
        onClick={() => handleAction(reservationId, "cancel")}
        variant="destructive"
        size="sm"
      >
        Cancel
      </Button>
    </>
  );
};

export default ActionButtons;