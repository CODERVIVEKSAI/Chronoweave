-- Chronoweave Database Setup for Supabase
-- Run this in Supabase SQL Editor

-- Create players table
CREATE TABLE IF NOT EXISTS players (
    id BIGSERIAL PRIMARY KEY,
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE UNIQUE NOT NULL,
    email TEXT NOT NULL,
    name TEXT NOT NULL,
    level TEXT NOT NULL DEFAULT 'apprentice',
    rank INTEGER NOT NULL DEFAULT 156,
    total_score INTEGER NOT NULL DEFAULT 0,
    coins INTEGER NOT NULL DEFAULT 0,
    challenges JSONB NOT NULL DEFAULT '{"heritage": {"best": 0, "completed": false}, "innovation": {"best": 0, "completed": false}, "future": {"best": 0, "completed": false}}'::jsonb,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    last_played TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE players ENABLE ROW LEVEL SECURITY;

-- Create policies for players table
-- Users can read their own data
CREATE POLICY "Users can read own player data"
    ON players
    FOR SELECT
    USING (auth.uid() = user_id);

-- Users can insert their own data
CREATE POLICY "Users can insert own player data"
    ON players
    FOR INSERT
    WITH CHECK (auth.uid() = user_id);

-- Users can update their own data
CREATE POLICY "Users can update own player data"
    ON players
    FOR UPDATE
    USING (auth.uid() = user_id);

-- Create index for faster lookups
CREATE INDEX IF NOT EXISTS players_user_id_idx ON players(user_id);
CREATE INDEX IF NOT EXISTS players_email_idx ON players(email);

-- Grant permissions
GRANT ALL ON players TO authenticated;
GRANT ALL ON players TO anon;
