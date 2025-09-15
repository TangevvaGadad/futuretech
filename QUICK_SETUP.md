# 🚀 Quick Database Setup

## Step 1: Get Your Neon Database URL

1. **Go to [neon.tech](https://neon.tech)**
2. **Sign up/Login** (free account)
3. **Create a new project:**
   - Click "Create Project"
   - Name it "futuretech-site"
   - Choose a region
   - Click "Create Project"

4. **Copy your connection string:**
   - Go to "Connection Details" tab
   - Copy the connection string (looks like this):
   ```
   postgresql://alex:AbC123dEf@ep-cool-darkness-123456.us-east-1.aws.neon.tech/neondb?sslmode=require
   ```

## Step 2: Update Your .env File

**Replace the placeholder in your `.env` file:**

1. Open `.env` file in your project root
2. Replace the placeholder URL with your actual Neon URL:

```env
DATABASE_URL="postgresql://your-actual-username:your-actual-password@ep-your-actual-endpoint.us-east-1.aws.neon.tech/neondb?sslmode=require"
```

## Step 3: Run These Commands

```bash
# Generate Prisma client
npx prisma generate

# Push schema to database
npx prisma db push

# Start your app
npm run dev
```

## ✅ That's It!

Your contact forms will now save to the database!

## 🔍 Test Your Setup

1. Go to your website
2. Fill out a contact form
3. Check your data in Neon dashboard or run:
   ```bash
   npx prisma studio
   ```

## 🆘 Still Having Issues?

Make sure your `.env` file:
- Is in the project root (same level as package.json)
- Has the correct Neon URL format
- Doesn't have extra spaces or quotes around the URL
