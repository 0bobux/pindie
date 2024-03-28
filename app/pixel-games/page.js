'use client';
import { useGetDataByCategory } from "../api/api-hooks";
import { Preloader } from "../components/Preloader/Preloader";
import { CardsListSection } from "../components/CardsListSection/CardsListSection";
import { endpoints } from "../api/config";

export default function Pixel() {
    const pixelGames = useGetDataByCategory(endpoints.games, 'pixel');

    return (
        <main className={"main-inner"}>
            {pixelGames ? (
                <CardsListSection id="pixel" title="Пиксельные" data={pixelGames}/>
            ) : (
                <Preloader />
            )}
        </main>
    );
}