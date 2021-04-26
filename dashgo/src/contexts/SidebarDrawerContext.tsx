import { useDisclosure, UseDisclosureReturn } from "@chakra-ui/react";
import { useRouter } from "next/dist/client/router";
import { createContext, ReactNode, useContext, useEffect } from "react";

interface SidebarDrawerProviderProps {
    children: ReactNode
}

type SidebarDrawerContextData = UseDisclosureReturn

const SidebraDrawerContext = createContext( {} as SidebarDrawerContextData );

export function SidebarDrawerProvider( { children } : SidebarDrawerProviderProps ){
    const disclosure = useDisclosure()
    const router = useRouter();

    useEffect( () => {
        disclosure.onClose()
    }, [router.asPath] )

    return (
        <SidebraDrawerContext.Provider value= {disclosure}>
            {children}
        </SidebraDrawerContext.Provider>
    )
}

export const useSidebarDrawer = () => useContext(SidebraDrawerContext)