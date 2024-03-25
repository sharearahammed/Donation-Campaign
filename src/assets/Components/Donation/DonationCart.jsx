const DonationCart = ({cart}) => {
    const {
        background_color,
        picture,
        title,
        button_background_color,
        text_color,
        category,
        description
      } = cart;
  return (
    <div
      style={{ backgroundColor: background_color }}
      className="grid grid-cols-2 card card-compact bg-base-100 shadow-xl"
    >
      <figure>
        <img className="h-[240px]" src={picture} alt="" />
      </figure>
      <div className="p-5">
        <h1 className="mb-2 text-2xl font-bold">{category}</h1>
        <h2 className="mb-2 text-lg font-semibold">{title}</h2>
        <p className="font-light">{description}</p>

      </div>
    </div>
  );
};

export default DonationCart;
