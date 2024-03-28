'use client';
import { useGetDataByCategory } from "../api/api-hooks";
import { Preloader } from "../components/Preloader/Preloader";
import { CardsListSection } from "../components/CardsListSection/CardsListSection";
import { endpoints } from "../api/config";

export default function Runner() {
    const runnerGames = useGetDataByCategory(endpoints.games, 'runner');

    return (
        <main className={"main-inner"}>
            {runnerGames ? (
                <CardsListSection id="runner" title="Ранеры" data={runnerGames}/>
            ) : (
                <Preloader />
            )}
        </main>
    );
}