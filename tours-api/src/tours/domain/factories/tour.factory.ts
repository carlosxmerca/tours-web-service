import { v4 as uuidv4 } from 'uuid';
import { Tour } from '../entities/tour';

export class TourFactory {
  static create(props: {
    name: string;
    address: string;
    description: string;
    image: string;
  }): Tour {
    return new Tour(
      uuidv4(),
      props.name,
      props.address,
      props.description,
      props.image,
      0,
      new Date(),
    );
  }
}
