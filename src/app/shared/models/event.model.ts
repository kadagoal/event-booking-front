export interface EventModel {
    id: number;
    title: string;
    category: string;
    price: number;
    startDate: string;
    endDate: string;
    location: string;
    image: string;
    attendeesCapacity: number,
    reservations: number,
    soldPercentage: number;
    label: string
}