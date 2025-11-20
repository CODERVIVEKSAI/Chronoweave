# 🎮 Chronoweave Game Flow

## **Complete User Journey:**

### **1. Registration/Login (Entry Point)**
- User arrives at game
- Sees "CHRONOWEAVE" title
- Two options: **Register** or **Login**

#### **Register Flow:**
1. Click "Register" button
2. Fill in:
   - Email address
   - Weaver name
   - Password (6+ characters)
   - Difficulty level (Apprentice/Artisan/Master)
3. Click "Enter Chronoweave"
4. Account created in Supabase
5. → **Redirects to Dashboard**

#### **Login Flow:**
1. Click "Login" button
2. Enter email and password
3. Click "Login"
4. Authenticates with Supabase
5. → **Redirects to Dashboard**

---

### **2. Dashboard (Main Hub)**

**What You See:**
- Welcome message with your name
- Player stats:
  - Global Rank (clickable)
  - Total Score
  - Coins
  - Level
  - Challenges Completed
- Daily Streak section:
  - Current streak
  - Longest streak
  - Today's progress (3 challenge icons)
  - Streak Saves (buy for 500 coins)
- Three challenge cards:
  - 🪔 Heritage Challenge
  - ⚙️ Innovation Quiz
  - 🚀 Smart Textile Engineering
- Action buttons:
  - 👤 Avatar Builder
  - 🏆 Leaderboard (from Global Rank)
  - ⚙️ Settings

**What You Can Do:**
- Click any challenge to start
- Click Global Rank to view leaderboard
- Customize avatar
- Adjust settings
- Buy streak saves

---

### **3. Challenge Flow**

#### **A. Heritage Challenge (Pattern Speed Run)**

**Flow:**
1. Click "Heritage Challenge" card
2. **Video Introduction** (20 seconds):
   - Scene 1: Welcome & loom animation
   - Scene 2: How to play instructions
   - Scene 3: Ready to start
   - Controls: Back, Pause, Forward, Start Challenge
3. Click "🎯 Start Challenge"
4. **Game Starts:**
   - 60 seconds on timer
   - Target pattern shown (left)
   - Your grid (right)
   - Click cells to match pattern
   - Submit when ready
   - Get instant feedback
   - New pattern loads automatically
5. **Timer Ends:**
   - Final score displayed
   - Coins awarded
   - Streak updated (if all 3 completed today)
6. → **Return to Dashboard**

#### **B. Innovation Quiz**

**Flow:**
1. Click "Innovation Quiz" card
2. **Video Introduction** (20 seconds):
   - Scene 1: Industrial revolution
   - Scene 2: Modern innovations
   - Scene 3: Quiz preview
3. Click "🎯 Start Quiz"
4. **Quiz Starts:**
   - Multiple choice questions
   - Time limit per question (varies by difficulty)
   - 4 answer options
   - Click to select
   - Instant feedback (correct/incorrect)
   - Score accumulates
5. **Quiz Ends:**
   - Final score displayed
   - Coins awarded
   - Streak updated
6. → **Return to Dashboard**

#### **C. Smart Textile Engineering**

**Flow:**
1. Click "Smart Textile Engineering" card
2. **Video Introduction** (20 seconds):
   - Scene 1: Smart fabric demo
   - Scene 2: Material properties
   - Scene 3: Challenge preview
3. Click "🎯 Start Challenge"
4. **Engineering Simulator:**
   - Mission brief with requirements
   - Material sliders (Carbon, Silver, Polymer, Cotton)
   - Adjust percentages (must total 100%)
   - Real-time results:
     - Conductivity
     - Weight
     - Durability
     - Cost
   - Meet all requirements
   - Submit design
5. **Results:**
   - Score based on accuracy
   - Coins awarded
   - Streak updated
6. → **Return to Dashboard**

---

### **4. Leaderboard**

**Flow:**
1. Click "Global Rank" on dashboard
2. **Leaderboard Opens:**
   - Your rank displayed prominently
   - Your weekly score
   - 5 players above you
   - 5 players below you
   - Top 3 get medals (🥇🥈🥉)
   - Your position highlighted in blue
3. Click "← Back to Dashboard"
4. → **Return to Dashboard**

---

### **5. Avatar Builder**

