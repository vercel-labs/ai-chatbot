from pydantic import BaseModel
from typing import List, Optional, Any

class PlayerModel(BaseModel):
    player_name: str
    player_position: Optional[str] = ''
    player_id: Optional[str] = ''
    cosine_similarity: Optional[float] = 0.0

class RequestModel(BaseModel):
    prompt: str
    players: Optional[List[PlayerModel]] = None
    teams: Optional[List[str]] = None

class NERResultsModel(BaseModel):
    identified_players: List[PlayerModel]
    identified_teams: List[str]

class ResponseModel(BaseModel):
    original_prompt: str
    updated_prompt: str
    predicted_columns: List[str]
    rule_based_adjustment: List[str]
    ner_results: NERResultsModel
    sql_query: str
    query_results: Optional[Any] = None
    query_summary: str = None
    query_answer: str = None
    utctime: str
    success: bool = True
