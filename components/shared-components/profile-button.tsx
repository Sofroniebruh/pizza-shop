import { useSession } from "next-auth/react";
import { UserIcon } from "lucide-react";
import { Button } from "@/components/ui";
import Link from "next/link";

interface Props {
  className?: string;
  onClickSignIn?: () => void;
}

export default function ProfileButton({ className, onClickSignIn }: Props) {
  const { data: session } = useSession();

  return (
    <div className={className}>
      {session ? (
        <Link href={"/profile"}>
          <Button
            variant={"secondary"}
            className={"flex gap-1 cursor-pointer items-center"}
          >
            <UserIcon></UserIcon>Profile
          </Button>
        </Link>
      ) : (
        <Button
          variant={"outline"}
          className={"flex gap-1 cursor-pointer items-center"}
          onClick={onClickSignIn}
        >
          <UserIcon></UserIcon>Login
        </Button>
      )}
    </div>
  );
}
