"use client";
import { create } from "zustand";

interface NavbarState {
    isOpen:boolean;
    setIsOpen:(open:boolean)=>void
}

export const useNavbarState = create<NavbarState>((set)=>({
    isOpen:false,
    setIsOpen:(open:boolean)=>set({isOpen:open})
}))