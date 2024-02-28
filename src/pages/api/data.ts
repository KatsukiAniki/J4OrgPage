import { Match } from "@/app/data/match";

export default async function handler(){
    const pendingResponse = await fetch('https://api.projectv.gg/api/v1/frontend/participant/dbd4507d-1f7f-4ee4-bce7-ab065c63fb0e/xall_matches_to_team?match__encounters__score_confirmed=False&match__status__in=PENDING');
    const confirmedResponse = await fetch('https://api.projectv.gg/api/v1/frontend/participant/dbd4507d-1f7f-4ee4-bce7-ab065c63fb0e/xall_matches_to_team?match__encounters__score_confirmed=True&tournament=2fb8cc2f-c587-435f-a995-f99c5d51062e&match__status__in=COMPLETED')
    const pendingData = await pendingResponse.json();
    const confirmedData = await confirmedResponse.json();


    const tempPendingMatches: any[] = pendingData.data;
    const tempConfirmedMatches: any[] = confirmedData.data;

    const pendingMatches: Match[] = tempPendingMatches.map((item) => ({
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
    }));

    const confirmedMatches: Match[] = tempConfirmedMatches.map((item) => ({
        team1: {
            name: item.match.encounters[0].participant.participant.name,
            avatar: item.match.encounters[0].participant.participant.files[0].file,
            score: item.match.encounters[0].final_score
        },
        team2: {
            name: item.match.encounters[1].participant.participant.name,
            avatar: item.match.encounters[1].participant.participant.files[0].file,
            score: item.match.encounters[1].final_score
        },
        date: item.match.date,
        score_confirmed: item.match.is_confirmed
    }));

    let combinedMatches: Match[] = [...pendingMatches, ...confirmedMatches].sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());


    combinedMatches = combinedMatches.reduce<Match[]>((acc, current) => {
        const existingMatch = acc.find(match => match.date === current.date);
        if (existingMatch) {
            if (!existingMatch.score_confirmed && current.score_confirmed) {
                // Replace the unconfirmed match with the confirmed one.
                acc.splice(acc.indexOf(existingMatch), 1, current);
            }
        } else {
            acc.push(current);
        }
        return acc;
    }, []);

    return combinedMatches;

}