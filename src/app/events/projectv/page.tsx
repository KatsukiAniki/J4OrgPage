'use client'

import StandingsTable from "../standingsTable";
import Image from "next/image";
import UnderConstruction from "@/app/lib/underConstruction";
import handler from "@/pages/api/data";
import { Match } from "@/app/data/match";
import { useEffect, useState } from "react";

export default function ProjectV(){

    const [matches, setMatches] = useState<Match[]>([]);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = handler() // Assuming your API endpoint is at /api/data
          setMatches(await response);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchData();
    }, []);

    return(
        <div>
            <span className="flex justify-center mt-10 items-center">
            <Image src="/projectv.png" alt="projectv" width={40} height={30}></Image> <h1 className="pl-2 text-3xl">Project V</h1>
            </span>
            <StandingsTable data={matches}></StandingsTable>
            {/* <UnderConstruction></UnderConstruction> */}
        </div>
    );
}