import {
  PaginatedTourResponseSchema,
  TourSchema,
} from "@/lib/schemas/tour.schema";
import { TOURS_ENDPOINT } from "./endpoints";
import { api } from "./axios";
import { CreateTourDto } from "@/lib/schemas/createTour.schema";

export const TourService = {
  async findAll(params?: { page?: number; limit?: number }) {
    const response = await api.get(TOURS_ENDPOINT.findAll, { params });
    return PaginatedTourResponseSchema.parse(response.data);
  },

  async findById(id: string) {
    const response = await api.get(TOURS_ENDPOINT.findById(id));
    return TourSchema.parse(response.data);
  },

  async create(data: CreateTourDto) {
    const response = await api.post(TOURS_ENDPOINT.create, data);
    return TourSchema.parse(response.data);
  },

  async like(id: string) {
    const response = await api.patch(TOURS_ENDPOINT.like(id));
    return TourSchema.parse(response.data);
  },

  async remove(id: string) {
    const response = await api.delete(TOURS_ENDPOINT.delete(id));
    return response.data.message as string;
  },

  async health() {
    const response = await api.get(TOURS_ENDPOINT.health);
    return response.data.message as string;
  },
};
