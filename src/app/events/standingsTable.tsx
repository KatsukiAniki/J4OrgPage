'use client'

import { AppProps } from "next/app";
import { ReactElement } from "react";
import Image from "next/image";
import { Match } from "../data/match";
import { formatDistanceToNow, parseISO } from 'date-fns';


interface StandingsTableProps {
    data: Match[];
}

export default function standingsTable({ data }: StandingsTableProps) {

    function timeUntilMatch(date: any) {
        const matchDate = parseISO(date);
        return formatDistanceToNow(matchDate, { addSuffix: true });
    }
    
    let scoreConfirmed = false;

    function vaildateWinLoss(match: Match){
        // {scoreConfirmed === true && ((match.team1.name === "J4" && match!.team1!.score! > match!.team2!.score!) || (match.team2.name === "J4" && match!.team1!.score! < match!.team2!.score!)) ? 
        // <span className="text-green-500">{match.team1.score} : {match.team2.score}</span> : <span className="text-red-500">{match.team1.score} : {match.team2.score}</span>}
            if(scoreConfirmed)
            {
                if((match.team1.name === "J4" && match!.team1!.score! > match!.team2!.score!) || (match.team2.name === "J4" && match!.team1!.score! < match!.team2!.score!)){
                    scoreConfirmed = false;
                    return <span className="text-green-500">{match.team1.score} : {match.team2.score}</span>
                    
                }
                else
                {
                    scoreConfirmed = false;
                    return <span className="text-red-500">{match.team1.score} : {match.team2.score}</span>
                }
            }
            return <></>;
    }
    return (
        <div className="container mx-auto w-full md:w-[80%] px-4 md:px-0">
            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-center md:text-start mt-4 md:mt-0">STAGE 2: DIV 2.1 Matches</h2>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
                    <thead className="bg-gray-800 text-white">
                        <tr>
                            <th className="text-left py-3 px-4 uppercase font-semibold text-xs md:text-sm">Date</th>
                            <th className="text-left py-3 px-4 uppercase font-semibold text-xs md:text-sm">Match</th>
                            <th className="text-left py-3 px-4 uppercase font-semibold text-xs md:text-sm">Score</th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-700">
                        {data.map((match: Match) => (
                            <tr key={match.team1.name} className="border-b border-gray-200 hover:bg-gray-100">
                                <td className="py-3 px-4">{new Date(match.date).toLocaleString()} - {timeUntilMatch(match.date)}</td>
                                <td className="py-3 px-4">
                                    <div className="flex items-center md:flex-row md:justify-start">
                                        <div className="rounded-lg overflow-hidden w-8 h-8 mr-2 flex justify-center items-center">
                                            <Image src={`${match.team1.avatar}`} width={30} height={30} alt={match.team1.name} />
                                        </div>
                                        {match.team1.name === "J4" ? <span className="font-bold">{match.team1.name}</span> : <span className="min-w-fit">{match.team1.name}</span>}
                                        <span className="ml-2">VS</span>
                                        <div className="rounded-lg overflow-hidden w-8 h-8 ml-2 flex justify-center items-center">
                                            <Image src={`${match.team2.avatar}`} width={30} height={30} alt={match.team2.name} />
                                        </div>
                                        <span className="pl-2">{match.team2.name === "J4" ? <span className="font-bold">{match.team2.name}</span> : match.team2.name}</span>
                                    </div>
                                </td>
                                <td className="py-3 px-4">
                                    {match.score_confirmed ? scoreConfirmed = true : "TBD"}
                                    {vaildateWinLoss(match)}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}