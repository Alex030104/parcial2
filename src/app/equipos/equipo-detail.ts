import { Equipo } from "./Equipo"

export class EquipoDetail extends Equipo{
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
    wins: number)
    {
      super(
        games_played,
    country,
    draws,
        goal_differential,
        goals_against,
    goals_for,
        group_letter,
        group_points,
    losses,
    name,
    wins)
    }
}
