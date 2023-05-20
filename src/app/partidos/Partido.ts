import { Away_team } from "../away_team/Away_team";
import { Home_team } from "../home_team/Home_team";

export class Partido {
  attendance: string;
  away_team: Away_team;
  away_team_country: string;
  date_time: string;
  home_team: Home_team;
  home_team_country: string;
  id: number;
  last_changed_at: string;
  last_checked_at: string;
  location: string;
  stage_name: string;
  status: string;
  venue: string;
  winner: string;
  winner_code:string;

  constructor(
    attendance: string,
    away_team: Away_team,
    away_team_country: string,
    date_time: string,
    home_team: Home_team,
    home_team_country: string,
    id: number,
    last_changed_at: string,
    last_checked_at: string,
    location: string,
    stage_name: string,
    status: string,
    venue: string,
    winner: string,
    winner_code:string
  ){
    this.attendance= attendance;
    this.away_team = away_team;
    this.away_team_country = away_team_country;
    this.date_time = date_time;
    this.home_team = home_team;
    this.home_team_country = home_team_country;
    this.id = id;
    this.last_changed_at = last_changed_at;
    this.last_checked_at = last_checked_at;
    this.location = location;
    this.stage_name = stage_name;
    this.status = status;
    this.venue = venue;
    this.winner = winner;
    this.winner_code = winner_code;
  }


}
