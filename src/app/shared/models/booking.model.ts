export interface Booking {
    id: number;
    title: string;
    category: string;
    price: number;
    startDate: string;
    endDate: string;
    location: string;
    image: string;
    tickets: number;
    eventId: any;
  }