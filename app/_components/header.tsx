import Image from "next/image";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { MenuIcon } from "lucide-react";

const Header = () => {
  return (
    <Card>
      <CardContent className="p-5 justify-between  itens-center flex flex-row">
        <Image alt="FSW barber" src="/logo.png" height={18} width={120} />
        <Button variant="outline" size="icon" className="h-8 w-8">
            <MenuIcon/>
        </Button>
      </CardContent>
    </Card>
  );
};

export default Header;
