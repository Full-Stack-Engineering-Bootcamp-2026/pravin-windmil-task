import CardComp from "./Card";
import {
  Users,
  Wallet,
  ShoppingCart,
  MessageCircle,
} from "lucide-react";

function CardsSection() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full">

      <CardComp
        title="Total clients"
        number={6389}
        icon={Users}
        color="bg-orange-500"
      />

      <CardComp
        title="Account balance"
        number={46760.89}
        icon={Wallet}
        color="bg-green-500"
      />

      <CardComp
        title="New sales"
        number={376}
        icon={ShoppingCart}
        color="bg-blue-500"
      />

      <CardComp
        title="Pending contacts"
        number={35}
        icon={MessageCircle}
        color="bg-teal-500"
      />

    </div>
  );
}

export default CardsSection;