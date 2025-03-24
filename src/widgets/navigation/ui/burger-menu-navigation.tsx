import React from 'react';
import {BurgerMenuNavigationList} from "@/widgets/navigation";
import Link from "next/link";
import {Button} from "@/shared/components/Button";

type BurgerMenuNavigationProps = {
    setIsBurgerMenuOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const BurgerMenuNavigation: React.FC<BurgerMenuNavigationProps> = ({setIsBurgerMenuOpen}) => {
    return (
        <div className={'py-6 px-4'}>

            <BurgerMenuNavigationList setIsBurgerMenuOpen={setIsBurgerMenuOpen}/>

            <div className="flex items-center space-x-4 w-full pt-6 border-t border-border-primary">
                <Link href={process.env.NEXT_PUBLIC_AUTH_URL + '/signin'}
                      className="text-gray-700 hover:text-purple flex-1">
                    <Button variant={"outline"} className={'!rounded-[10px] !py-5 !px-5 !h-[43px] w-full'}>Sign In</Button>
                </Link>
                <Link href={process.env.NEXT_PUBLIC_AUTH_URL + '/signup'} className={'flex-1'}>
                    <Button className={'!rounded-[10px] !py-4 !px-5 !h-[43px] w-full'}>Sign up</Button>
                </Link>
            </div>
        </div>
    );
};