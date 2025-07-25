export class Tour {
  constructor(
    public readonly id: string,
    public name: string,
    public address: string,
    public description: string,
    public image: string,
    public likes: number = 0,
    public readonly createdAt: Date = new Date(),
    public updatedAt: Date = new Date(),
  ) {}

  like() {
    this.likes++;
    this.updatedAt = new Date();
  }

  updateDetails({
    name,
    address,
    description,
    image,
  }: {
    name?: string;
    address?: string;
    description?: string;
    image?: string;
  }) {
    if (name) this.name = name;
    if (address) this.address = address;
    if (description) this.description = description;
    if (image) this.image = image;
    this.updatedAt = new Date();
  }
}
