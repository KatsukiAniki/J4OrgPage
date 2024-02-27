export interface Match{
    team1: Team;
    team2: Team; 
    date: Date;
    score?: string,
    score_confirmed?: boolean;
}

interface Team{
    name: string;
    avatar: string;
}