**Flow:**
1. Click "👤 Avatar Builder" on dashboard
2. **Customization Screen:**
   - 3D avatar preview
   - Categories:
     - Skin Colors (free)
     - Hair Styles (some locked)
     - Hair Colors (some locked)
     - Top Colors (some locked)
     - Bottom Colors (some locked)
     - Accessories (some locked)
   - Locked items show price in coins
   - Click locked item to purchase
   - Click unlocked item to apply
3. Buttons:
   - 💾 Save Avatar
   - 🎲 Randomize
   - ← Back
4. → **Return to Dashboard**

---

### **6. Settings**

**Flow:**
1. Click "⚙️ Settings" on dashboard
2. **Settings Screen:**
   - **Account Settings:**
     - Email (read-only)
     - Name (editable)
     - Difficulty level (changeable)
   - **Game Settings:**
     - Sound effects (on/off)
     - Background music (on/off)
     - Music theme (6 options)
     - Auto-save (on/off)
   - **Password Change:**
     - Current password
     - New password
     - Confirm password
   - **Statistics:**
     - Account created date
     - Total playtime
     - Challenges completed
     - Highest score
   - **Danger Zone:**
     - Reset progress
     - Delete account
3. Click "← Back to Dashboard"
4. → **Return to Dashboard**

---

## **Daily Streak System**

**How It Works:**
1. Complete all 3 challenges in one day
2. Streak increases by 1
3. Come back tomorrow and complete all 3 again
4. Streak continues
5. Miss a day? Streak save protects you (if you have one)
6. No save? Streak resets to 0

**Rewards:**
- Every 7 days: Bonus coins (100 × streak/7)
- 7 days = 100 coins
- 14 days = 200 coins
- 21 days = 300 coins

---

## **Coin Economy**

**Earn Coins:**
- Complete challenges (varies by score)
- Streak milestones (every 7 days)
- High accuracy bonuses

**Spend Coins:**
- Avatar items (50-400 coins)
- Streak saves (500 coins each)

---

## **Difficulty Levels**

**Apprentice (Easy):**
- Longer time limits
- Easier questions
- Smaller patterns
- 1.0x score multiplier

**Artisan (Medium):**
- Medium time limits
- Moderate questions
- Medium patterns
- 1.5x score multiplier

**Master (Hard):**
- Short time limits
- Difficult questions
- Large patterns
- 2.0x score multiplier

---

## **Data Persistence**

**What's Saved:**
- Account info (email, name, level)
- Total score & rank
- Coins balance
- Challenge best scores
- Streak data
- Avatar customization
- Settings preferences

**Where It's Saved:**
- Supabase cloud database
- Accessible from any device
- Auto-saves after each challenge

---

## **Navigation Summary**

```
Registration/Login
       ↓
   Dashboard (Hub)
       ↓
   ┌───┴───┬───────┬─────────┐
   ↓       ↓       ↓         ↓
Heritage Innovation Future  Other
Challenge  Quiz   Engineering
   ↓       ↓       ↓         ↓
Video   Video   Video    Leaderboard
   ↓       ↓       ↓      Avatar
Game    Quiz   Simulator  Settings
   ↓       ↓       ↓         ↓
Score   Score   Score      ↓
   ↓       ↓       ↓         ↓
   └───┬───┴───────┴─────────┘
       ↓
   Dashboard
```

---

## **Key Features**

✅ **User Authentication** - Secure login/register
✅ **Cloud Database** - Progress saved online
✅ **Daily Streaks** - Encourages daily play
✅ **Leaderboard** - Competitive rankings
✅ **Coin Economy** - In-game currency
✅ **Avatar System** - Personalization
✅ **Multiple Challenges** - Varied gameplay
✅ **Difficulty Levels** - Scalable challenge
✅ **Settings** - Customizable experience
✅ **Auto-save** - Never lose progress

---

## **Testing Checklist**

- [ ] Register new account
- [ ] Login with existing account
- [ ] Complete Heritage Challenge
- [ ] Complete Innovation Quiz
- [ ] Complete Engineering Challenge
- [ ] Check streak updates
- [ ] Buy streak save
- [ ] View leaderboard
- [ ] Customize avatar
- [ ] Change settings
- [ ] Logout and login again
- [ ] Verify data persists

---

**The game has a complete, logical flow from registration to gameplay to progression!** 🎉
