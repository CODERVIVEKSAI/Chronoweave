-- Add streak column to players table
ALTER TABLE players 
ADD COLUMN IF NOT EXISTS streak JSONB DEFAULT '{"current": 0, "longest": 0, "lastCompletedDate": null, "todayCompleted": {"heritage": false, "innovation": false, "future": false}, "streakSaves": 0}'::jsonb;

-- Update existing players to have streak data
UPDATE players 
SET streak = '{"current": 0, "longest": 0, "lastCompletedDate": null, "todayCompleted": {"heritage": false, "innovation": false, "future": false}, "streakSaves": 0}'::jsonb
WHERE streak IS NULL;
