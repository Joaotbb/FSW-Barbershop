import Header from "../_components/header";
import { format } from "date-fns";
import { pt } from "date-fns/locale/pt";

export default function Home() {
  return <div>
    <Header/>
    <div className="px-5 pt-5">
        <h2 className="text-xl font-bold">Olá, Miguel!</h2>
        <p className="capitalize text-sm">
          {format(new Date(), "EEEE',' dd 'de' MMMM", {
            locale: pt,
          })}
        </p>
      </div>
  </div>;
}
