
export class Equipo {
    games_played: number;
    country: string;
    draws: number;
    goal_differential: number;
    goals_against: number;
    goals_for: number;
    group_letter: string;
    group_points: number;
    losses: number;
    name: string;
    wins: number;


    constructor(
      games_played: number,
      country: string,
      draws: number,
      goal_differential: number,
      goals_against: number,
      goals_for: number,
      group_letter: string,
      group_points: number,
      losses: number,
      name: string,
      wins: number
    ) {
      this.games_played = games_played;
      this.country = country;
      this.draws = draws;
      this.goal_differential = goal_differential;
      this.goals_against = goals_against;
      this.goals_for = goals_for;
      this.group_letter = group_letter;
      this.group_points = group_points;
      this.losses = losses;
      this.name = name;
      this.wins = wins;
    }
}
