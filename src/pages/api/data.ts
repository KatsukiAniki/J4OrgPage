import { Match } from "@/app/data/match";

export default async function handler(){
    const response = await fetch('https://api.projectv.gg/api/v1/frontend/participant/dbd4507d-1f7f-4ee4-bce7-ab065c63fb0e/xall_matches_to_team?match__encounters__score_confirmed=False&match__status__in=PENDING');
    const data = await response.json();
    let tempMatches: any[] = data.data;
    let matches: Match[] = tempMatches.map((item) => ({
        team1: {
            name: item.match.encounters[0].participant.participant.name,
            avatar: item.match.encounters[0].participant.participant.files[0].file,
        },
        team2: {
            name: item.match.encounters[1].participant.participant.name,
            avatar: item.match.encounters[1].participant.participant.files[0].file,
        },
        date: item.match.date,
        score_confirmed: item.match.score_confirmed,
        score: item.match.score
    }));
    return matches;    
}