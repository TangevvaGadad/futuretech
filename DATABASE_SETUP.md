# Database Setup Guide for FutureTech Site

This guide will help you set up Prisma with Neon DB for your contact forms.

## 🚀 Quick Setup

### 1. Get Your Neon Database Connection String

1. **Visit [Neon.tech](https://neon.tech)**
2. **Create a free account** (no credit card required)
3. **Create a new project:**
   - Click "Create Project"
   - Choose a name (e.g., "futuretech-site")
   - Select a region close to your users
   - Click "Create Project"

4. **Get your connection string:**
   - In your project dashboard, go to the "Connection Details" tab
   - Copy the connection string (it looks like this):
   ```
   postgresql://username:password@ep-xxx-xxx.us-east-1.aws.neon.tech/neondb?sslmode=require
   ```

### 2. Configure Your Environment

1. **Create a `.env` file** in your project root:
   ```bash
   # Copy the env.example file
   cp env.example .env
   ```

2. **Update the `.env` file** with your actual connection string:
   ```env
   DATABASE_URL="postgresql://username:password@ep-xxx-xxx.us-east-1.aws.neon.tech/neondb?sslmode=require"
   ```

### 3. Generate Prisma Client and Run Migrations

```bash
# Generate Prisma client
npx prisma generate

# Push the schema to your database
npx prisma db push
```

### 4. Verify Your Setup

```bash
# Start your development server
npm run dev
```

## 📊 Database Schema

Your database now has two tables:

### Contact Section Table
- **Purpose**: Stores submissions from the main page contact form
- **Fields**:
  - `id` (String, Primary Key)
  - `firstName` (String, Required)
  - `lastName` (String, Required)
  - `phone` (String, Optional)
  - `email` (String, Required)
  - `message` (String, Required)
  - `createdAt` (DateTime, Auto-generated)
  - `updatedAt` (DateTime, Auto-updated)

### Contact Page Table
- **Purpose**: Stores submissions from the dedicated contact page
- **Fields**:
  - `id` (String, Primary Key)
  - `name` (String, Required)
  - `email` (String, Required)
  - `company` (String, Optional)
  - `message` (String, Required)
  - `createdAt` (DateTime, Auto-generated)
  - `updatedAt` (DateTime, Auto-updated)

## 🔧 API Endpoints

### Contact Section API
- **POST** `/api/contact/section` - Submit main page contact form
- **GET** `/api/contact/section` - Retrieve all main page submissions

### Contact Page API
- **POST** `/api/contact/page` - Submit contact page form
- **GET** `/api/contact/page` - Retrieve all contact page submissions

## 🛠️ Useful Commands

```bash
# View your data in Prisma Studio
npx prisma studio

# Reset your database (WARNING: This deletes all data)
npx prisma db push --force-reset

# Generate Prisma client after schema changes
npx prisma generate

# Deploy schema changes to production
npx prisma db push
```

## 🔍 Viewing Your Data

1. **Using Prisma Studio:**
   ```bash
   npx prisma studio
   ```
   This opens a web interface at `http://localhost:5555` where you can view and manage your data.

2. **Using Neon Dashboard:**
   - Go to your Neon project dashboard
   - Click on "SQL Editor"
   - Run queries like:
   ```sql
   SELECT * FROM contact_section;
   SELECT * FROM contact_page;
   ```

## 🚨 Troubleshooting

### Common Issues:

1. **"Database connection failed"**
   - Check your `DATABASE_URL` in `.env`
   - Ensure the connection string is correct
   - Verify your Neon project is active

2. **"Prisma client not found"**
   - Run `npx prisma generate`
   - Restart your development server

3. **"Table doesn't exist"**
   - Run `npx prisma db push`
   - Check if your schema is correct

### Getting Help:

- [Prisma Documentation](https://www.prisma.io/docs)
- [Neon Documentation](https://neon.tech/docs)
- [Prisma Discord](https://pris.ly/discord)

## 📝 Next Steps

1. Test your contact forms by submitting data
2. Set up email notifications (optional)
3. Add form validation (already included)
4. Consider adding a contact management dashboard
5. Set up database backups (Neon handles this automatically)

## 🔒 Security Notes

- Never commit your `.env` file to version control
- The `.env` file is already in `.gitignore`
- Your database connection string contains sensitive information
- Neon provides SSL encryption by default

---

**Need help?** Check the troubleshooting section above or refer to the official documentation links.
