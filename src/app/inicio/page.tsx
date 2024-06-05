"use client";
import {
  DlButton,
  DlIcon,
  DlTag,
  DlIconNamesProp,
} from "@alicorpdigital/dali-react";
import Image from "next/image";
import { useAuth } from "@/hooks/useAuth";
import HomePage from '@/screens/home';

export default function Home() {
  const { user } = useAuth();

  return <HomePage />
}
