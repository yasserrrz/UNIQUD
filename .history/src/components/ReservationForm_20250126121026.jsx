"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { toast } from "@/hooks/use-toast";

export default function ReservationForm({}) {
  const [isOpen, setIsOpen] = useState(false);
  const onClose = () => setIsOpen(false);
  const [reservation, setReservation] = useState({
    hotel: "",
    checkIn: "",
    checkOut: "",
    guests: 1,
    roomType: "Single",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(reservation);
    toast({
      title: "Reservation created successfully",
    });
    //  fetch("/api/reservations", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(reservation),
    //   }).then((res) => {    
    //     if (res.ok) {
    //       console.log("Reservation created successfully");
    //       onClose();
    //     } else {
    //       console.error("Failed to create reservation");
    //     }
    //   });
  };

  return (
    <>
      <div className="">
        <Button onClick={() => setIsOpen(true)} className="bg-primary hover:bg-primary/90">
          New Reservation
        </Button>
      </div>
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>New Reservation</DialogTitle>
            <DialogDescription>
              Fill in the details below to create your new hotel reservation.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <Label htmlFor="hotel">Hotel</Label>
                <div className="mt-2">
                  <Input
                    type="text"
                    id="hotel"
                    value={reservation.hotel}
                    onChange={(e) =>
                      setReservation({ ...reservation, hotel: e.target.value })
                    }
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                    required
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <Label htmlFor="roomType">Room Type</Label>
                <div className="mt-2">
                  <Select
                    value={reservation.roomType}
                    onValueChange={(value) =>
                      setReservation({ ...reservation, roomType: value })
                    }
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select room type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Single">Single Room</SelectItem>
                      <SelectItem value="Double">Double Room</SelectItem>
                      <SelectItem value="Suite">Suite</SelectItem>
                      <SelectItem value="Deluxe">Deluxe Suite</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="sm:col-span-3">
                <Label>Check-in Date</Label>
                <div className="mt-2">
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-full justify-start text-left font-normal",
                          !reservation.checkIn && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {reservation.checkIn
                          ? format(new Date(reservation.checkIn), "PPP")
                          : "Pick a date"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar
                        mode="single"
                        selected={
                          reservation.checkIn
                            ? new Date(reservation.checkIn)
                            : undefined
                        }
                        onSelect={(date) =>
                          setReservation({
                            ...reservation,
                            checkIn: date?.toISOString() ?? "",
                          })
                        }
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </div>
              </div>

              <div className="sm:col-span-3">
                <Label>Check-out Date</Label>
                <div className="mt-2">
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-full justify-start text-left font-normal",
                          !reservation.checkOut && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {reservation.checkOut
                          ? format(new Date(reservation.checkOut), "PPP")
                          : "Pick a date"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar
                        mode="single"
                        selected={
                          reservation.checkOut
                            ? new Date(reservation.checkOut)
                            : undefined
                        }
                        onSelect={(date) =>
                          setReservation({
                            ...reservation,
                            checkOut: date?.toISOString() ?? "",
                          })
                        }
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </div>
              </div>

              <div className="sm:col-span-2">
                <Label htmlFor="guests">Number of Guests</Label>
                <div className="mt-2">
                  <Input
                    type="number"
                    id="guests"
                    value={reservation.guests}
                    onChange={(e) =>
                      setReservation({
                        ...reservation,
                        guests: Number.parseInt(e.target.value),
                      })
                    }
                    min="1"
                    max="10"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                    required
                  />
                </div>
              </div>
            </div>

            <div className="mt-6 flex items-center justify-end gap-x-6">
              <Button type="button" variant="outline" onClick={onClose}>
                Cancel
              </Button>
              <Button type="submit" className="bg-primary hover:bg-primary/90">
                Create Reservation
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
}
